$(window).ready(function () {
	createMark();
	mapInit();

    $('#regist-btn').on('click', function() {
        window.location.href = 'register.php';
    });
});

var googlemap;
var directionDisplay;
var directionsService = new google.maps.DirectionsService();
var marker = [];
var targetMarker;
var infoWindow = [];
var currentInfoWindow = null;
var side_list = new Object();

// マーク判別データ保存用のグローバル変数
var eventMark = [];

// イベントマークアイコンのMax数
var eventImgNum = 10;

// Excelデータから、表示するマークを判別する
function createMark(){

	eventMark.length = 0;
	
	// データを読み込む
	var $script = $('#script');
    var dataArray = JSON.parse($script.attr('data-array'));
    
	// Excelのイベント種別データと、その出現回数の取得
	var eventName = [];
	var eventNum = [];
	for (var i=0; i<dataArray.length; i++){

		if(dataArray[i][3] == "個人イベント" || dataArray[i][3] == ""){
			continue;
		}

		var index = eventName.indexOf(dataArray[i][3]);

		if(index != -1){
			eventNum[index]++;
		}
		else {
			eventName.push(dataArray[i][3]);
			eventNum.push(1);
		}
	}
	
	// マーク画像数分に種別をソート（最後の一つは、その他用）
	//var folderPath = "img/event/";
	//eventImgNum = (new ActiveXObject("Shell.Application")).NameSpace(folderPath).Items().count;

	for (var i=1; i<eventImgNum; i++){

		eventMark.push("");
		var num = 0;
		for (var j=0; j<eventName.length; j++){

			if(eventMark.indexOf(eventName[j]) == -1){

				if(num < eventNum[j]){
					eventMark[i - 1] = eventName[j];
					num = eventNum[j];
				}
			}
		}
	}
}


