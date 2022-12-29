 <h1 align="center">Google Maps</h1>
 <p align="center">
 <img src="../../banner02.png">
  <br />
</p>

- Google Maps API harita ile ilgili senaryosu olan her uygulama geliştiricinin en az bir kez araştırdığı kapsamlı bir harita kütüphanesidir. Google Maps API üç temel başlık altında toplanır. Bunlar;

      - Maps,
      - Routes,
      - Places

  olarak sıralanabilir.

- Google Maps API eğitim kapsamında üstünde durduğumuz diğer kütüphanelerin aksine açık kaynak bir çözüm sunmamaktadır. Ancak aylık 200$ kullanım için herhangi bir ücret talep edilmemektedir.

- Google Maps API kullanımı için gerekli olan API key `developers.google.com/maps` adresi üzerinden oluşturulmalıdır.

- Google Maps API ile temel bileşenimiz olan harita şu şekilde oluşturulur;

```
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41, lng: 29 },
    zoom: 8,
  });
}

window.initMap = initMap;
```

- Birkaç satır kod ile `uydu` ve `rehber` haritayı, tam ekran ve `StreetView` fonksiyonlarını uygulamamıza entegre etmiş bulunuyoruz. Google tarafından kullanıcılara sunulan tüm veriler herhangi bir ekstra kod yazılmadan uygulamamızda bulunmuş oluyor.

- Uygulamamızda Google altlık servisleri yerine `OpenStreetMap` gibi altlık servisleri kullanmak istersek şu şekilde entegrasyon sağlıyoruz;

```
new google.maps.Map(document.getElementById("map"), {
    mapTypeId: "OSM",
    center: { lat: 41, lng: 29 },
    zoom: 8,
  })

//Define OSM map type pointing at the OpenStreetMap tile server
map.mapTypes.set("OSM", new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
        // "Wrap" x (longitude) at 180th meridian properly
        // NB: Don't touch coord.x: because coord param is by reference, and changing its x property breaks something in Google's lib
        var tilesPerGlobe = 1 << zoom;
        var x = coord.x % tilesPerGlobe;
        if (x < 0) {
            x = tilesPerGlobe+x;
        }
        // Wrap y (latitude) in a like manner if you want to enable vertical infinite scrolling

        return "https://tile.openstreetmap.org/" + zoom + "/" + x + "/" + coord.y + ".png";
    },
    tileSize: new google.maps.Size(256, 256),
    name: "OpenStreetMap",
    maxZoom: 18
}));
```

- Geliştiricilerin en çok ihtiyaç duyduğu bir diğer özellik olan harita bileşenine `Marker` ekleme işlemi ise şu şekilde gerçekleştirilir;

```
const marker = new google.maps.Marker({
    position: istanbul,
    map,
    title: 'Istanbul',
});
```

- Haritaya eklenmiş `Marker` objesi ile etkileşime geçmek için fonksiyon `event listener` olarak `Marker` objesine şu şekilde tanımlanır;

```
// Add a click listener for each marker, and set up the info window.
marker.addListener('click', () => {
    console.info(marker.getTitle());
});
```
