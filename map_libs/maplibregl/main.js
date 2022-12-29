// Harita bileşeninin oluşturulması için en az "container" parametresi gereklidir.
let map = new maplibregl.Map({
	container: 'map',
	style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
	center: [29, 41], // starting position [lng, lat]
	zoom: 9, // starting zoom
});

// Marker objesi haritanın `canvas` elemanının dışına eklenir.
// Bu nedenle `style` değiştiğinde `marker`ın görünürlüğü değişmez.
let marker = new maplibregl.Marker()
	.setLngLat([28.97154406, 41.03949347])
	.setPopup(
		new maplibregl.Popup().setHTML('<h1>İBB Kasımpaşa Ek Hizmet Binası</h1>')
	)
	.addTo(map);

// Harita için gerekli kaynakların yüklenmesi ve ilk görselleştirilmenin yapılmasını bekleyen event
map.on('load', (e) => {
	map.addSource('ibb-building-source', {
		type: 'geojson',
		data: {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: { name: 'feature-1' },
					geometry: {
						coordinates: [28.955308400515918, 41.01346224798044],
						type: 'Point',
					},
				},
				{
					type: 'Feature',
					properties: { name: 'feature-2' },
					geometry: {
						coordinates: [28.889973829362958, 41.00983608854921],
						type: 'Point',
					},
				},
			],
		},
	});
	map.addLayer({
		id: 'ibb-building-layer',
		type: 'circle',
		source: 'ibb-building-source',
		paint: {
			'circle-radius': 6,
			'circle-color': '#B42222',
		},
	});

	map.on('click', 'ibb-building-layer', (e) => {
		const feature = e.features[0];
		console.info(feature.properties.name);
	});

	// Harita üzerindeki tüm layer'ları yeni style tanımlandığı için siler
	map.setStyle(
		'https://api.maptiler.com/maps/hybrid/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'
	);

	marker.remove();

	// Cluster layer'ı için kaynak ve layer'ın eklenmesi
	fetch('https://api.ibb.gov.tr/ispark/Park')
		.then((response) => response.json())
		.then((data) => {
			const isparkGeojson = {
				type: 'FeatureCollection',
				features: data.map((item) => {
					return {
						type: 'Feature',
						properties: {
							name: item.parkName,
							available: item.emptyCapacity,
							total: item.capacity,
						},
						geometry: {
							type: 'Point',
							coordinates: [item.lng, item.lat],
						},
					};
				}),
			};
			map.addSource('ispark-source', {
				type: 'geojson',
				data: isparkGeojson,
				cluster: true,
				clusterMaxZoom: 14,
				clusterRadius: 50,
			});
			map.addLayer({
				id: 'cluster-layer',
				type: 'circle',
				source: 'ispark-source',
				filter: ['has', 'point_count'],
				paint: {
					'circle-color': '#51bbd6',
					'circle-radius': [
						'interpolate',
						['linear'],
						['get', 'point_count'],
						1,
						20,
						10,
						30,
						100,
						40,
					],
					'circle-stroke-width': 2,
					'circle-stroke-color': 'white',
				},
			});

			map.addLayer({
				id: 'cluster-count',
				type: 'symbol',
				source: 'ispark-source',
				filter: ['has', 'point_count'],
				layout: {
					'text-field': '{point_count_abbreviated}',
					'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
					'text-size': 12,
				},
				paint: {
					'text-color': '#fff',
				},
			});

			map.addLayer({
				id: 'ispark-layer',
				type: 'circle',
				source: 'ispark-source',
				filter: ['!', ['has', 'point_count']],
				paint: {
					'circle-radius': 6,
					'circle-color': '#B42222',
					'circle-stroke-width': 1,
					'circle-stroke-color': '#fff',
				},
			});
		});
});
