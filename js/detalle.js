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

        const {imagen, titulo, precio} = alojamientoAux;

        this.document.title = titulo;

        detalleContenedor.innerHTML = `
        <h1>${titulo}</h1>
        <img src="${imagen}" alt="">
        <h2>Precio: $<span>${precio}</span></h2>
        `;

    });

});