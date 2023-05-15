const url = '/api'

let datos = {

        fetchDatos: async function () {
                const response = await fetch(url, {
                    method: "GET",
                })

                const takeData = await response.json
                dataShow(takeData)
        }
            
        }

function dataShow(objectApi) {
    try {
        function mostrar() {
                const latitud = objectApi.Latitud;
                const longitud = objectApi.Longitud;
                const fechaLocal = objectApi.fechaLocal;
                const horaLocal = objectApi.horaLocal;
                const fechaUtc = objectApi.fechaUtc;
                const horaUtc = objectApi.horaUtc;
                const magnitud = objectApi.magnitud;
                const profundidad = objectApi.profunidad;
                const geoReferencia = objectApi.ubicacion;
                const dataS = [latitud, longitud, fechaLocal, horaLocal, fechaUtc, horaUtc, magnitud, profundidad];
                mapsFunction(latitud, longitud, geoReferencia);
                despl(dataS);
        }
        function comprometer() {   
            for (let i = 0; i < 10; i++) {
                for_delay(i)
            }

            function for_delay(i) {
                setTimeout(()=> {
                    const dataLatitud = objectApi.Latitud;
                    console.log(dataLatitud)
                    dataType = typeof(dataLatitud)
                    if (dataType === 'undefined') {
                        try {
                            mostrar()
                        }
                        catch(error) {
                            console.log("Err: " + error); 
                        }
                    } else {
                        mostrar()
                    }
                }, 3000 * i)

        }
    }
        
    comprometer()

        
    } catch (error) {
        console.log(error)

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

bt = document.querySelector(".boton-puntuar")
area = document.querySelector(".section-1-5-1");
area.setAttribute("style", " border-top: none; height: 0;")
area2 = document.querySelector(".section-1-5")
bt.addEventListener("click", areaNota)

function areaNota(event) {
    bt.setAttribute("disabled", "");
    bt.setAttribute("style", "cursor: initial;")
    area2.setAttribute("style", "border-bottom: none;")
    area.setAttribute("style", "display: flex; border-left: none; border-right: none; ")
    area.setAttribute("style", "height: 10em; transition: .3s; border-bottom: solid 1px; border-top: solid 1px;");
    area.innerHTML = ('<div class="div_interior"> <p>Prueba</p> </div>')
    divinterior = document.querySelector(".div_interior")
    divinterior.setAttribute("style", "display: flex; align-items: center; justify-content: center;")
}






