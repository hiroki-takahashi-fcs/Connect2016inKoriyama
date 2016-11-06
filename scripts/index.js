$(window).ready(function () {
	mapInit();
});


function mapInit() {
    var centerPosition = new google.maps.LatLng(37.395765, 140.330066);
    var option = {
        zoom : 18,
        center : centerPosition,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    //地図本体描画
    var googlemap = new google.maps.Map(document.getElementById("mapField"), option);
}
