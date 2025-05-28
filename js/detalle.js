let detalleContenedor = document.querySelector("#detalleAlojamiento");

window.addEventListener('load', function(){

    let uid = (location.search).replace('?','');
    
    const pedirAlojamientos = async () => {
    const resp = await fetch ("../js/json/alojamientos.json");
    let alojamientos = await resp.json();
    return alojamientos;
    }

    let alojamientos = pedirAlojamientos();
    alojamientos
    .then ( alojamientos => {
        const alojamientoAux = alojamientos.find(alojamiento => alojamiento.id === uid);
        console.log(uid);

        const {imagen, titulo, precio, huespedes, descripcion, diasDisponibles, puntuacion} = alojamientoAux;

        document.title = titulo;

        let precioReserva = document.querySelector("#precio-reserva");

        precioReserva.textContent = `$${precio} USD`;

        detalleContenedor.innerHTML = `
        <div class="container">  
            <div class="header">${titulo}</div>
                <div class="images">
                    <div class="main-image">
                        <img src="${imagen}" alt="Interior principal">
                    </div>
                </div>

                <div class="bottom">
                    <div class="title_description">
                        <div class="details">
                            <h2>${titulo}</h2>
                            <div class="info">${huespedes} huéspedes  ·  ${diasDisponibles} noches</div>
                        </div>

                        <div class="ratings">
                            <div>🏅 Favorito entre huéspedes</div>
                        </div>

                        <div class="description">${descripcion}</div>
                        <button class="show-more">Mostrar más</button>
                    </div>
                </div>
                
            </div>

        </div>
        `;

    });

});