 <h1 align="center">Maplibre GL JS</h1>
 <p align="center">
 <img src="../../banner02.png">
  <br />
</p>

- Maplibre GL JS, açık kaynak kodlu bir harita görüntüleme kütüphanesidir ve WebGL teknolojisi kullanarak gerçek zamanlı harita görüntüleme sağlar. Bu sayede kullanıcılar, haritaları yüksek kalitede ve hızlı bir şekilde görüntüleyebilir ve haritalar üzerinde pan, zoom ve rotasyon gibi işlemleri gerçekleştirebilirler.

- Bir harita oluşturabilmek için öncelikle `HTML` dosyası içinde `DOM Element` ihtiyacı bulunmaktadır. Harita bileşeni oluşturulurken veya daha sonra tanımlanabilecek `style` ile haritada kullanılacak `kaynak` ve `katman` grupları tanımlanabilir. `style` kod içinde tanımlanabileceği gibi herhangi bir sunucuda saklanıp `URL` bilgisi verilerek de kullanılabilir.

```
let map = new maplibregl.Map({
	container: 'map',
	style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
	center: [29, 41], // starting position [lng, lat]
	zoom: 9, // starting zoom
});
```

- Maplibre GL JS kütüphanesinde haritaya eklenen katman ve kaynaklar aslında `style` bileşenine eklendiği için, düzenlemek istediğimiz temel bileşen `style` olmalıdır. Haritada bulunan `style` tekrar atandığında daha önce eklenmiş tüm kaynak ve katmanlar silinmektedir. Bu nedenle bir `state` yapısının olması projenin sürdürülebilirliği açısında bir gerekliliktir.

```
map.setStyle('https://api.maptiler.com/maps/hybrid/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL');
```

- Harita bileşenine genel `event listener` eklenebildiği gibi katman özelinde de tanımlama yapılabilmektedir.

```
map.on('click', 'ibb-building-layer', (e) => {
    const feature = e.features[0];
    console.info(feature.properties.name);
});
```
