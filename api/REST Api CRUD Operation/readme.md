 <h1 align="center">GIS Bootcamp Eğitim Kaynakları</h1>
 <p align="center">
 <!-- <img src="./banner02.png"> -->
  <br />
</p>


<h2>CRUD: Kuruluş ve İlkeler</h2>

<p>RESTful mimarisini daha iyi anlayarak, CRUD&#39;a dalmanın zamanı geldi.&nbsp;CRUD, aşağıdakilerin kısaltmasıdır:</p>

<ul>
	<li>CREATE</li>
	<li>READ</li>
	<li>UPDATE</li>
	<li>DELETE</li>
</ul>

<p>Bunlar, CRUD&#39;nin temelini oluşturan standart veritabanı komutlarını oluşturur.&nbsp;Bir&ccedil;ok yazılım geliştiricisi, bu komutları en iyi ihtimalle ilkel rehberlik olarak g&ouml;r&uuml;r.&nbsp;Bunun nedeni, CRUD&#39;nin API oluşturmanın modern bir yolu olarak geliştirilmemiş olmasıdır.&nbsp;Aslında, CRUD&#39;nin k&ouml;kenleri veritabanı kayıtlarındadır.</p>

<p>Tanım olarak, CRUD bir mimari sistemden &ccedil;ok bir d&ouml;ng&uuml;d&uuml;r.&nbsp;Herhangi bir dinamik web sitesinde, muhtemelen birden fazla CRUD d&ouml;ng&uuml;s&uuml; vardır.&nbsp;&Ouml;rneğin, bir e-Ticaret sitesindeki bir alıcı, bir hesap oluşturabilir(<strong>CREATE</strong>), hesap bilgilerini g&uuml;ncelleyebilir(<strong>UPDATE</strong>) ve bir alışveriş sepetindeki şeyleri silebilir(<strong>DELETE</strong>).</p>

<p>Aynı siteyi kullanan bir Depo Operasyonları Y&ouml;neticisi, sevkiyat kayıtlarını oluşturabilir(<strong>CREATE</strong>), gerektiğinde bunları alabilir(<strong>RETRIEVE</strong>) ve tedarik listelerini g&uuml;ncelleyebilir(<strong>UPDATE</strong>).&nbsp;Alma işlemi bazen CRUD d&ouml;ng&uuml;s&uuml;nde okuma(<strong>READ</strong>)<strong> </strong>yerine ge&ccedil;er.</p>

<h3>Veritabanı Kaynaları (Database Origins)</h3>

<p>CRUD d&ouml;ng&uuml;s&uuml;, &ouml;rneğin bir kayıt veritabanıyla kalıcı depolamayı geliştirmeye y&ouml;nelik bir işlev y&ouml;ntemi olarak tasarlanmıştır.&nbsp;Adından da anlaşılacağı gibi, kalıcı depolama, onu oluşturan işlemlerden daha uzun &ouml;m&uuml;rl&uuml;d&uuml;r.&nbsp;Bu işlevler, ilişkisel bir veritabanı uygulamasının t&uuml;m &ouml;zelliklerini i&ccedil;erir.</p>

<p>Modern yazılım geliştirmede CRUD, bir veritabanının temel işlevleri olarak k&ouml;kenlerini aşmıştır ve şimdi kendisini HTTP protokol&uuml;, DDS ve SQL gibi dinamik uygulamalar i&ccedil;in tasarım ilkeleriyle eşler.</p>

<p>CRUD İlkeleri</p>

<p>Yukarıda bahsedildiği gibi, CRUD d&ouml;ng&uuml;s&uuml;n&uuml;n ilkeleri CREATE, READ/RETRIEVE, UPDATE ve DELETE olarak tanımlanır:</p>

<ul>
	<li><strong>CREATE</strong>&nbsp;prosed&uuml;rleri, INSERT ifadeleri aracılığıyla yeni kayıtlar &uuml;retir.</li>
	<li><strong>READ</strong>&nbsp;prosed&uuml;rleri, girdi parametrelerine dayalı olarak verileri okur.&nbsp;Benzer şekilde,&nbsp;<strong>RETRIEVE</strong>&nbsp;prosed&uuml;rleri, giriş parametrelerine dayalı olarak kayıtları alır.</li>
	<li><strong>UPDATE</strong>&nbsp;prosed&uuml;rleri, kayıtları &uuml;zerine yazmadan değiştirir.</li>
	<li><strong>DELETE</strong>&nbsp;prosed&uuml;rleri belirtilen yerde silin.</li>
</ul>

