let detalleContenedor = document.querySelector("#detalleAlojamiento");

window.addEventListener('load', function(){

    let uid = (location.search).replace('?','');
    console.log(uid);
    
    const pedirDestacados = async () => {
    const resp = await fetch ("../js/json/destacados.json");
    let alojamientos = await resp.json();
    return alojamientos;
    }

    const pedirBariloche = async () => {
    const resp = await fetch ("../js/json/bariloche.json");
    let alojamientos = await resp.json();
    return alojamientos;
    }

    let destacados = pedirDestacados();
    let bariloche = pedirBariloche();
    let alojamientos = Promise.all([destacados, bariloche]);

    alojamientos
    .then ( alojamientos => {

        const [dest, bari] = alojamientos;

        console.log(dest);
        console.log(bari);

        let alojamientoAux = dest.find(des => des.id === uid);

        if (!alojamientoAux){
            alojamientoAux = bari.find(bar => bar.id === uid);
        }

        detalleContenedor.innerHTML = `
        <h1>${alojamientoAux.titulo}</h1>
        <img src="${alojamientoAux.imagen}" alt="">
        <h2>Precio: $<span>${alojamientoAux.precio}</span></h2>
        `;

    });

});