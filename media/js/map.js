function initialize_gmaps() {
  // initialize new google maps LatLng object
  var myLatlng = new google.maps.LatLng(40.705189, -74.009209);
  // set the map options hash
  var mapOptions = {
    center: myLatlng,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  // get the maps div's HTML obj
  var map_canvas_obj = document.getElementById("map-canvas");
  // initialize a new Google Map with the options
  var map = new google.maps.Map(map_canvas_obj, mapOptions);
  var bounds = new google.maps.LatLngBounds();
  // Add the marker to the map
  var marker = restaurants.map(function(office){
    return new google.maps.Marker({
      position: new google.maps.LatLng( office.place.location[0], office.place.location[1]),
      title: office.name,
      icon: {
        path: SQUARE_ROUNDED,
        fillColor: '#00CCBB',
        fillOpacity: 1,
        strokeColor: '',
        strokeWeight:0
      },
      map_icon_label: '<span class="map-icon map-icon-restaurant"></span>'
    })
  });

  marker.forEach(function(marker){
    marker.setMap(map);
    bounds.extend(marker.position);
    map.fitBounds(bounds);
  });

  // Add the marker to the map by calling setMap()
  //marker.setMap(map);
}

$(document).ready(function () {
  initialize_gmaps();
});

$(function () {
  var windowH = $(window).height();
  var wrapperH = $('#map-canvas').height();
  if (windowH > wrapperH) {
    $('#map-canvas').css({ 'height': ($(window).height()-100) + 'px' });
  }
  $(window).resize(function () {
    var windowH = $(window).height();
    var wrapperH = $('#map-canvas').height();
    var differenceH = windowH - wrapperH;
    var newH = wrapperH + differenceH;
    var truecontentH = $('#truecontent').height();
    if (windowH > truecontentH) {
      $('#map-canvas').css('height', (newH-100) + 'px');
    }

  })
});
