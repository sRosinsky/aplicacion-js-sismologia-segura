const url = '/api'

let datos = {

        fetchDatos: async function () {
            try {
                const response = await fetch(url, {
                    method: "GET",
                })
                const takeData = await response.json()
                dataShow(takeData)
            }

            catch {
                ""
            }
        }

    }

function dataShow(objectApi) {
    try {
        const latitud = objectApi.Latitud;
        const longitud = objectApi.Longitud;
        const fechaLocal = objectApi.fechaLocal;
        const horaLocal = objectApi.horaLocal;
        const fechaUtc = objectApi.fechaUtc;
        const horaUtc = objectApi.horaUtc;
        const magnitud = objectApi.magnitud;
        const profundidad = objectApi.profunidad;
        const geoReferencia = objectApi.ubicacion;
        let dataS = [latitud, longitud, fechaLocal, horaLocal, fechaUtc, horaUtc, magnitud, profundidad];
        mapsFunction(latitud, longitud, geoReferencia);
        despl(dataS);
    } catch (error) {
        console.log("Ha ocurrido un error " + error)

    }
} 

datos.fetchDatos()

despl = (arrayData) => {
    const lat = arrayData[0];
    const lon = arrayData[1];
    const fl = arrayData[2];
    const hl = arrayData[3];
    const fu = arrayData[4];
    const hu = arrayData[5];
    const m = arrayData[6];
    const p = arrayData[7];
    document.querySelector("#element-1 #el1").innerHTML = lat
    document.querySelector("#element-1 #el2").innerHTML = lon
    document.querySelector("#el3").innerHTML = fl
    document.querySelector("#el4").innerHTML = hl
    document.querySelector("#el5").innerHTML = fu
    document.querySelector("#el6").innerHTML = hu
    document.querySelector("#el7").innerHTML = m
    document.querySelector("#el8").innerHTML = p

}


function mapsFunction(lat, lon, ref) {
    var map = L.map('map').setView([lat, lon], 9);

    map.createPane('labels');
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 9,
    }).addTo(map);
    
    L.marker([lat, lon, ref]).addTo(map)
        
        .bindPopup(`${ref}`)
        .openPopup();
}




