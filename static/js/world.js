var latLng={
"United States of America":{
  location: [37.090240, -95.712891]
},
"Japan":{
  location: [36.204823, 138.252930]
},
"United Kingdom":{
  location: [55.378052, -3.435973]
},
"China":{
  location: [35.861660, 104.195396]
},
"New Zealand":{
  location: [-40.900558, 174.885971]
},
"Germany":{
  location: [51.165691, 10.451526]
},
"Canada":{
  location: [56.130367, -106.346771]
},
"Australia":{
  location: [-25.274399, 133.775131]
},
"Czech Republic":{
  location: [50.087811, 14.420460]
},
"Italy":{
  location: [41.871941, 12.567380]
},
"France":{
  location: [46.227638, 2.213749]
},
"Netherlands":{
  location: [52.132633, 5.291266]
},
"India":{
  location: [20.593683, 78.962883]
},
"Finland":{
  location: [61.924110, 25.748152]
},
"Denmark":{
  location: [56.263920, 9.501785]
},
"Spain":{
  location: [40.463669, -3.749220]
},
"Belgium":{
  location: [50.503887, 4.469936]
},
"Hong Kong":{
  location: [22.282150, 114.156880]
},
"Norway":{
  location: [60.472023, 8.468946]
},
"Hungary":{
  location: [47.162495, 19.503304]
},
"Bulgaria":{
  location: [42.733883, 25.485830]
},
"Ireland":{
  location: [53.412910, -8.243890]
},
"Iceland":{
  location: [64.963051, -19.020836]
},
"Philippines":{
  location: [12.879721, 121.774017]
},
"Peru":{
  location: [-9.189967, -75.015152]
},
"Uruguay":{
  location: [-32.522778, -55.765835]
},
"Turkey":{
  location: [38.963745, 35.243320]
},
"UAE":{
  location: [23.424076, 53.847816]
},
"Mexico":{
  location: [19.432680, -99.134210]
},
"Bahamas":{
  location: [25.034281, -77.396278]
},
"Brazil":{
  location: [-14.235004, -51.925282]
},
"Thailand":{
  location: [15.870032, 100.992538]
},
"South Korea":{
  location: [35.907757, 127.766922]
},
"Austria":{
  location: [47.516232, 14.550072]
},
"Sweden":{
  location: [60.128162, 18.643501]
},
"Cambodia":{
  location: [12.565679, 104.990967]
},
"Indonesia":{
  location: [-0.789275, 113.921326]
},
"Malaysia":{
  location: [-0.789275, 113.921326]
},
"Romania":{
  location: [45.943161, 24.966761]
},
"South Africa":{
  location: [-30.559483, 22.937506]
},
"Malta":{
  location: [5.937496, 14.375416]
},
"Singapore":{
  location: [1.352083, 103.819839]
},
"Russia":{
  location: [61.524010, 105.318756]
},
"Switzerland":{
  location: [46.818188, 8.227512]
},
"Argentina":{
  location: [-38.416096, -63.616673]
},
"Algeria":{
  location: [28.033886, 1.659626]
},
"Greece":{
  location: [39.074207, 21.824312]
},
"Poland":{
  location: [51.919437, 19.145136]
},
"Israel":{
  location: [31.046051, 34.851612]
},
"Sri Lanka":{
  location: [7.873054, 80.771797]
},
"Luxembourg":{
  location: [49.815273, 6.129583]
},
"Chile":{
  location: [-35.675148, -71.542969]
},
"Ukraine":{
  location: [48.379433, 31.165581]
},
"Taiwan":{
  location: [23.697809, 120.960518]
},
"Serbia":{
  location: [44.016521, 21.005859]
},
"Namibia":{
  location: [-22.957640, 18.490410]
},
"Palestine":{
  location: [31.952162, 35.233154]
},
"Mongolia":{
  location: [46.862495, 103.846657]
},
"Burkina Faso":{
  location: [12.238333, -1.561593]
},
"Ecuador":{
  location: [-1.831239, -78.183403]
},
"Saudi Arabia":{
  location: [23.885942, 45.079163]
},
"Iran":{
  location: [32.427910, 53.688046]
},
"Pakistan":{
  location: [30.375320, 69.345116]
},
"Bolivia":{
  location: [-16.290154, -63.588654]
},
"Qatar":{
  location: [25.354826, 51.183884]
},
"Georgia":{
  location: [41.693630, 44.801620]
},
"Afghanistan":{
  location: [33.939110, 67.709953]
},
"Bosnia":{
  location: [43.858181, 18.412340]
},
"Mali":{
  location: [17.570692, -3.996166]
},
"Ethiopia":{
  location: [9.145000, 40.489674]
},
"Congo":{
  location: [-4.038333, 21.758663]
},
"Jamaica":{
  location: [18.109581, -77.297508]
},
"Portugal":{
  location: [39.399872, -8.224454]
},
"Mauritania":{
  location: [21.007891, -10.940835]
},
"Cote d'Ivoire":{
  location: [5.349390, -4.017050]
},
"Tunisia":{
    location:[33.886917, 9.537499]
},
"Dominican Republic":{
    location: [18.735693, -70.162651]
}};

d3.json("/metadata/world_map").then(function (movieData){
    var dict= {};
  movieData.forEach(element => {
      if (element.productionCountries.length>0){
        if (element.productionCountries in dict){
            var elementexist=dict[element.productionCountries];
            if (element.revenue > elementexist.revenue) {
              dict[element.productionCountries]=element;
              console.log("Updating:" + element.productionCountry);
            }
          } else {
            dict[element.productionCountries]=element;
            console.log("Adding:" + element.productionCountries);
          }
      } 
  });
  var countries=[];
  console.log(Object.keys(dict));
  const keys=Object.keys(dict);
  for (const key of keys){
    var element= dict[key];
    console.log(key);
    if (element.productionCountries in latLng){
        element["location"]=latLng[element.productionCountries].location;
        countries.push(dict[key]);
    }
  }
  var myMap = L.map("map", {
    center: [0.00, 0.00],
    zoom: 2,
  });
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    bounds: [[-90,-180],[90,180]],
    noWrap: true,
    accessToken: API_KEY
  }).addTo(myMap);
  for (var i = 0; i < countries.length; i++) {
    var country= countries[i];
    L.marker(country.location)
      .bindPopup("<h4>" + country.title + "</h4><hr><p> Movie Revenue " +"$"+country.revenue + "</p>")
      .addTo(myMap);
  };
})