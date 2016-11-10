$(window).ready(function () {
	mapInit();
});

var googlemap;
var directionDisplay;
var directionsService = new google.maps.DirectionsService();
var marker = [];
var infoWindow = [];
var currentInfoWindow = null;
var side_list = new Object();

function mapInit() {
    var centerPosition = new google.maps.LatLng(37.415408, 140.144065);
    var option = {
        zoom : 9,
        center : centerPosition,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    //地図本体描画
    googlemap = new google.maps.Map(document.getElementById("mapField"), option);

    directionDisplay = new google.maps.DirectionsRenderer();
    directionDisplay.setMap(googlemap);
    directionDisplay.setPanel(document.getElementById("route"));

    var $script = $('#script');
    var dataArray = JSON.parse($script.attr('data-array'));
    for (var i=0; i<dataArray.length; i++){
        //マーカー設置
        marker[i] = new google.maps.Marker({
            position:  new google.maps.LatLng(dataArray[i][6], dataArray[i][7]),
            map: googlemap,
            title: dataArray[i][4]
        });

        // 情報ウィンドウ
        infoWindow[i] = new google.maps.InfoWindow({
            content: "<div id='infoWindow'><h3>" + dataArray[i][4] + "</h3>"
                     + "<br><a href='next.php?index=" + i + "'>詳細画面へ>>></div>",
            maxWidth: 400
        });

        markerEvent(i, dataArray[i]);

        side_list[i] = marker[i];
    }

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
        getRoute(new google.maps.LatLng(dataArray[6], dataArray[7]));

    });
}

// ルート描画
function getRoute(latlng){
    /* 
    // 郡山駅から目的地まで
    var request = {
        origin: new google.maps.LatLng(37.398265, 140.388187),      // 出発地点の経度・緯度
        destination: latlng,                                        // 到着地の緯度・経度
        travelMode: google.maps.DirectionsTravelMode.DRIVING        // ルートの種類
    }
    */
    // 郡山駅から目的地経由の華の湯
    var request = {
        origin: new google.maps.LatLng(37.398265, 140.388187),      // 出発地点の経度・緯度
        destination: new google.maps.LatLng(37.491190, 140.258520), // 到着地の緯度・経度
        waypoints: [{                                               // 中継地点
            location: latlng,
            stopover: true
        }],
        travelMode: google.maps.DirectionsTravelMode.DRIVING        // ルートの種類
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
