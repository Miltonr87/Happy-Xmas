//create map
const map = L.map('mapid').setView([-9.6402969,-35.7066433], 16);


// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.png",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [-3, -76]
})

function addMarker({id, name, lat, lng}) {
    
    //create popup overlay
    const popup= L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 140, 
        minHeight: 140
    }).setContent(`${name} <a href="orphanage?id=${id}"><img src="/images/arrow-white.svg"> </a>`)

    // create and add marker
    L
    .marker([lat,lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng

    }

    addMarker(orphanage)
})