function initMap() {
  var opts = {
    zoom: 16,
    center: new google.maps.LatLng(35.681236,139.767125)
  };
  var map = new google.maps.Map(document.getElementById("map"), opts);

  map.addListener('click', function(e) {
    getAddress(e.latLng);
    getLatLng(e.latLng, map);

    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });

    map.panTo(latLng);
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

function getLatLng(latLng, map = null) {
  document.getElementById('lat').textContent = latLng.lat();
  document.getElementById('lng').textContent = latLng.lng();
}

function fetchPresentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        getAddress(mapLatLng);
        getLatLng(mapLatLng, null);
      },
      function(error) {
        switch(error.code) {
          case 1: // PERMISSION_DENIED
            alert("位置情報の利用が許可されていません");
            break;
          case 2: // POSITION_UNAVAILABLE
            alert("現在位置が取得できませんでした");
            break;
          case 3: // TIMEOUT
            alert("タイムアウトになりました");
            break;
          default:
            alert("その他のエラー(エラーコード:"+error.code+")");
            break;
        }
      }
    );
  // Geolocation APIに対応していない
  } else {
    alert("この端末では位置情報が取得できません");
  }
}
