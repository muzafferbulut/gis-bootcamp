 <h1 align="center">Openlayers</h1>
 <p align="center">
 <img src="../../banner02.png">
  <br />
</p>

- Openlayers herhangi bir web uygulamasına dinamik haritalar ekleyebileceğiniz açık kaynak javascript kütüphanesidir. Canvas 2D ve WebGL teknolojilerini içeren Openlayers kütüphanesi ile mobil dostu, raster veya vektörel verilerden oluşan harita uygulamaları geliştirilebilir. Topluluk tarafından geliştirilen eklentiler ile Openlayers kütüphanesinin kapsamı kolaylıkla genişletilebilir.

- Openlayers kütüphanesinin temel bileşeni olan `Map`, `View`, bir veya daha fazla katman ve HTML dosyasına eklenmiş bir `DOM Element` ihtiyaç duyar.

```
const map = new ol.Map({
    view: new ol.View({
        center: [0, 0],
        zoom: 5,
    }),
    target: 'map',
})
```

- Harita bileşenleri anlamlı olabilmek için mutlaka harita katmanlarına ihtiyaç duyar. Vektörel veya raster veriyi kapsayan katmanlar farklı tiplerde olabilmektedirler. Harita üzerinden herhangi bir bilgi alınmayacak veya harita ile aksiyona girilmeyecekse raster yoksa vektörel katmanlar kullanılmaktadır.
- Openlayers kütüphanesinde katman oluşturmak için öncelikle katmanın kaynağı oluşturulmalıdır. Kullanılacak katman tipine göre kaynak ve katman türü uyumlu seçilmelidir. Altlık olarak kullanılacak katmanlar genel olarak raster türünde oldukları için `ol.source.Tile` tipi kullanılır. Openlayers geliştiricilerin hayatlarını kolaylaştırmak için bazı açık kaynak raster katman kaynaklarını ön tanımlı olarak kütüphane içinde barındırmaktadır.
- OpenStreetMap tarafından açık kaynak olarak sunulan altlık harita katmanı şu şekilde tanımlanır ve harita bileşenine eklenir;

```
const osmLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
});
map.addLayer(osmLayer);
```

- Openlayers kütüphanesinde veriler katman kaynakları üzerinden yönetildiği için tekil bir nokta oluşturulmak istense dahi öncelikle bir katman oluşturulmalı ardından `Feature` objesi katmanın kaynağına eklenmelidir.

```
const marker = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([29, 41])),
    name: "Marker",
});
const vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [marker]
    })
});
map.addLayer(vectorLayer);
```

- Openlayers kütüphanesi için `event listener` harita bileşenine eklenebilmektedir. Bir vektörel katmandan bilgi alınmak istendiğinde harita bileşenine tanımlanan `event listener` fonksiyonu içine tıklanan noktadaki objeleri dönen `getFeatures` metodu çalıştırılır.

```
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
```
