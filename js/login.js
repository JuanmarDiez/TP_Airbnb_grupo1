const loginForm = document.querySelector("#loginForm")

loginForm.addEventListener ("submit", (e)=>{
    e.preventDefault()
    const email = document.querySelector ("#email").value
    const password = document.querySelector ("#contraseña").value

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(user =>user.email===email && user.contraseña ===password)

    if (!validUser){
        return alert ("Usuario o contraseña incorrecto")
    }

    // Guardar usuario logueado
    localStorage.setItem("usuario", validUser.nombre);

    alert (`Bienvenido ${validUser.nombre}` );
    window.location.href ="/";
});