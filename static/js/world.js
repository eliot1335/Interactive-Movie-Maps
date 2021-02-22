
var myMap = L.map("map", {
  center: [0.00,0.00],
  zoom: 1,
});


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(myMap);


var productionCountries= [{
  title: "Avatar",
  revenue: "$2,787,965,087.00",
  location: [37.090240,-95.712891]
},
{
  title: "Furious 7",
  revenue: "$1,506,249,360.00",
  location: [36.204823,138.252930]
},
{
  title: "Harry Potter and the Deathly Hallows: Part 2",
  revenue: "$1,342,000,000.00",
  location: [55.378052,-3.435973]
},
{
  title: "Iron Man 3",
  revenue: "$1,215,439,994.00",
  location:[35.861660,104.195396]
},
{
  title: "The Lord of the Rings: The Return of the King",
  revenue: "$1,118,888,979.00",
  location: [-40.900558,174.885971]
},
{
  title: "Harry Potter and the Chamber of Secrets",
  revenue: "$876,688,482.00",
  location: [51.165691,10.451526]
},
{
  title: "2012",
  revenue: "$769,653,595.00",
  location: [56.130367,-106.346771]
},
{
  title: "The Matrix Reloaded",
  revenue: "$738,599,701.00",
  location: [-25.274399,133.775131]
},
{
  title: "Mission: Impossible - Ghost Protocol",
  revenue: "$694,713,380.00",
  location: [50.087811,14.420460]
},
{
  title: "Casino Royale",
  revenue: "$599,045,960.00",
  location: [41.871941,12.567380]
},
{
  title: "Terminator 2: Judgment Day",
  revenue: "$520,000,000.00",
  location: [46.227638,2.213749]
},
{
  title: "Dunkirk",
  revenue: "$519,876,949.00",
  location: [52.132633, 5.291266]
},
{
  title: "Slumdog Millionaire",
  revenue: "$377,910,544.00",
  location: [20.593683,78.962883]
},
{
  title: "The Angry Birds Movie",
  revenue: "$349,779,543.00",
  location:[61.924110,25.748152]
},
{
  title: "The Lego Batman Movie",
  revenue: "$311,950,384.00",
  location: [56.263920,9.501785]
},
{
  title: "Wrath of the Titans",
  revenue: "$301,000,000.00 ",
  location: [40.463669,-3.749220]
},
{
  title: "Miss Peregrine's Home for Peculiar Children",
  revenue: "$296,485,719.00",
  location: [50.503887,4.469936]
},
{
  title: "The Departed",
  revenue: "$289,847,354.00",
  location: [22.282150,114.156880]
},
{
  title: "The Girl with the Dragon Tattoo",
  revenue: "$232,617,430.00",
  location: [60.472023,8.468946]
},
{
  title: "Inferno",
  revenue: "$220,021,259.00",
  location: [47.162495,19.503304]
},
{
  title: "London Has Fallen",
  revenue: "$205,754,447.00",
  location: [42.733883,25.485830]
},
{
  title: "King Arthur",
  revenue: "$203,567,857.00",
  location: [53.412910,-8.243890]
},
{
  title: "Everest",
  revenue: "$203,427,584.00",
  location: [64.963051,-19.020836]
},
{
  title: "Need for Speed",
  revenue: "$203,277,636.00",
  location: [12.879721,121.774017]
},
{
  title: "The Specialist",
  revenue: "$170,362,582.00",
  location: [-9.189967, -75.015152]
},
{
  title: "Miami Vice",
  revenue: "$163,794,509.00",
  location: [-32.522778, -55.765835]
},
{
  title: "Recep ƒ∞vedik 4",
  revenue: "$149,521,495.00",
  location: [38.963745, 35.243320]
},
{
  title: "Ghost Rider: Spirit of Vengeance",
  revenue: "$149,217,355.00",
  location: [23.424076, 53.847816]
},
{
  title: "The Mexican",
  revenue: "$147,845,033.00",
  location: [3.634501, -102.552788]
},
{
  title: "Thunderball",
  revenue: "$141,195,658.00",
  location: [25.034281, -77.396278]
},
{
  title: "Anaconda",
  revenue: "$136,885,767.00",
  location: [-14.235004, -51.925282]
},
{
  title: "Mechanic: Resurrection",
  revenue: "$125,729,635.00",
  location: [15.870032, 100.992538]
},
{
  title: "The Admiral: Roaring Currents",
  revenue: "$112,156,811.00",
  location: [35.907757, 127.766922]
},
{
  title: "Downfall",
  revenue: "$92,180,910.00",
  location: [47.516232, 14.550072]
},
{
  title: "Atomic Blonde",
  revenue: "$90,007,945.00",
  location: [60.128162, 18.643501]
},
{
  title: "War Dogs",
  revenue: "$86,234,523.00",
  location: [12.565679, 104.990967]
},
{
  title: "Hitman: Agent 47",
  revenue: "$81,967,450.00",
  location: [-0.789275, 113.921326]
},
{
  title: "Kabali",
  revenue: "$74,000,000.00",
  location: [-0.789275, 113.921326]
},
{
  title: "Mirrors",
  revenue: "$72,436,439.00",
  location: [45.943161, 24.966761]
},
{
  title: "The Dark Tower",
  revenue: "$71,000,000.00",
  location: [-30.559483, 22.937506]
},
{
  title: "13 Hours: The Secret Soldiers of Benghazi",
  revenue: "$69,411,370.00",
  location: [5.937496, 14.375416]
},
{
  title: "Star Wars: The Clone Wars",
  revenue: "$68,282,844.00",
  location: [1.352083, 103.819839]
},
{
  title: "Stalingrad",
  revenue: "$68,129,518.00",
  location: [61.524010, 105.318756]
},
{
  title: "Date Movie",
  revenue: "$48,548,426.00",
  location: [46.818188, 8.227512]
},
{
  title: "Dancer in the Dark",
  revenue: "$40,031,879.00",
  location: [-38.416096, -63.616673]
},
{
  title: "Days of Glory",
  revenue: "$22,963,701.00",
  location: [28.033886, 1.659626]
},
{
  title: "My Life in Ruins",
  revenue: "$20,455,276.00",
  location: [39.074207, 21.824312]
},
{
  title: "The Way Back",
  revenue: "$20,348,249.00",
  location: [51.919437, 19.145136]
},
{
  title: "The Delta Force",
  revenue: "$17,768,900.00",
  location: [31.046051, 34.851612]
},
{
  title: "Monkey Kingdom",
  revenue: "$16,661,077.00",
  location: [7.873054, 80.771797]
},
{
  title: "Bastille Day",
  revenue: "$14,397,593.00",
  location: [49.815273, 6.129583]
},
{
  title: "Jackie",
  revenue: "$13,960,394.00",
  location: [-35.675148, -71.542969]
},
{
  title: "Hitler's Kaput!",
  revenue: "$9,713,500.00",
  location: [48.379433, 31.165581]
},
{
  title: "Eat Drink Man Woman",
  revenue: "$7,294,403.00",
  location: [23.697809, 120.960518]
},
{
  title: "Kelly's Heroes",
  revenue: "$5,200,000.00",
  location: [44.016521, 21.005859]
},
{
  title: "Red Scorpion",
  revenue: "$4,192,440.00",
  location: [-22.957640, 18.490410]
},
{
  title: "Paradise Now",
  revenue: "$3,357,075.00",
  location: [31.952162, 35.233154]
},
{
  title: "The Eagle Huntress",
  revenue: "$3,162,153.00",
  location: [46.862495, 103.846657]
},
{
  title: "Sankofa",
  revenue: "$2,691,899.00",
  location: [12.238333, -1.561593]
},
{
  title: "Vibes",
  revenue: "$1,883,811.00",
  location: [-1.831239, -78.183403]
},
{
  title: "Wadjda",
  revenue: "$1,347,747.00",
  location: [23.885942, 45.079163]
},
{
  title: "Children of Heaven",
  revenue: "$900,000.00",
  location: [32.427910, 53.688046]
},
{
  title: "3 Braves",
  revenue: "$645,135.00",
  location: [30.375320, 69.345116]
},
{
  title: "Blackthorn",
  revenue: "$623,528.00",
  location: [-16.290154, -63.588654]
},
{
  title: "The Reluctant Fundamentalist",
  revenue: "$519,535.00",
  location: [25.354826, 51.183884]
},
{
  title: "Repentance",
  revenue: "$215,496.00",
  location: [41.693630, 44.801620]
},
{
  title: "The Patience Stone",
  revenue: "$148,671.00",
  location: [33.939110, 67.709953]
},
{
  title: "Once Upon a Time in Anatolia",
  revenue: "$138,730.00",
  location: [43.858181, 18.412340]
},
{
  title: "Bamako",
  revenue: "$111,000.00",
  location: [17.570692, -3.996166]
},
{
  title: "Difret",
  revenue: "$49,667.00",
  location: [9.145000, 40.489674]
},
{
  title: "Viva Riva!",
  revenue: "$43,880.00",
  location: [-4.038333, 21.758663]
},
{
  title: "Third World Cop",
  revenue: "$40,717.00",
  location: [18.109581, -77.297508]
},
{
  title: "The Death of Louis XIV",
  revenue: "$17,355.00",
  location: [39.399872, -8.224454]
},
{
  title: "Waiting for Happiness",
  revenue: "$7,406.00",
  location: [21.007891, -10.940835]
},
{
  title: "Adanggaman",
  revenue: "$28.00",
  location: [5.349390, -4.017050]
}
];

for (var i=0; i<productionCountries.length;i++){
  var country= countries[i];
  L.marker(country.location)
  .bindPopup("<h1>"+ country.title+ "</h1><hr><h2> Movie Revenue"+ country.revenue+ "</h2>")
  .addTo(myMap);
}

