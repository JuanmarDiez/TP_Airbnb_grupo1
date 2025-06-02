class SiteHeader extends HTMLElement {
  connectedCallback() {
    const usuario = localStorage.getItem("usuario");

    this.innerHTML = `
      <header>
        <div class="logo">
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
              alt="Airbnb Logo"
            />
          </a>
        </div>

        <div class="right-icons">
          ${usuario
            ? `<span class="saludo">Hola, ${usuario} 👋</span>`
            : `
              <a class="button-hover" href="/pages/contactoConvierteteAnfitrion.html">
                <button>Hazte anfitrión</button>
              </a>
              <a href="/pages/login.html" class="button">
                <button>Iniciar Sesión</button>
              </a>
              <a href="/pages/registro.html" class="button">
                <button>Registrarse</button>
              </a>
            `}
        </div>
      </header>
    `;
  }
}

customElements.define("site-header", SiteHeader);
