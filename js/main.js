/********** CONTENEDORES **********/
let alojamientosContenedor = document.querySelector("#alojamientos-contenedor");

/********** CARGAR ALOJAMIENTOS **********/

const pedirAlojamientos = async () => {
    const resp = await fetch ("../js/json/alojamientos.json");
    let alojamientos = await resp.json();
    return alojamientos;
}

let alojamientos = pedirAlojamientos();

alojamientos
.then( alojamientos => {
    cargarAlojamientos(alojamientos);
});

function cargarAlojamientos(alojamientos) {

    let destacados = alojamientos.filter( (alojamiento) => alojamiento.categoria === "destacados");
    let bariloche = alojamientos.filter( (alojamiento) => alojamiento.categoria === "bariloche");
    let misiones = alojamientos.filter( (alojamiento) => alojamiento.categoria === "misiones");

    let list = [destacados, bariloche, misiones];

    for (var i = 0; i < list.length; i++){

        const categoriaAlojamiento = list[i][0].categoria;

        alojamientosContenedor.innerHTML += `
        <section class="seccion-alojamientos">
            <h3>${categoriaAlojamiento.toUpperCase()}</h3>
            <div id="${categoriaAlojamiento}-contenedor" class="carrusel">
        `;

        let catContenedor = document.querySelector(`#${categoriaAlojamiento}-contenedor`);
        
        list[i].forEach( alojamiento => {

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

            catContenedor.append(item);

        });

        alojamientosContenedor.innerHTML +=`
            </div>
        </section>
        `;
    }

};