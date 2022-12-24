const geojsonData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [28, 41],
      },
      properties: {
        name: "IBB-1",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [29, 40],
      },
      properties: {
        name: "IBB-2",
      },
    },
  ],
};

require(["esri/Map", "esri/views/MapView", "esri/layers/GeoJSONLayer"], (
  Map,
  MapView,
  GeoJSONLayer
) => {
    const map = new Map({
        basemap : 'topo-vector',
    });

    const view = new MapView({
        map, 
        center: [29,41],
        zoom: 8,
        container: 'map',
    });

    const blob = new Blob([JSON.stringify(geojsonData)],{
        type: "application/json"
    }); 

    const url = URL.createObjectURL(blob); 

    const layer = new GeoJSONLayer({
        url: url,
        outFields: ['name']},
        map.add(layer)
        )})