function filterPlaces() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const zoneFilter = document.getElementById('data-zone').value;
    const vehicleFilter = document.getElementById('data-vehicle').value;

    const places = document.getElementsByClassName('place-item');

    for (let i = 0; i < places.length; i++) {
        const place = places[i];
        const placeName = place.querySelector('h2').textContent.toLowerCase();
        const placeZone = place.getAttribute('data-zone');
        const placeVehicle = place.getAttribute('data-vehicle');

        let showPlace = true;

        if (searchInput && !placeName.includes(searchInput)) {
            showPlace = false;
        }

        if (zoneFilter && placeZone !== zoneFilter) {
            showPlace = false;
        }

        if (vehicleFilter && !placeVehicle.includes(vehicleFilter)) {
            showPlace = false;
        }

        if (showPlace) {
            place.style.display = 'block';
        } else {
            place.style.display = 'none';
        }
    }
}