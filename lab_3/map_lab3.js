var mymap = L.map("map").setView([41.891056, -87.626136], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var myIcon1 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon2 = L.icon({
    iconUrl: 'images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon3 = L.icon({
    iconUrl: 'images/icon_3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon4 = L.icon({
    iconUrl: 'images/icon_4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon5 = L.icon({
    iconUrl: 'images/icon_5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon6 = L.icon({
    iconUrl: 'images/icon_6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon7 = L.icon({
    iconUrl: 'images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon8 = L.icon({
    iconUrl: 'images/icon_8.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon9 = L.icon({
    iconUrl: 'images/icon_9.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon10 = L.icon({
    iconUrl: 'images/icon_10.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon11 = L.icon({
    iconUrl: 'images/icon_11.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var Adler = L.marker([41.866854, -87.606211], {icon: myIcon1}).bindPopup("<b>Adler Planetarium").addTo(mymap);
var ArtInst = L.marker([41.87958, -87.62371], {icon: myIcon2}).bindPopup("<b>Art Institute of Chicago").addTo(mymap);
var Buck = L.marker([41.87579, -87.61894], {icon: myIcon3}).bindPopup("<b>Buckingham Fountain").addTo(mymap);
var CG = L.marker([41.8825, -87.62334], {icon: myIcon4}).bindPopup("<b>Cloud Gate").addTo(mymap);
var Field = L.marker([41.86626, -87.61698], {icon: myIcon5}).bindPopup("<b>Field Museum").addTo(mymap);
var Gino = L.marker([41.89588, -87.62305], {icon: myIcon6}).bindPopup("<b>Gino’s East").addTo(mymap);
var Zoo = L.marker([41.9217,  -87.63364], {icon: myIcon7}).bindPopup("<b>Lincoln Park Zoo").addTo(mymap);
var CArt = L.marker([41.89721,  -87.62098], {icon: myIcon8}).bindPopup("<b>Museum Of Contemporary Art").addTo(mymap);
var Pier = L.marker([41.89186, -87.60509], {icon: myIcon9}).bindPopup("<b>Navy Pier").addTo(mymap);
var Beach = L.marker([41.91722,  -87.62696], {icon: myIcon10}).bindPopup("<b>North Avenue Beach").addTo(mymap);
var Shedd = L.marker([41.86757, -87.61403], {icon: myIcon11}).bindPopup("<b>Shedd Aquarium").addTo(mymap);