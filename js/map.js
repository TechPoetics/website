function initMap() {

    var address = $('.address').text();
    var geocoder = new google.maps.Geocoder();
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
            draggable: false,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            zoom: 15
        };

    var map = new google.maps.Map(mapCanvas, mapOptions);

    geocoder.geocode({ 'address': address }, function(results, status) {
        var latLon = results[0].geometry.location;
        map.setCenter(latLon);

        marker = new google.maps.Marker({ map: map, position: latLon });
    });

    map.set('styles', [{
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
            { hue: '#ffff00' },
            { saturation: 30 },
            { lightness: 10}
        ]}
    ]);

};
