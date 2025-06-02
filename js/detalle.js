let detalleContenedor = document.querySelector("#detalleAlojamiento");

export let uid = (location.search).replace('?', '');

export const pedirAlojamientos = async() => {
    const resp = await fetch("../js/json/alojamientos.json");
    let alojamientos = await resp.json();
    return alojamientos;
}

export let alojamientos = pedirAlojamientos();

const pedirAnfitriones = async() => {
    const resp = await fetch("../js/json/anfitriones.json");
    let anfitriones = await resp.json();
    return anfitriones;
}

let anfitriones = pedirAnfitriones();

alojamientos
    .then(alojamientos => {
        const alojamientoAux = alojamientos.find(alojamiento => alojamiento.id === uid);

        const {id, imagen, titulo, precio, huespedes, descripcion, diasDisponibles, anfitrionId } = alojamientoAux;

        document.title = titulo;

        let precioReserva = document.querySelector("#precio-reserva");

        if (precioReserva)
            precioReserva.textContent = `$${precio} USD`;

        anfitriones
        .then(anfitriones => {
            const anfitrion = anfitriones.find(a => a.id === anfitrionId);

            if (detalleContenedor)
                detalleContenedor.innerHTML = `
                <div class="container">  
                    <div class="header">
                        <span>${titulo}</span>
                    </div>

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

                            <div class="anfitrion">
                                <span>Anfitrion:</span>
                                <div>
                                    <a href="../pages/anfitrion.html?${anfitrion.id}">
                                        <span>${anfitrion.nombre}</span>
                                        <img src="${anfitrion.foto}" alt="">
                                    </a>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
                `;

            let referenciaConfirmacion = document.querySelector("#referencia-confirmacion");

            if (referenciaConfirmacion)
                referenciaConfirmacion.setAttribute("href", `./confirmacionReserva.html?${id}`);
        });
    });

