let anfitrionContenedor = document.querySelector("#anfitrion-informacion");

let uid = (location.search).replace('?', '');

const pedirAnfitriones = async() => {
    const resp = await fetch("../js/json/anfitriones.json");
    let anfitriones = await resp.json();
    return anfitriones;
}

let anfitriones = pedirAnfitriones();

anfitriones
    .then(anfitriones => {
        const anfitrionAux = anfitriones.find(anfitrion => anfitrion.id === uid);

        const {nombre, foto, anio, tiempo, cantAlojamientos, verificacion } = anfitrionAux;

        if (anfitrionContenedor)
            anfitrionContenedor.innerHTML = `
            <div class="host-card">
                <img src="${foto}" alt="Foto de anfitrión" class="host-image">

                <div class="host-name">
                    ${nombre}
                    <span class="verified">${verificacion}</span>
                </div>

                <div class="host-info">
                    Anfitrion desde ${anio}<br>
                </div>

                <div class="host-stats">
                    <span>🛏️ ${cantAlojamientos} alojamientos publicados</span>
                    <span>⏱️ ${tiempo} de experiencia</span>
                </div>
            </div>
            `;

});