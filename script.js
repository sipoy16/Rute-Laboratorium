const destinationLat = -7.763638764594745;
const destinationLng = 110.40950300978199;

const routeBtn = document.getElementById('routeBtn');

routeBtn.addEventListener('click', () => {
  if (!navigator.geolocation) {
    alert('Browser Anda tidak mendukung Geolocation.');
    return;
  }
  navigator.geolocation.getCurrentPosition(
    pos => {
      const uLat = pos.coords.latitude;
      const uLng = pos.coords.longitude;
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${uLat},${uLng}&destination=${destinationLat},${destinationLng}&travelmode=driving`;
      window.open(mapsUrl, '_blank');
    },
    err => {
      alert('Gagal mendapatkan lokasi. Pastikan izin lokasi diaktifkan.');
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  );
});
