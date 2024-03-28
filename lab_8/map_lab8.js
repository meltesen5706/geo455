var mymap = L.map("map").setView([38.852501192, -96.608159610], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


// jQuery code for buttons

$(document).ready(function() {
    $("#btn1").click(function(){
        $("#splasher1").toggle();
    });
 /*   $("#btn2").click(function(){
        $("#splasher1").hide();
    }); */
    $("#btn3").click(function(){
        $("#splasher2").fadeIn();
    });
    $("#btn4").click(function(){
        $("#splasher2").fadeOut();
    });
});


// Icon variable

var icon = L.icon({
    iconUrl: "img/icon.png",
    iconSize: [20, 20],
    iconAnchor: [2.5, 2.5],
    popupAnchor: [0, -11]
});


// Cities variable

var cities = L.esri.featureLayer({
    url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Major_Cities/FeatureServer/0',
    pointToLayer: function (geojson, latlng) {
            return L.marker(latlng, {
              icon: icon
            });
          }
        }).addTo(mymap);

cities.bindPopup(function (layer) {
        return L.Util.template(
          "<p><strong>{NAME}</strong>, {ST}</p>",
          layer.feature.properties
        );
      });

var wildfireRisk = L.esri.imageMapLayer({
    url: 'https://apps.fs.usda.gov/fsgisx01/rest/services/RDW_Wildfire/RMRS_WRC_WildfireHazardPotential/ImageServer',
    // server response content type can be either 'json' (default) or 'image'
    f: 'image'
  }).addTo(mymap);

wildfireRisk.bindPopup(function (error, featureCollection) {
    if (error || featureCollection.features.length === 0) {
      return false;
    } else {
      return 'Risk Level: ' + featureCollection.features[0].properties.CLASS_DESC;
    }
  });



var overlays = {
    'Widlfire':wildfireRisk,
    "<img src='img/icon.png' height=20> Major Cities": cities};


//Creating the menu
var layerControl = L.control.layers({}, overlays, {collapsed: false}).addTo(mymap); //collapsed: true is defaults

    