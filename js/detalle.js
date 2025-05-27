let detalleContenedor = document.querySelector("#detalleAlojamiento");

window.addEventListener('load', function(){

    let uid = (location.search).replace('?','');
    console.log(uid);
    
    const pedirAlojamientos = async () => {
    const resp = await fetch ("../js/json/alojamientos.json");
    let alojamientos = await resp.json();
    return alojamientos;
    }

    let alojamientos = pedirAlojamientos();
    alojamientos
    .then ( alojamientos => {
        const alojamientoAux = alojamientos.find(alojamiento => alojamiento.id === uid);

        const {imagen, titulo, precio,huespedes,descripcion,diasDisponibles,puntuacion} = alojamientoAux;

        this.document.title = titulo;

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
                <div>🌟 ${puntuacion}<span class="star">★★★★★</span> (86 Evaluaciones)</div>
                </div>

                <div class="description">
                ${descripcion}
                <button class="show-more">Mostrar más</button>
                </div>
            </div>
        
            <div class="reserva-card">
                <h2><strong>${precio} USD</strong> <span>por ${diasDisponibles} noches</span></h2>
                <div class="fecha-container">
                    <div class="fecha">
                        <label>CHECK-IN</label>
                        <input type="text" id="checkin" placeholder="Selecciona fecha" readonly>
                    </div>
                    <div class="fecha">
                        <label>CHECK-OUT</label>
                        <input type="text" id="checkout" placeholder="Selecciona fecha" readonly>
                    </div>
                </div>
                <!-- CONTENEDOR DE VIAJEROS -->
                <div class="viajeros" id="viajerosBox">
                    <label>VIAJEROS</label>
                    <div id="viajerosToggle">1 viajero ▼</div>
                        <!-- Desplegable -->
                        <div id="viajerosDropdown" class="viajeros-dropdown">
                            <div class="grupo">
                                <div>
                                    <strong>Adultos</strong><br />
                                    <span>Edad: más de 13 años</span>
                                </div>
                                <div class="contador">
                                    <button onclick="cambiarContador('adultos', -1)">-</button>
                                    <span id="adultos">1</span>
                                    <button onclick="cambiarContador('adultos', 1)">+</button>
                                </div>
                            </div>
                            <div class="grupo">
                                <div>
                                    <strong>Niños</strong><br />
                                    <span>De 2 a 12 años</span>
                                </div>
                                <div class="contador">
                                    <button onclick="cambiarContador('ninos', -1)">-</button>
                                    <span id="ninos">0</span>
                                    <button onclick="cambiarContador('ninos', 1)">+</button>
                                </div>
                            </div>

                            <div class="grupo">
                                <div>
                                    <strong>Bebés</strong><br />
                                    <span>Menos de 2 años</span>
                                </div>
                                <div class="contador">
                                    <button onclick="cambiarContador('bebes', -1)">-</button>
                                    <span id="bebes">0</span>
                                    <button onclick="cambiarContador('bebes', 1)">+</button>
                                </div>
                            </div>

                            <div class="grupo">
                                <div>
                                    <strong>Mascotas</strong><br />
                                    <span><a href="#">¿Vas a llevar un animal de servicio?</a></span>
                                </div>
                                <div class="contador">
                                    <button onclick="cambiarContador('mascotas', -1)">-</button>
                                    <span id="mascotas">0</span>
                                    <button onclick="cambiarContador('mascotas', 1)">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                
                <button class="btn-reservar">Reservar</button>

                <div class="info">No vamos a cobrarte ningún cargo por el momento</div>
            </div>
        </div>
    </div>
        `;

    });

});