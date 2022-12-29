const geoJSONData = {
	type: 'FeatureCollection',
	features: [
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [28, 41],
			},
			properties: {
				name: 'IBB-1',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [29, 40],
			},
			properties: {
				name: 'IBB-2',
			},
		},
	],
};
require(['esri/Map', 'esri/views/MapView', 'esri/layers/GeoJSONLayer'], (
	Map,
	MapView,
	GeoJSONLayer
) => {
	const map = new Map({
		basemap: 'topo-vector', // Basemap layer service
	});
	const view = new MapView({
		map: map,
		center: [29, 41], // Longitude, latitude
		zoom: 8, // Zoom level
		container: 'map', // Div element
	});
	const blob = new Blob([JSON.stringify(geoJSONData)], {
		type: 'application/json',
	});
	const url = URL.createObjectURL(blob);
	const layer = new GeoJSONLayer({ url, outFields: ['*'] });
	map.add(layer);
	view.on('click', function (event) {
		var screenPoint = {
			x: event.x,
			y: event.y,
		};

		// Search for graphics at the clicked location
		view.hitTest(screenPoint).then(function (response) {
			if (response.results.length) {
				var graphic = response.results.filter(function (result) {
					// check if the graphic belongs to the layer of interest
					return result.graphic.layer === layer;
				})[0].graphic;
				// do something with the result graphic
				console.info(graphic.attributes.name);
			}
		});
	});
});
