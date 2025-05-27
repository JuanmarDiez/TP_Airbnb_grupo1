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

        const categoriaAlo = list[i][0].categoria;

        alojamientosContenedor.innerHTML += `
        <section>
            <h2 class="fs-4 fw-bold text-capitalize">${categoriaAlo}</h2>
            <div id="${categoriaAlo}-contenedor" class="carousel">
        `;

        let catContenedor = document.querySelector(`#${categoriaAlo}-contenedor`);
        
        list[i].forEach( alojamiento => {

            const {id, imagen, titulo, precio, puntuacion} = alojamiento;

            const item = document.createElement("div");
            item.classList.add("card");
            item.classList.add("border-0");
            item.classList.add("rounded-3");
            item.innerHTML += `
            <a href="./pages/detalle.html?${id}">
            <img src="${imagen}" alt="${titulo}">
            <div class="card-body">
                <h4>${titulo}</h4>
                <p>$${precio} USD - ★ ${puntuacion}</p>
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