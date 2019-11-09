function initMap() {
  var opts = {
    zoom: 16,
    center: new google.maps.LatLng(35.681236,139.767125)
  };
  var map = new google.maps.Map(document.getElementById("map"), opts);

  map.addListener('click', function(e) {
    getLatLng(e.latLng, map)
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
