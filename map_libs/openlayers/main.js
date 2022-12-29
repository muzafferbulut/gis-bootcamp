const map = new ol.Map({
	target: 'map',
	view: new ol.View({
		center: ol.proj.fromLonLat([29, 41]),
		zoom: 8,
	}),
});

const osmLayer = new ol.layer.Tile({
	source: new ol.source.OSM(),
});

map.addLayer(osmLayer);

const marker = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([29, 41])),
	name: 'Marker',
});
const vectorLayer = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: [marker],
	}),
});
map.addLayer(vectorLayer);

const getFeatureName = function (pixel) {
	vectorLayer.getFeatures(pixel).then(function (features) {
		const feature = features.length ? features[0] : undefined;

		if (features.length) {
			const name = feature.get('name');
			console.info(name);
		} else {
			console.warn('no feature');
		}
	});
};

map.on('click', function (evt) {
	getFeatureName(evt.pixel);
});
