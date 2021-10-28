import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';


import VectorSource from 'ol/source/Vector';
import { Vector as VectorLayer } from 'ol/layer';
import { GeoJSON } from 'ol/format';
import { Stroke, Style } from 'ol/style';

import Overlay from 'ol/Overlay';

//////////////////////////////////////////
// 1. OpenLayers Boilerplate
//////////////////////////////////////////

const map = new Map({ // create Map object
  target: 'map', // points to <div> in .html
  layers: [ // define list of layers
    new TileLayer({ // type of layer
      source: new OSM() // source of layer
    })
  ],
  view: new View({ // customize map object
    center: fromLonLat([-93.41, 44.92]), // define center point
    zoom: 9 // zoom level
  })
});





















































//////////////////////////////////////////
// 2. Add GeoJSON
//
// GeoSpatial Commons: https://gisdata.mn.gov/dataset/us-mn-state-metc-trans-regional-trails-land
//////////////////////////////////////////

// const mnTrails = new VectorLayer({ // new Layer declared as variable
//   source: new VectorSource ({ // source of the layer
//     format: new GeoJSON(), // source is geojson
//     url: '/data/mn-trails.geojson' // location of source
//   })
// })

// const map = new Map({
//   target: 'map',
//   layers: [
//     new TileLayer({
//       source: new OSM()
//     }),
//     mnTrails // add layer to map
//   ],
//   view: new View({
//     center: fromLonLat([-93.41, 44.92]),
//     zoom: 9
//   })
// });













































//////////////////////////////////////////
// 3. Style GeoJSON
//////////////////////////////////////////

// const mnTrails = new VectorLayer({ 
//   source: new VectorSource ({
//     format: new GeoJSON(),
//     url: '/data/mn-trails.geojson'
//   })
// })

// mnTrails.setStyle( // dot notation to set style on trails layer
//   new Style({ // declare new Style properties
//     stroke: new Stroke({ // stroke = line properties
//       color: '#5a5a5a',
//       width: 3,
//     }),
//   })
// )

// const map = new Map({
//   target: 'map',
//   layers: [
//     new TileLayer({
//       source: new OSM()
//     }),
//     mnTrails
//   ],
//   view: new View({
//     center: fromLonLat([-93.41, 44.92]),
//     zoom: 9
//   })
// });





































//////////////////////////////////////////
// 4. Add a pop-up
//////////////////////////////////////////

// const mnTrails = new VectorLayer({
//   source: new VectorSource({
//     format: new GeoJSON(),
//     url: '/data/mn-trails.geojson'
//   })
// })

// mnTrails.setStyle(
//   new Style({
//     stroke: new Stroke({
//       color: '#5a5a5a',
//       width: 4,
//     }),
//   })
// )

// const container = document.getElementById('popup'); // define html content

// const overlay = new Overlay({ 
//   element: container, // define new overlay html element
// });

// const map = new Map({
//   target: 'map',
//   layers: [
//     new TileLayer({
//       source: new OSM()
//     }),
//     mnTrails
//   ],
//   view: new View({
//     center: fromLonLat([-93.41, 44.92]),
//     zoom: 9
//   }),
//   overlays: [overlay] // Add Pop-up as overlay to Map
// });

// map.on('click', function (evt) { // Check for a "click" event
//   const feature = map.forEachFeatureAtPixel(evt.pixel, function (featureInfo) { // return Feature info based on click location
//     return featureInfo;
//   });
//   if (feature) { // If a feature was clicked on
//     container.style.display = "block"; // Display html
//     overlay.setPosition(evt.coordinate); // set overlay position on map
//     container.innerHTML = feature.get('NAME'); // Display "NAME" property in html

//   } else { // Hide html if feature was not clicked on
//     container.style.display = "none";
//   }
// })




//////////////////////////////////////////
// (Extra): Add the same data as ArcGIS REST feature service
// source: https://gisdata.mn.gov/dataset/us-mn-state-metc-trans-regional-trails-land
//////////////////////////////////////////

// const trailsURL = 'https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/TrailsRegional/FeatureServer/0/query?where=1%3D1&f=geojson'

// // Set layer source
// const vectorSource = new VectorSource({

//   format: new GeoJSON(), // define type of format you are calling
//   loader: function (extent, resolution, projection, success, failure) {

//     var xhr = new XMLHttpRequest(); // create a new request
//     xhr.open('GET', trailsURL); // fetch trailsURL 

//     xhr.onload = function () {
//       if (xhr.status == 200) { // if request was successful, read the response
//         var features = vectorSource.getFormat().readFeatures(xhr.response, {
//           featureProjection: projection // get response and define projection
//         });
//         vectorSource.addFeatures(features);
//         success(features)
//       } else { // if request failed, stop fetching
//         vectorSource.removeLoadedExtent(extent);
//         failure();
//       }
//     }

//     xhr.send(); // send request
//   }
// });

// // Create new Layer with source and add style
// const vector = new VectorLayer({
//   source: vectorSource,
//   style: new Style({
//     stroke: new Stroke({
//       color: 'blue',
//       width: 2
//     })
//   }),
// });

// const map = new Map({
//   target: 'map',
//   layers: [
//     new TileLayer({
//       source: new OSM()
//     }),
//     vector // New map layer
//   ],
//   view: new View({
//     center: fromLonLat([-93.41, 44.92]),
//     zoom: 9,
//   })
// });

//////////////////////////////////////////
// 3. Create a Pop-up
//////////////////////////////////////////