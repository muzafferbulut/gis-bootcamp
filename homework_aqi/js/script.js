// harita
var map = L.map('map').setView([41.100072371412381,29.024512004171349], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// veri çekme
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

    data.forEach(station=> {
      const location = station.Location;
      const parts = location.match(/\((.*)\)/)[1].split(' ');
      const lng = parts[0];
      const lat = parts[1];

      L.marker([lat, lng]).addTo(map).bindPopup(station.Name);
    });

    selectElement.addEventListener('change', event => {
      const selectedId = event.target.value;
      
      const selectedStation = data.find(station => station.Id === selectedId);

      const selectedStationLoc = selectedStation.Location;
      const stationLocParts = selectedStationLoc.match(/\((.*)\)/)[1].split(' ');
      const stationLng = stationLocParts[0];
      const stationLat = stationLocParts[1];

      const stationDiv = document.getElementById("station-info");
      stationDiv.innerHTML = `<h3>Station Name : </h3> ${selectedStation.Name}<br>
      <h3>Station Address : </h3> ${selectedStation.Adress}<br>
      <h3>Longitude : </h3> ${stationLng}<br>
      <h3>Latitude : </h3> ${stationLat}<br>`;

      map.setView([stationLat, stationLng], 15);
    });

    // buton seçilen istastondan bir ileri ya da bir geri hareketi sağlayacak

    const prevButton = document.getElementById('p-button');
    const nextButton = document.getElementById('n-button');

    let currentOption = 0;

    prevButton.addEventListener('click', function() {
      currentOption--;
      if (currentOption < 0) {
        currentOption = selectElement.options.length - 1;
      }
      console.log(currentOption);
      showCurrentOption();
    });

    nextButton.addEventListener('click', function() {
      currentOption++;
      if (currentOption > selectElement.options.length - 1){
        currentOption = 0;
      }

      console.log(currentOption);

      showCurrentOption();
    });

    function showCurrentOption() {
      console.log(selectElement);
      selectElement.selectedIndex = currentOption;
      const selectedId = selectElement.value;
      
      const selectedStation = data.find(station => station.Id === selectedId);

      const selectedStationLoc = selectedStation.Location;
      const stationLocParts = selectedStationLoc.match(/\((.*)\)/)[1].split(' ');
      const stationLng = stationLocParts[0];
      const stationLat = stationLocParts[1];

      const stationDiv = document.getElementById("station-info");
      stationDiv.innerHTML = `<h3>Station Name : </h3> ${selectedStation.Name}<br>
      <h3>Station Address : </h3> ${selectedStation.Adress}<br>
      <h3>Longitude : </h3> ${stationLng}<br>
      <h3>Latitude : </h3> ${stationLat}<br>`;

      map.setView([stationLat, stationLng], 15);
    }

  })
.catch(error => {
  console.error('Hata:', error);
});
