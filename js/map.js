// $(document).ready(function() {
//   var bittersMap = (function () {
//     var address = $('.address').text(),
//         geocoder = new google.maps.Geocoder(),
//         mapCanvas = document.getElementById('map-canvas'),
//         mapOptions = {
//           draggable: false,
//           disableDefaultUI: true,
//           mapTypeId: google.maps.MapTypeId.ROADMAP,
//           scrollwheel: false,
//           zoom: 15
//         },
//         map = new google.maps.Map(mapCanvas, mapOptions);

//     geocoder.geocode({ 'address': address }, function(results, status) {
//       var latLon = results[0].geometry.location;
//       map.setCenter(latLon);

//       marker = new google.maps.Marker({ map: map, position: latLon });
//     });

//     return {
//       init: function () {
//         map.set('styles', [{
//           featureType: 'landscape',
//           elementType: 'geometry',
//           stylers: [
//             { hue: '#ffff00' },
//             { saturation: 30 },
//             { lightness: 10}
//           ]}
//         ]);
//       }
//     };
//   }());
// });
