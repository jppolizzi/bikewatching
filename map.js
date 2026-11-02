// Import Mapbox as an ESM module
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

console.log('Mapbox GL JS Loaded:', mapboxgl);

// Set your Mapbox access token here 
mapboxgl.accessToken = 'pk.eyJ1IjoianBwb2xpenppIiwiYSI6ImNtdnp0MHp3MDAxbXEyem9kZGU4ZG5sYzIifQ.y1Ba_Oq5WwGPmVXSiwhMCw';  
 
const map = new mapboxgl.Map({ 
  container: 'map', 
  style: 'mapbox://styles/mapbox/streets-v12', 
  center: [-71.09415, 42.36027],
  zoom: 12, 
  minZoom: 5, 
  maxZoom: 18, 
}); 
