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

    // 地図本体描画
    map = new google.maps.Map(document.getElementById("mapField"), option);

    //マップにスタイルをセット
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    // マーカー設置
    var marker = new google.maps.Marker({
        position: currentPosition,
        map: map,
        icon: "img/event/marker0.png"
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