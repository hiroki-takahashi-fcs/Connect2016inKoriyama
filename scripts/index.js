$(window).ready(function () {
	mapInit();
});

var googlemap;
var marker = [];
var infoWindow = [];
var currentInfoWindow = null;

function mapInit() {
    var centerPosition = new google.maps.LatLng(37.415408, 140.144065);
    var option = {
        zoom : 9,
        center : centerPosition,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    //地図本体描画
    googlemap = new google.maps.Map(document.getElementById("mapField"), option);

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
            content: "<div style=”margin: 5px; height: 200px”><h3>" + dataArray[i][4] + "</h3><br><a href='next.php?index=" + i + "'>詳細画面へ>>></div>",
            maxWidth: 400
        });

        markerEvent(i);
    }

}

function markerEvent(i){
    marker[i].addListener('click', function(){
        if (currentInfoWindow){
            currentInfoWindow.close();
        }
        infoWindow[i].open(googlemap, marker[i]);
        currentInfoWindow = infoWindow[i];
    });
}

