function initMap() {
  var opts = {
    zoom: 16,
    center: new google.maps.LatLng(35.681236,139.767125)
  };
  var map = new google.maps.Map(document.getElementById("map"), opts);
}
