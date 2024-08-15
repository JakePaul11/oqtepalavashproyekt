// Xarita konfiguratsiyasi
const map = L.map('map').setView([41.286887940960014, 69.24195833282576], 13); // Xarita markazi va zo'rlik

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Joyni belgilash
map.on('click', function(e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    
    L.marker([lat, lng]).addTo(map)
        .bindPopup(`<b>Joy:</b><br>Lat: ${lat}<br>Lng: ${lng}`)
        .openPopup();
});
