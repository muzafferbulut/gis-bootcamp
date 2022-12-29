 <h1 align="center">Leaflet</h1>
 <p align="center">
 <img src="../../banner02.png">
  <br />
</p>

- Leaflet, mobil uyumlu, düşük boyutlu ve birçok uygulama geliştiricinin ihtiyacı olan harita fonksiyonlarına sahip açık kaynak javascript kütüphanesidir. Leaflet kolay kullanım, masaüstü ve mobil cihazlarda verimlilik, eklentiler ile genişletilebilen, iyi dokümante edilmiş ve herkesin katkı sağlayabileceği bir kütüphane olarak kendisini konumlandırmaktadır.

- Leaflet kütüphanesinde kullanılan temel bileşen haritanın oluşturulabilmesi için `HTML` dosyası içinde `DOM Element` ihtiyacı bulunmaktadır.

```
const map = L.map('map').setView([41, 29], 8);
```

- Altlık harita olarak açık kaynak tercih edilecekse en çok kullanılan `OpenStreetMap` servisi şu şekilde tanımlanıp, daha önce oluşturulan harita bileşenine eklenir;

```
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
```

- Leaflet kütüphanesinde veriler katman veya tekil olarak harita bileşenine eklenebilmektedirler. Geliştiricilerin ihtiyaç duyacağı konularda hızlı ve verimli çözümler sunmak için Leaflet tarafında bu yol seçilmiştir.

```
const marker = L.marker([41, 29]).addTo(map);
```

- Leaflet kütüphanesinde `event listener` harita bileşenine eklenebildiği gibi `marker`, `geojson` gibi elementlere de eklenebilmektedir.

```
const getFeatureName = (e) => {
	console.info(e.layer.feature.properties.name);
};
const geoJSONLayer = L.geoJSON(geoJSONData)
	.on('click', getFeatureName)
	.addTo(map);
```
