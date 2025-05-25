/********** CONTENEDORES **********/

let barilocheContenedor = document.querySelector("#bariloche-contenedor");
let destacadosContenedor = document.querySelector("#destacados-contenedor");
let catAlojamiento = document.querySelector("#categoria-alojamiento");

/********** CARGAR ALOJAMIENTOS **********/

const pedirDestacados = async () => {
    const resp = await fetch ("../js/json/destacados.json");
    let alojamientosDestacados = await resp.json();
    return alojamientosDestacados;
}

let alojamientosDestacados = pedirDestacados();

alojamientosDestacados
.then( alojamientosDestacados => {
    cargarDestacados(alojamientosDestacados);
});

function cargarDestacados(alojamientosDestacados) {

    destacadosContenedor.innerHTML = "";

    alojamientosDestacados.forEach( alojamiento => {

        const {imagen, titulo, id} = alojamiento;
        
        const item = document.createElement("div");
        item.classList.add("elemento");
        item.innerHTML += `
        <img src="${imagen}" alt="${titulo}">
        <div class="elemento-descripcion">
            <p><b>${titulo}</b></p>
            <a href="./pages/detalle.html?${id}">
            <button class="elemento-detalle" id="${id}">Detalle</button>
            </a>
        </div>
        `;

        destacadosContenedor.append(item);

    });

};

const pedirBariloche = async () => {
    const resp = await fetch ("../js/json/bariloche.json");
    let alojamientosBariloche = await resp.json();
    return alojamientosBariloche;
}

let alojamientosBariloche = pedirBariloche();

alojamientosBariloche
.then( alojamientosBariloche => {
    cargarBariloche(alojamientosBariloche);
});

function cargarBariloche(alojamientosBariloche) {

    barilocheContenedor.innerHTML = "";

    alojamientosBariloche.forEach( alojamiento => {

        const {imagen, titulo, id} = alojamiento;
        
        const item = document.createElement("div");
        item.classList.add("elemento");
        item.innerHTML += `
        <img src="${imagen}" alt="${titulo}">
        <div class="elemento-descripcion">
            <p><b>${titulo}</b></p>
            <a href="./pages/detalle.html?${id}">
            <button class="elemento-detalle" id="${id}">Detalle</button>
            </a>
        </div>
        `;

        barilocheContenedor.append(item);

    });

};