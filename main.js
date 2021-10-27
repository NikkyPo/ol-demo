import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';


import VectorSource from 'ol/source/Vector';
import { Vector as VectorLayer } from 'ol/layer';
import { GeoJSON } from 'ol/format';
import { Stroke, Style } from 'ol/style';

//////////////////////////////////////////
// 1. OpenLayers Boilerplate
//////////////////////////////////////////

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: fromLonLat([-93.41, 44.92]),
    zoom: 9
  })
});
















































//////////////////////////////////////////
// 2. Add an ArcGIS REST feature service
//////////////////////////////////////////

// ArcGIS feature service url with query
// 
// query: where 1 = 1 (all records returned)
//        format = geojson

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