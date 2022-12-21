var map = L.map('map').setView([41.1807995,29.1278137], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const selectElement = document.getElementById('stationList');

fetch('https://api.ibb.gov.tr/havakalitesi/OpenDataPortalHandler/GetAQIStations')
  .then(response => response.json())
  .then(data => {
    // Dönen verileri düzenle ve seç
    const stations = data.map(station => ({
      id: station.Id,
      name: station.Name
    }));

    // Option elementlerini oluştur ve select elementine ekle
    stations.forEach(station => {
      const optionElement = document.createElement("option");
      optionElement.value = station.id;
      optionElement.textContent = station.name;
      selectElement.appendChild(optionElement);
    });
  })
  .catch(error => {
    console.error('Hata:', error);
  });