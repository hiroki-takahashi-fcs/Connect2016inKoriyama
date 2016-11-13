var map;
var currentPosition;
var service;
var infowindow;
var atm = [];
var bar = [];
var cafe = [];
var car_rental = [];
var convenience_store = [];
var gas_station = [];
var hospital = [];
var parking = [];
var restaurant = [];
var spa = [];
var taxi_stand = [];
var train_station = [];
var types;

$(window).ready(function () {

    var lat = $('#location').data('lat');
    var lon = $('#location').data('lon');

    currentPosition = new google.maps.LatLng(lat, lon);

	mapInit();

    $('.placeSearch-cb').on('change', function () {
        
        console.log('チェックボックス変更イベント');

        types = $(this).data('types');

        // マップの表示位置を対象位置に戻す
        //map.setCenter(currentPosition);

        if ($(this).prop('checked'))
        {
            // 周辺を検索しマーカーを設置する
            service.nearbySearch({
                location: currentPosition,
                radius: '3000', // メートル
                types: [types]
            }, callback);

        }
        else
        {
            switch (types)
            {
                case 'atm':
                    for (var i = 0; i < atm.length; i++)
                    {
                        atm[i].setMap(null);
                    }
                    break;

                case 'bar':
                    for (var i = 0; i < bar.length; i++)
                    {
                        bar[i].setMap(null);
                    }
                    break;

                case 'cafe':
                    for (var i = 0; i < cafe.length; i++)
                    {
                        cafe[i].setMap(null);
                    }
                    break;

                case 'car_rental':
                    for (var i = 0; i < car_rental.length; i++)
                    {
                        car_rental[i].setMap(null);
                    }
                    break;

                case 'convenience_store':
                    for (var i = 0; i < convenience_store.length; i++)
                    {
                        convenience_store[i].setMap(null);
                    }
                    break;

                case 'gas_station':
                    for (var i = 0; i < gas_station.length; i++)
                    {
                        gas_station[i].setMap(null);
                    }
                    break;

                case 'hospital':
                    for (var i = 0; i < hospital.length; i++)
                    {
                        hospital[i].setMap(null);
                    }
                    break;

                case 'parking':
                    for (var i = 0; i < parking.length; i++)
                    {
                        parking[i].setMap(null);
                    }
                    break;

                case 'restaurant':
                    for (var i = 0; i < restaurant.length; i++)
                    {
                        restaurant[i].setMap(null);
                    }
                    break;

                case 'spa':
                    for (var i = 0; i < spa.length; i++)
                    {
                        spa[i].setMap(null);
                    }
                    break;
                
                case 'taxi_stand':
                    for (var i = 0; i < taxi_stand.length; i++)
                    {
                        taxi_stand[i].setMap(null);
                    }
                    break;

                case 'train_station':
                    for (var i = 0; i < train_station.length; i++)
                    {
                        train_station[i].setMap(null);
                    }
                    break;
            }
               
        }

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

        // 種別によってマーカー配列を初期化する
        switch (types)
        {
            case 'atm':
                if (atm != null)
                {
                    atm = [];
                }
                break;

            case 'bar':
                if (bar != null)
                {
                    bar = [];
                }
                break;

            case 'cafe':
                if (cafe != null)
                {
                    cafe = [];
                }
                break;

            case 'car_rental':
                if (car_rental != null)
                {
                    car_rental = [];
                }
                break;

            case 'convenience_store':
                if (convenience_store != null)
                {
                    convenience_store = [];
                }
                break;

            case 'gas_station':
                if (gas_station != null)
                {
                    gas_station = [];
                }
                break;

            case 'hospital':
                if (hospital != null)
                {
                    hospital = [];
                }
                break;

            case 'parking':
                if (parking != null)
                {
                    parking = [];
                }
                break;

            case 'restaurant':
                if (restaurant != null)
                {
                    restaurant = [];
                }
                break;

            case 'spa':
                if (spa != null)
                {
                    spa = [];
                }
                break;
            
            case 'taxi_stand':
                if (taxi_stand != null)
                {
                    taxi_stand = [];
                }
                break;

            case 'train_station':
                if (train_station != null)
                {
                    train_station = [];
                }
                break;
        }
        

        for (var i = 0; i < results.length; i++) {

            var name = results[i].name;
            var placeLoc = {
    
                position: results[i].geometry.location

            }

            switch(types) {
                case 'atm':
                    atm[i] = new google.maps.Marker(placeLoc);
                    atm[i].setMap(map);
                    google.maps.event.addListener(atm[i], 'click', function() {
                        infowindow.setContent(name);
                        infowindow.open(map, this);
                    });
                    break;

                case 'bar':
                    bar[i] = new google.maps.Marker(placeLoc);
                    bar[i].setMap(map);
                    google.maps.event.addListener(bar[i], 'click', function() {
                        infowindow.setContent(name);
                        infowindow.open(map, this);
                    });
                    break;

                case 'cafe':
                    cafe[i] = new google.maps.Marker(placeLoc);
                    cafe[i].setMap(map);
                    google.maps.event.addListener(cafe[i], 'click', function() {
                        infowindow.setContent(name);
                        infowindow.open(map, this);
                    });
                    break;

                case 'car_rental':
                    car_rental[i] = new google.maps.Marker(placeLoc);
                    car_rental[i].setMap(map);
                    google.maps.event.addListener(car_rental[i], 'click', function() {
                        infowindow.setContent(name);
                        infowindow.open(map, this);
                    });
                    break;

                case 'convenience_store':
                    convenience_store[i] = new google.maps.Marker(placeLoc);
                    convenience_store[i].setMap(map);
                    google.maps.event.addListener(convenience_store[i], 'click', function() {
                        infowindow.setContent(name);
                        infowindow.open(map, this);
                    });
                    break;

                case 'gas_station':
                    gas_station[i] = new google.maps.Marker(placeLoc);
                    gas_station[i].setMap(map);
                    google.maps.event.addListener(gas_station[i], 'click', function() {
                        infowindow.setContent(name);
                        infowindow.open(map, this);
                    });
                    break;

                case 'hospital':
                    hospital[i] = new google.maps.Marker(placeLoc);
                    hospital[i].setMap(map);
                    google.maps.event.addListener(hospital[i], 'click', function() {
                        infowindow.setContent(name);
                        infowindow.open(map, this);
                    });
                    break;

                case 'parking':
                    parking[i] = new google.maps.Marker(placeLoc);
                    parking[i].setMap(map);
                    google.maps.event.addListener(parking[i], 'click', function() {
                        infowindow.setContent(name);
                        infowindow.open(map, this);
                    });
                    break;

                case 'restaurant':
                    restaurant[i] = new google.maps.Marker(placeLoc);
                    restaurant[i].setMap(map);
                    google.maps.event.addListener(restaurant[i], 'click', function() {
                        infowindow.setContent(name);
                        infowindow.open(map, this);
                    });
                    break;

                case 'spa':
                    spa[i] = new google.maps.Marker(placeLoc);
                    spa[i].setMap(map);
                    google.maps.event.addListener(spa[i], 'click', function() {
                        infowindow.setContent(name);
                        infowindow.open(map, this);
                    });
                    break;
                
                case 'taxi_stand':
                    taxi_stand[i] = new google.maps.Marker(placeLoc);
                    taxi_stand[i].setMap(map);
                    google.maps.event.addListener(taxi_stand[i], 'click', function() {
                        infowindow.setContent(name);
                        infowindow.open(map, this);
                    });
                    break;

                case 'train_station':
                    train_station[i] = new google.maps.Marker(placeLoc);
                    train_station[i].setMap(map);
                    google.maps.event.addListener(train_station[i], 'click', function() {
                        infowindow.setContent(name);
                        infowindow.open(map, this);
                    });
                    break;
            }
        }
    }
}
