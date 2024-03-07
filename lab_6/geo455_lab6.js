// Create map variable 1
var map1 = L.map("map1", {
    center: [51.48882027639122, -0.1028811094342392],
    zoom: 11,
});

// Create map variable 2
var map2 = L.map("map2", {
    center: [51.48882027639122, -0.1028811094342392],
    zoom: 11,
});

// Baselayer 1
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 11,
    minZoom: 5,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map1);

// Baselayer 2
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 11,
    minZoom: 5,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map2);

var currentMap = map1;

// Color codes 1
function getColor1(value) {
    return value > 139 ? '#08519c' :
        value > 87 ? '#3182bd' :
        value > 53 ? '#6baed6' :
        value > 32 ? '#bdd7e7' :
        '#eff3ff';
}

function style1(feature) {
    return {
        fillColor: getColor1(feature.properties.pop_den),
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}

var geojson1 = L.geoJson(data, {
    style: style1,
    onEachFeature: onEachFeature1
}).bindPopup(function (layer) {
    return layer.feature.properties.NAME +
        '<p style="color:darkblue">' +
        layer.feature.properties.pop_den.toString() + ' people/hectare </p>';
}).addTo(map1);

// Color codes 2
function getColor2(value) {
    return value > 32 ? '#005a32' :
        value > 21 ? '#238b45' :
        value > 13 ? '#74c476' :
        value > 8 ? '#a1d99b' :
        '#e5f5e0';
}

function style2(feature) {
    return {
        fillColor: getColor2(feature.properties.dens_all),
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}

var geojson2 = L.geoJson(data, {
    style: style2,
    onEachFeature: onEachFeature2
}).bindPopup(function (layer) {
    return layer.feature.properties.NAME +
        '<p style="color:darkgreen">' +
        layer.feature.properties.dens_all.toString() + ' English speaking households/hectare </p>';
}).addTo(map2);

// Mouseover effects 1
function highlightFeature1(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight1(e) {
    geojson1.resetStyle(e.target);
}

function onEachFeature1(feature, layer) {
    layer.on({
        mouseover: highlightFeature1,
        mouseout: resetHighlight1,
    });
}

// Mouseover effects 2
function highlightFeature2(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight2(e) {
    geojson2.resetStyle(e.target);
}

function onEachFeature2(feature, layer) {
    layer.on({
        mouseover: highlightFeature2,
        mouseout: resetHighlight2,
    });
}

// Legend 1
var legend1 = L.control({
    position: 'bottomright'
});

legend1.onAdd = function (map1) {

    var div = L.DomUtil.create('div', 'legend'),
        grades = [0, 32, 53, 87, 139];

    div.innerHTML = '<b>Population Density</b><br>';

    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor1(grades[i] + 1) + '"></i>' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend1.addTo(map1);

// Legend 2
var legend2 = L.control({
    position: 'bottomright'
});

legend2.onAdd = function (map2) {

    var div = L.DomUtil.create('div', 'legend'),
        grades = [0, 8, 13, 21, 32];

    div.innerHTML = '<b>English Speaking <br> Households per Hectare</b><br>';

    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor2(grades[i] + 1) + '"></i>' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend2.addTo(map2);


// Create basemap layer group for each map
var basemaps1 = {
    'Population Density': map1,
};
var basemaps2 = {
    'English Speaking Households per Hectare': map2,
};

// Create overlay layer group containing both maps
var overlayMaps = {
    'Map 1': basemaps1,
    'Map 2': basemaps2,
};

// Create the menu window with checkboxes
var layerControl = L.control.layers(null, overlayMaps, { collapsed: false });

// Add the layer control to both maps
layerControl.addTo(map1);
layerControl.addTo(map2);