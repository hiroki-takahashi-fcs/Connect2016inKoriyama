$(window).ready(function () {
	createMark();
	mapInit();
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
/*
    var styles = [  // Lost In The Desert
        {"elementType":"labels","stylers":[{"visibility":"off"},{"color":"#f49f53"}]},
        {"featureType":"landscape","stylers":[{"color":"#f9ddc5"},{"lightness":-7}]},
        {"featureType":"road","stylers":[{"color":"#813033"},{"lightness":43}]},
        {"featureType":"poi.business","stylers":[{"color":"#645c20"},{"lightness":38}]},
        {"featureType":"water","stylers":[{"color":"#1994bf"},{"saturation":-69},{"gamma":0.99},{"lightness":43}]},
        {"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#f19f53"},{"weight":1.3},{"visibility":"on"},{"lightness":16}]},
        {"featureType":"poi.business"},
        {"featureType":"poi.park","stylers":[{"color":"#645c20"},{"lightness":39}]},
        {"featureType":"poi.school","stylers":[{"color":"#a95521"},{"lightness":35}]},{},
        {"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"color":"#813033"},{"lightness":38},{"visibility":"off"}]},{},{},{},{},{},{},{},{},{},{},{},{"elementType":"labels"},
        {"featureType":"poi.sports_complex","stylers":[{"color":"#9e5916"},{"lightness":32}]},{},
        {"featureType":"poi.government","stylers":[{"color":"#9e5916"},{"lightness":46}]},
        {"featureType":"transit.station","stylers":[{"visibility":"off"}]},
        {"featureType":"transit.line","stylers":[{"color":"#813033"},{"lightness":22}]},
        {"featureType":"transit","stylers":[{"lightness":38}]},
        {"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#f19f53"},{"lightness":-10}]},{},{},{}
    ];
*/
/*
    var styles = [    // Old Dry Mud
        {"featureType":"landscape","stylers":[{"hue":"#FFAD00"},{"saturation":50.2},{"lightness":-34.8},{"gamma":1}]},
        {"featureType":"road.highway","stylers":[{"hue":"#FFAD00"},{"saturation":-19.8},{"lightness":-1.8},{"gamma":1}]},
        {"featureType":"road.arterial","stylers":[{"hue":"#FFAD00"},{"saturation":72.4},{"lightness":-32.6},{"gamma":1}]},
        {"featureType":"road.local","stylers":[{"hue":"#FFAD00"},{"saturation":74.4},{"lightness":-18},{"gamma":1}]},
        {"featureType":"water","stylers":[{"hue":"#00FFA6"},{"saturation":-63.2},{"lightness":38},{"gamma":1}]},
        {"featureType":"poi","stylers":[{"hue":"#FFC300"},{"saturation":54.2},{"lightness":-14.4},{"gamma":1}]}
    ];
*/

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



    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
   
    //地図本体描画
    googlemap = new google.maps.Map(document.getElementById("mapField"), option);

    googlemap.mapTypes.set('map_style', styledMap);
    googlemap.setMapTypeId('map_style');


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

        // キャラに喋らす
        document.getElementById('character').rows[1].cells[0].innerHTML = dataArray[i][8];
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
//        origin: new google.maps.LatLng(37.398265, 140.388187),      // 出発地点の経度・緯度
//        destination: new google.maps.LatLng(37.491190, 140.258520), // 到着地の緯度・経度
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