let detalleContenedor = document.querySelector("#detalleAlojamiento");

export let uid = (location.search).replace('?', '');

export const pedirAlojamientos = async() => {
    const resp = await fetch("../js/json/alojamientos.json");
    let alojamientos = await resp.json();
    return alojamientos;
}

export let alojamientos = pedirAlojamientos();

alojamientos
    .then(alojamientos => {
        const alojamientoAux = alojamientos.find(alojamiento => alojamiento.id === uid);

        const {id, imagen, titulo, precio, huespedes, descripcion, diasDisponibles } = alojamientoAux;

        document.title = titulo;

        let precioReserva = document.querySelector("#precio-reserva");

        if (precioReserva)
            precioReserva.textContent = `$${precio} USD`;

        if (detalleContenedor)
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
                        
                    </div>
                </div>
                
            </div>

            </div>
            `;

        let referenciaConfirmacion = document.querySelector("#referencia-confirmacion");

        if (referenciaConfirmacion)
            referenciaConfirmacion.setAttribute("href", `./confirmacionReserva.html?${id}`);

});

