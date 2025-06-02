import { uid, alojamientos} from "./detalle.js";

let confirmacionContenedor = document.querySelector("#confirmacionContenedor");

alojamientos
    .then(alojamientos => {
        const alojamientoAux = alojamientos.find(alojamiento => alojamiento.id === uid);

        const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
        const reserva = [...reservas].reverse().find(reserva => reserva.uid === uid);

        const { imagen, titulo, precio } = alojamientoAux;
        const { start, end, days, adultos, ninos, bebes, mascotas } = reserva;

        if (confirmacionContenedor)
            confirmacionContenedor.innerHTML += `
        <div>
            <div class="summary-card">
                <div class="listing-header">
                    <img src="${imagen}"
                        alt="Foto del alojamiento">
                    <div class="listing-info">
                        <h3>${titulo}</h3>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">
                        Información del viaje
                    </div>
                    <p>Desde: ${start} - Hasta: ${end}</p>
                    <p>Adultos: ${adultos} - Niños: ${ninos} <br> Bebes: ${bebes} - Mascotas: ${mascotas}</p>
                </div>

                <hr style="margin: 16px 0; border: none; border-top: 1px solid #eee;">

                <div class="section">
                    <div class="section-title">Detalles del precio</div>
                    <div class="price-details">
                        <span>$${precio} USD por <span>${days}</span> noche/s</span>
                        <span>$${precio * days} USD</span>
                    </div>
                    <div class="price-details total">
                        <span>Total <a href="#">USD</a></span>
                        <span>$${precio * days} USD</span>
                    </div>
                </div>
                </div>
            </div>
            `;
    });
