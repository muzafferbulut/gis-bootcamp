 <h1 align="center">GIS Bootcamp Eğitim Kaynakları</h1>
 <p align="center">
 <!-- <img src="./banner02.png"> -->
  <br />
</p>

<h2> API Nedir ?</h2>

API'ler, iki yazılım bileşeninin belirli tanımlar ve protokoller aracılığıyla birbiriyle iletişim kurmasına olanak tanıyan mekanizmalardır. Örneğin, meteoroloji müdürlüğünün yazılım sistemi, günlük hava durumu verilerini içerir. Telefonunuzdaki hava durumu uygulaması, API'ler aracılığıyla bu sistemle "konuşur" ve telefonunuzda size günlük hava durumu güncellemelerini gösterir.


<h2>API'nin açılımı nedir?</h2>
API'nin açılımı olan Application Programming Interface, Uygulama Programlama Arabirimi anlamına gelir. API'ler bağlamında Uygulama sözcüğü, ayrı bir işlevi bulunan her türlü yazılımı ifade eder. Arabirim, iki uygulama arasındaki hizmet sözleşmesi gibi düşünülebilir. Bu sözleşme, ikisinin istekler ve yanıtlar kullanarak birbiriyle nasıl iletişim kuracağını tanımlar. İlişkili API belgeleri, geliştiricilerin bu istek ve yanıtları nasıl yapılandırması gerektiğine dair bilgiler içerir.


<h2>API'ler nasıl çalışır?</h2>
API mimarisi genellikle istemci ve sunucu bakımından açıklanır. İsteği gönderen uygulamaya istemci, yanıtı gönderen uygulamaya ise sunucu adı verilir. Yani hava durumu örneğinde, müdürlüğün hava durumu veritabanı bir sunucu iken, mobil uygulama ise bir istemcidir. 

Ne zaman ve nasıl oluşturulduklarına dayalı olarak API'ler dört farklı şekilde çalışabilir.

<h3>SOAP API'leri </h3>
Bu API'ler, Basit Nesne Erişimi Protokolünü kullanır. İstemci ve sunucu, XML aracılığıyla mesaj alışverişi yapar. Bu, diğerlerine kıyasla pek esnek olmayan ve artık popülerliğini yitiren bir API'dir.

<h3>RPC API'leri</h3>
Bu API'lere, Uzak Prosedür Çağrıları adı verilir. İstemci, önce sunucu üzerinde bir işlevi (yani prosedür) tamamlar ve ardından sunucu da çıktıyı istemciye gönderir.

<h3>WebSocket API'leri</h3>
WebSocket API'leri, verileri aktarmak için JSON nesneleri kullanan başka bir modern web API'si gelişimidir. Bir WebSocket API'si, istemci uygulamaları ile sunucu arasında iki yönlü iletişimi destekler. Sunucunun bağlı istemcilere geri arama mesajları gönderebilmesi nedeniyle REST API'lerinden daha verimlidir.

<h3>REST API'leri</h3>
Bunlar günümüzde web'de bulunan en popüler ve esnek API'lerdir. İstemci, sunucuya isteklerini veri olarak gönderir. Sunucu bu istemci girdisini kullanarak dahili işlevleri başlatır ve çıktı verilerini tekrar istemciye gönderir. Aşağıda REST API'lerini daha ayrıntılı inceleyelim.
