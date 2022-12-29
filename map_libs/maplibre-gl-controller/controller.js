const btnRotate = document.getElementById('btn-rotate');
const arrow = document.getElementById('arrow');

let map = new maplibregl.Map({
	container: 'map',
	style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
	center: [29, 41], // starting position [lng, lat]
	zoom: 9, // starting zoom
});

// 'Rotate' event'ı harita döndüğünde tetiklenir
// 'btn-rotate' butonu harita döndüğünde görünür olur
// 'arrow' elementi harita döndüğünde döner
map.on('rotate', (e) => {
	btnRotate.classList.remove('hide');
	btnRotate.classList.remove('opacity-0');
	const target = e.target;
	const bearing = target.getBearing();
	arrow.style.transform = `rotate(${bearing}deg)`;
});

// 'Rotateend' event'ı harita döndürme işlemi bittiğinde tetiklenir
// Harita kuzeye doğru döndüğünde 'btn-rotate' butonu gizlenir
map.on('rotateend', (e) => {
	const target = e.target;
	const bearing = target.getBearing();
	if (bearing === 0) {
		btnRotate.classList.add('opacity-0');
	}
});

// 'btn-rotate' butonuna tıklandığında harita kuzeye doğru döndürülür
btnRotate.addEventListener('click', (e) => {
	map.resetNorth();
});

// 'btn-rotate' butonu 1 ms sonra gizlenir
btnRotate.addEventListener('transitionend', (e) => {
	setTimeout(() => {
		e.target.classList.add('hide');
	}, 1);
});

map.on('load', () => {
	const layerCheckbox = document.getElementById('layer-checkbox');
	layerCheckbox.classList.remove('hide');
	map.addSource('ibb', {
		type: 'geojson',
		data: ibbGeoJSON,
	});

	map.addLayer({
		id: 'ibb',
		type: 'circle',
		source: 'ibb',
		paint: {
			'circle-radius': 10,
			'circle-color': '#00f',
		},
		layout: {
			visibility: 'none',
		},
	});
	layerCheckbox.addEventListener('change', (e) => {
		if (e.target.checked) {
			map.setLayoutProperty('ibb', 'visibility', 'visible');
		} else {
			map.setLayoutProperty('ibb', 'visibility', 'none');
		}
	});
});
