function initMap() {
  var opts = {
    zoom: 16,
    center: new google.maps.LatLng(35.681236,139.767125)
  };
  var map = new google.maps.Map(document.getElementById("map"), opts);

  map.addListener('click', function(e) {
    getAddress(e.latLng);
    getLatLng(e.latLng, map)
  });
}

function getAddress(latLng) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({
    latLng: latLng
  }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK && results[0].geometry) {
      document.getElementById('address').textContent = results[0].formatted_address.replace(/^日本、/, '');
    }
  });
}

function getLatLng(latLng, map) {
  document.getElementById('lat').textContent = latLng.lat();
  document.getElementById('lng').textContent = latLng.lng();

  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });

  map.panTo(latLng);
}