<h2>&nbsp;</h2>

<h2>REST &amp; CRUD Benzerlikleri</h2>

<p>İkisine yukarıda anlattığımız şekilde bakarsanız, neden genellikle aynı şekilde ele alındıklarını anlamak zor olabilir:</p>

<ul>
	<li>REST sağlam bir API mimarisidir.</li>
	<li>CRUD, kayıtları g&uuml;ncel ve kalıcı tutmak i&ccedil;in bir d&ouml;ng&uuml;d&uuml;r.</li>
</ul>

<p>İkisi arasındaki netlik eksikliği, CRUD&#39;nin ne zaman bitip REST&#39;in ne zaman başladığını belirleyemediklerinde &ccedil;oğu kişi i&ccedil;in kaybolur.&nbsp;CRUD&#39;nin DDS, SQL ve HTTP protokolleriyle eşleşebilir. Bu HTTP protokolleri, REST&#39;in temelinin temel bir par&ccedil;ası olan RESTful mimarisindeki kaynaklar arasındaki bağlantıdır.</p>

<p>CRUD ilkelerini REST&#39;e eşlemek, GET, PUT, POST ve CREATE, READ, UPDATE, DELETE&#39;in &ccedil;arpıcı benzerliklere sahip olduğunu anlamak anlamına gelir, &ccedil;&uuml;nk&uuml; &ouml;nceki gruplandırma sonrakinin ilkelerini uygular.</p>

<p>Bununla birlikte, RESTful bir yazılım mimarisi par&ccedil;asının, GET, PUT, POST komutlarını eşlemekten daha fazlasını ifade ettiğini not etmek de &ouml;nemlidir.</p>

<table border="1" cellpadding="1" cellspacing="1" style="width:600px">
	<tbody>
		<tr>
			<td><strong>CRUD</strong></td>
			<td><strong>SQL</strong></td>
			<td><strong>HTTP</strong></td>
			<td><strong>DESCRIPTION</strong></td>
		</tr>
		<tr>
			<td>CREATE</td>
			<td>INSERT</td>
			<td>POST/PUT</td>
			<td>Bir veya daha fazla yeni giriş ekler</td>
		</tr>
		<tr>
			<td>READ</td>
			<td>SELECT</td>
			<td>GET</td>
			<td>Belirli ölçütlerle eşleşen girişleri alır (varsa)</td>
		</tr>
		<tr>
			<td>UPDATE</td>
			<td>UPDATE</td>
			<td>PUT/POST/PATCH</td>
			<td>Mevcut girişlerdeki belirli alanları değiştirir</td>
		</tr>
		<tr>
			<td>DELETE</td>
			<td>DELETE</td>
			<td>DELETE</td>
			<td>Mevcut bir veya daha fazla girişi tamamen kaldırır</td>
		</tr>
	</tbody>
</table>

<h2>REST vs CRUD: Farkları?</h2>

<p>CRUD, tasarım gereği REST ile eşlenebilen bir d&ouml;ng&uuml;d&uuml;r.&nbsp;Kalıcılık, CRUD bağlamında tanımlandığı şekliyle, uygulamaların istemciler ve hizmetler arasındaki operasyonel komutları azaltmasının akıllı bir yoludur.</p>

<p>Ancak REST, mimarlık ilkeleri i&ccedil;inde kalıcılıktan &ccedil;ok daha fazlasını y&ouml;netir.&nbsp;İşte REST&#39;in yalnızca CRUD&#39;dan farklı olmakla kalmayıp aynı zamanda &ccedil;ok daha fazlasını sunduğu yollardan bazıları:</p>

<ul>
	<li>REST, HTTP protokolleri aracılığıyla kaynaklar ve hiper ortam merkezli bir mimari sistemdir.</li>
	<li>CRUD, bir veritabanı ortamında kalıcı kayıtları tutmak i&ccedil;in tasarlanmış bir d&ouml;ng&uuml;d&uuml;r.</li>
	<li>CRUD ilkeleri, RESTful mimarisinin hedeflerine uymak i&ccedil;in REST komutlarıyla eşlenir</li>
</ul>

<p>REST:</p>

<ul>
	<li>Temsiller, kaynaklarla ilgili olarak tek tip olmalıdır</li>
	<li>Hiper ortam, kaynaklar arasındaki ilişkileri temsil eder</li>
	<li>Bağımsız bir aray&uuml;z oluşturmak i&ccedil;in bir API&#39;ye yalnızca bir giriş, ardından ilişkiler oluşturmak i&ccedil;in k&ouml;pr&uuml;</li>
</ul>




