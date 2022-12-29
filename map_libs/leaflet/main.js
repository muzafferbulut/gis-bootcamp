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
const map = L.map('map').setView([41, 29], 8);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
const marker = L.marker([41, 29]).addTo(map);
const getFeatureName = (e) => {
	console.info(e.layer.feature.properties.name);
};
const geoJSONLayer = L.geoJSON(geoJSONData)
	.on('click', getFeatureName)
	.addTo(map);

L.esri.Vector.vectorTileLayer(
	'https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer'
).addTo(map);
