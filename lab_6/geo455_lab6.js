//Create the map variable
var mymap = L.map("map", {
    center: [51.48882027639122, -0.1028811094342392], 
    zoom: 11,
    layers: [grayscale, landmarks]});

// Create custom popups with images
var greatwallPopup = "Great Wall of China<br/><img         src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/20090529_Great_Wall_8185.jpg/256px-20090529_Great_Wall_8185.jpg' alt='great wall wiki' width='150px'/>";

var customOptions ={'maxWidth': '150','className' : 'custom'};


// Set up landmark variables and individual landmarks
var landmarks = L.layerGroup();
var greatwall = L.marker([40.43208734303398, 116.570439270903]).bindPopup(greatwallPopup, customOptions).addTo(landmarks);


//Set up the baselayers and WMS layer
var streets =  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
   attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
   maxZoom: 11,
   minZoom: 5
 }).addTo(mymap);

L.geoJson(data).addTo(mymap); 


// Create menu items
var baseLayers = {
    'Grayscale': grayscale,
    'Streets': streets,
    "Hillshade": topo,
    };

var overlays = {'Landmarks': landmarks};

//Create the menu
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: true}).addTo(mymap);