function mapInit() {
    var centerPosition = new google.maps.LatLng(37.415408, 140.144065);
    var option = {
        zoom : 9,
        center : centerPosition,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };

    // マップスタイル
    var styles = [    // Avocado World
        {"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#aee2e0"}]},
        {"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#abce83"}]},
        {"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#769E72"}]},
        {"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#7B8758"}]},
        {"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#EBF4A4"}]},
        {"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#8dab68"}]},
        {"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},
        {"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#5B5B3F"}]},
        {"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ABCE83"}]},
        {"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
        {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#A4C67D"}]},
        {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#9BBF72"}]},
        {"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#EBF4A4"}]},
        {"featureType":"transit","stylers":[{"visibility":"off"}]},
        {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#87ae79"}]},
        {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#7f2200"},{"visibility":"off"}]},
        {"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":4.1}]},
        {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#495421"}]},
        {"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]}
    ];

    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
   
    //地図本体描画
    googlemap = new google.maps.Map(document.getElementById("mapField"), option);

    //マップにスタイルをセット
    googlemap.mapTypes.set('map_style', styledMap);
    googlemap.setMapTypeId('map_style');

    // ルート検索用
    directionDisplay = new google.maps.DirectionsRenderer();
    directionDisplay.setMap(googlemap);
    directionDisplay.setPanel(document.getElementById("route"));

    var $script = $('#script');
    var dataArray = JSON.parse($script.attr('data-array'));

    for (var i=0; i<dataArray.length; i++){
    
    	//マーカーのアイコン設定
    	var markNum = eventMark.indexOf(dataArray[i][3]);
    	if(markNum == -1){
    		if(dataArray[i][3] == "個人イベント"){
    			markNum = -1;
    		}
    		else {
    			markNum = eventImgNum - 1;
    		}
    	}
    	
        //マーカー設置
        marker[i] = new google.maps.Marker({
            position:  new google.maps.LatLng(dataArray[i][6], dataArray[i][7]),
            map: googlemap,
            animation: google.maps.Animation.DROP,
            title: dataArray[i][4],
            icon: "img/event/marker" + (markNum + 1) + ".png"
        });

        // 情報ウィンドウ
        infoWindow[i] = new google.maps.InfoWindow({
            content: "<div id='infoWindow'><h3>" + dataArray[i][4] + "</h3>"
                     + "<br><a href='next.php?index=" + i + "'>詳細画面へ>>></div>",
            maxWidth: 400
        });

        markerEvent(i, dataArray);

        side_list[i] = marker[i];
    }

    // クリックイベントを追加
    googlemap.addListener('rightclick', function(e) {

        if (targetMarker != null)
        {
            targetMarker.setMap(null);
        }

        // マーカーを設置
        targetMarker = new google.maps.Marker({
            position: e.latLng,
            map: googlemap
        });
    });

}

// マーカーにイベントを作成
function markerEvent(i, dataArray){
    marker[i].addListener('click', function(){
        // 別の情報ウィンドウが開いていたら閉じる
        if (currentInfoWindow){
            currentInfoWindow.close();
        }
        // 情報ウィンドウ開く
        infoWindow[i].open(googlemap, marker[i]);
        currentInfoWindow = infoWindow[i];

        // ルート検索を行う
        getRoute(new google.maps.LatLng(dataArray[i][6], dataArray[i][7]));

        // マーカーにアニメーションを設定
        if (marker[i].getAnimation()){
        } else {
            // ほかのマーカーのアニメーションをとめる
            for (var idx=0; idx<dataArray.length; idx++) {
                marker[idx].setAnimation(null);
            }
            // はねさす
            marker[i].setAnimation(google.maps.Animation.BOUNCE);
        }

        // 放射線量CSVより最も近いデータを取得
        var $script = $('#script2');
        var dataArray_h = JSON.parse($script.attr('data_h-array'));
        
        var Radiation;
        var distance_min;
        for (var j=0; j<dataArray_h.length; j++){
            var distance = getDistance(dataArray[i][6], dataArray[i][7],
                            dataArray_h[j][2], dataArray_h[j][3], 0);
            if (j == 0) {
                distance_min = distance;
                Radiation = dataArray_h[j][5] + dataArray_h[j][6];
            } else {
                if (distance < distance_min){
                    distance_min = distance;
                    Radiation = dataArray_h[j][5] + dataArray_h[j][6];
                }
            }
        }

        // 説明文表示
        document.getElementById('character').rows[1].cells[0].innerHTML = dataArray[i][8] + "<br>" + Radiation;

        
    });
}

// ルート描画
function getRoute(latlng){
    /* 
    // 郡山駅から目的地まで
    var request = {
        origin: new google.maps.LatLng(37.398265, 140.388187),      // 出発地点の経度・緯度
        destination: latlng,                                        // 到着地の緯度・経度
        // 交通手段
//        travelMode: google.maps.DirectionsTravelMode.DRIVING        // 自動車
//        travelMode: google.maps.DirectionsTravelMode.BICYCLING      // 自転車
        travelMode: google.maps.DirectionsTravelMode.TRANSIT        // 電車
//        travelMode: google.maps.DirectionsTravelMode.WALKING        // 徒歩
    }
    */

    // 郡山駅から目的地経由の華の湯
    var request = {
        origin: "郡山駅",                  // 出発地点の経度・緯度
        destination: "ホテル華の湯",       // 到着地の緯度・経度
        waypoints: [{                     // 中継地点
            location: latlng,
            stopover: true
        }],
        // 交通手段
        travelMode: google.maps.DirectionsTravelMode.DRIVING        // 自動車
//        travelMode: google.maps.DirectionsTravelMode.BICYCLING      // 自転車
//        travelMode: google.maps.DirectionsTravelMode.TRANSIT        // 電車
//        travelMode: google.maps.DirectionsTravelMode.WALKING        // 徒歩
    }

    directionsService.route(request, function(result, status){
        if (status==google.maps.DirectionsStatus.OK){
            directionDisplay.setDirections(result);
        } else {

        }
    });
}

// 一覧から選択された場合の疑似イベント作成
function fopenMarker(markerid){
    google.maps.event.trigger(side_list[markerid], 'click');
}

function clickEventFunc() {
    console.log('右クリック');

    var lat = event.latLng.lat();
    var lng = event.latLng.lng();

    marker[0] = new google.maps.Marker({

        position: new google.maps.LatLng(lat, lng),
        map: googlemap,
        animation: google.maps.Animation.DROP

    });
}

/**
 * 2点間の緯度経度から距離を取得
 * 測地線航海算法を使用して距離を算出する。
 * @see http://hamasyou.com/blog/2010/09/07/post-2/
 * @param float 緯度1
 * @param float 経度2
 * @param float 緯度2
 * @param float 経度2
 * @param 小数点以下の桁数(べき乗で算出精度を指定)
 */
function getDistance(lat1, lng1, lat2, lng2, precision){
  var distance = 0;
  if( ( Math.abs(lat1 - lat2) < 0.00001 ) && ( Math.abs(lng1 - lng2) < 0.00001 ) ) {
    distance = 0;
  }else{
    lat1 = lat1 * Math.PI / 180;
    lng1 = lng1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;
    lng2 = lng2 * Math.PI / 180;

    var A = 6378140;
    var B = 6356755;
    var F = ( A - B ) / A;

    var P1 = Math.atan( ( B / A ) * Math.tan(lat1) );
    var P2 = Math.atan( ( B / A ) * Math.tan(lat2) );

    var X = Math.acos( Math.sin(P1) * Math.sin(P2) + Math.cos(P1) * Math.cos(P2) * Math.cos(lng1 - lng2) );
    var L = ( F / 8 ) * ( ( Math.sin(X) - X ) * Math.pow( (Math.sin(P1) + Math.sin(P2) ), 2) / Math.pow( Math.cos(X / 2), 2 ) - ( Math.sin(X) - X ) * Math.pow( Math.sin(P1) - Math.sin(P2), 2 ) / Math.pow( Math.sin(X), 2) );

    distance = A * ( X + L );
    var decimal_no = Math.pow(10, precision);
    distance = Math.round(decimal_no * distance / 1) / decimal_no;
  }
  return distance;
}


