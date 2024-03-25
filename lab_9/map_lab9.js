var mymap = L.map("map").setView([43.0915773, -89.4117481], 8);

        var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1
        });

        var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/light-v9',
            tileSize: 512,
            zoomOffset: -1
        });

        grayscale.addTo(mymap);

        var baseLayers = {
            'Streets': streets,
            'Grayscale': grayscale,
        };

L.control.layers(baseLayers, null, { collapsed: true }).addTo(mymap);


var migrationLayer = new L.migrationLayer({
    map: mymap,
    data: data,
    pulseRadius:25,
    pulseBorderWidth:1,
    arcWidth:1,
    arcLabel:false,
    arcLabelFont:'16px sans-serif',
    maxWidth:10,
});

migrationLayer.addTo(mymap);


var cities = L.geoJson(loc, {
     style: function (feature) {
        return { color: '#3179b1', weight: 0.5, opacity: 0.7};
    },
    onEachFeature: function(feature, featureLayer) {
        featureLayer.bindTooltip(feature.properties.NAME, {permanent: false, direction: 'right'});
    }
}).addTo(mymap);
    
mymap.fitBounds(cities.getBounds());



function hide(){
    migrationLayer.hide();
}
function show(){
    migrationLayer.show();
}
function play(){
    migrationLayer.play();
}
function pause(){
    migrationLayer.pause();
}
        