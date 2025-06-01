class SiteHeader extends HTMLElement {
  connectedCallback() {
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

      <!-- Iconos derechos -->
      <div class="right-icons">
        <a
          class="button-hover"
          href="/pages/contactoConvierteteAnfitrion.html"
        >
          <button>Hazte anfitrión</button>
        </a>
        <a href="/pages/login.html" class="button">
          <button>Iniciar Sesion</button>
        </a>
        <a href="./pages/registro.html" class="button">
          <button>Registrarse</button>
        </a>
      </div>
    </header>`;
  }
}
customElements.define("site-header", SiteHeader);
