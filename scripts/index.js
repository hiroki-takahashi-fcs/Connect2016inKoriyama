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

    // マップスタイル
    /*
    var styles = [
        {
            stylers: [
            { hue: "#00ffe6" },
            { saturation: -20 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
            { lightness: 100 },
            { visibility: "simplified" }
            ]
        },{
            featureType: "road",
            elementType: "labels",
            stylers: [
            { visibility: "off" }
            ]
        }
    ];
    */

    var styles = [
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
//        origin: new google.maps.LatLng(37.398265, 140.388187),      // 出発地点の経度・緯度
//        destination: new google.maps.LatLng(37.491190, 140.258520), // 到着地の緯度・経度
        origin: "郡山駅",      // 出発地点の経度・緯度
        destination: "ホテル華の湯", // 到着地の緯度・経度
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
