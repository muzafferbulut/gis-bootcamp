 <h1 align="center">ArcGIS Javascript</h1>
 <p align="center">
 <img src="../../banner02.png">
  <br />
</p>

- ArcGIS Javascript CBS sektörünün köklü şirketlerinden olan Esri'nin açık kaynak olarak sunduğu bir web harita kütüphanesidir. İki ve üç boyutlu harita uygulamaları geliştirilebilen kütüphane, geliştircilerin hayatını kolaylaştıracak birçok hazır araç içermektedir. Ayrıca ArcGIS Online üzerinden oluşturulmuş harita ve katmanlar `token` ile uygulamaya entegre edilebilmektedir.

- ArcGIS JS `require` yapısı ile kullanıldığı için `ES5` veya `ES6` farketmeksizin projede bulunacak modüllerin `javascript` dosyasına aktarılması gerekmektedir.

- İki boyutlu bir harita bileşeni oluşturmak için `Map` ve `MapView` modülüne ihtiyaç bulunmaktadır.

```
require(['esri/Map', 'esri/views/MapView'], (Map, MapView) => {
	const map = new Map({
		basemap: 'topo-vector', // Basemap layer service
	});
	const view = new MapView({
		map: map,
		center: [29, 41], // Longitude, latitude
		zoom: 8, // Zoom level
		container: 'map', // Div element
	});
});
```

- Harita bileşenine eklenen veriler katman yapısı ile yönetilmektedir. Birçok farklı ön tanımlı veya parametrelerini geliştiricinin belirleyeceği katman tipi ArcGIS Javascript kütüphanesinde bulunmaktadır.
- Harita bileşenini oluştururken altlık haritayı (`basemap`) tanımladığımız için bu adımı atlayıp haritaya veri ekleyebiliriz. GeoJSON türünde bir veri `GeoJSONLayer` ile haritaya şu şekilde eklenmektedir;

```
const blob = new Blob([JSON.stringify(geoJSONData)], {
    type: 'application/json',
});
const url = URL.createObjectURL(blob);
const layer = new GeoJSONLayer({ url });
map.add(layer);
```

- ArcGIS JS kütüphanesi için haritaya eklenen katmandan bilgi almak istendiğinde `event listener` `MapView` bileşenine tanımlanmaktadır.

```
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
```
