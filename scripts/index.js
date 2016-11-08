$(window).ready(function () {
	mapInit();
});


function mapInit() {
    var centerPosition = new google.maps.LatLng(37.415408, 140.144065);
    var option = {
        zoom : 9,
        center : centerPosition,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    //地図本体描画
    var googlemap = new google.maps.Map(document.getElementById("mapField"), option);

    //マーカー設置
    var marker = new google.maps.Marker({
        position: centerPosition,
        map: googlemap,
        title: 'TEST'
    });
}
