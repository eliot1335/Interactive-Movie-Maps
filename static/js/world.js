var satellitemap_background = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1IjoiY3NtaWNzdW4iLCJhIjoiY2tsYnUzZXpnMGJkdDJvb2JpdGFkbnhldyJ9.1Ai2P2KNHYF1eKdfqSakDA");
var outdoors_background = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1IjoiY3NtaWNzdW4iLCJhIjoiY2tsYnUzZXpnMGJkdDJvb2JpdGFkbnhldyJ9.1Ai2P2KNHYF1eKdfqSakDA");

  var map = L.map("map", {
  center: [0.00,0.00],
  zoom: 2,
  layers: [satellitemap_background, outdoors_background]
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:API_KEY
}).addTo(map);

var baseMaps = {
  Satellite: satellitemap_background,
  Outdoors: outdoors_background
};

L
  .control
  .layers(baseMaps)
  .addTo(map);
