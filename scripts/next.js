var map;
var currentPosition;
var service;
var infowindow;

$(window).ready(function () {

    var lat = $('#location').data('lat');
    var lon = $('#location').data('lon');

    currentPosition = new google.maps.LatLng(lat, lon);

	mapInit();

    $('.placeSearch-btn').on('click', function () {
        
        var types = $(this).data('types');

        // マップの表示位置を対象位置に戻す
        map.setCenter(currentPosition);

        service.nearbySearch({
            location: currentPosition,
            radius: '3000', // メートル
            types: [types]
        }, callback);
    });

});

function mapInit() {
    
    var option = {
        zoom : 15,
        center : currentPosition,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };

    // 地図本体描画
    map = new google.maps.Map(document.getElementById("mapField"), option);

    // マーカー設置
    var marker = new google.maps.Marker({
        position: currentPosition,
        map: map
    });

    infowindow = new google.maps.InfoWindow();

    service = new google.maps.places.PlacesService(map);
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}