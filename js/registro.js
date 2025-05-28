const registroForm = document.querySelector("#registroForm");

registroForm.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const nombre = document.querySelector("#nombre").value;
  const email = document.querySelector("#email").value;
  const contraseña = document.querySelector("#contraseña").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const isUserRegistered = users.find(user => user.email ===email);

  if (isUserRegistered) {
    return alert("El usuario con este correo ya existe");
  }

  users.push({nombre, email, contraseña });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registro exitoso");
  registroForm.reset(); 
});
