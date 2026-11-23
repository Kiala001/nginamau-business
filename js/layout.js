
const header = document.getElementById("site-header");
const footer = document.getElementById("site-footer");

const currentPage = location.pathname.split("/").pop() || "index.html";

if (header) {
  header.innerHTML = `
    <header class="site-header">

      <a class="brand" href="index.html" aria-label="NGINAMAU - Início">
        <img
          class="brand-mark"
          src="assets/logo.png"
          alt="NGINAMAU"
        >
      </a>

      <button
        class="menu-toggle"
        id="menuToggle"
        aria-label="Abrir menu"
        aria-expanded="false"
        aria-controls="mainNav"
        type="button"
      >
        <i class="fa-solid fa-bars"></i>
      </button>

      <nav class="main-nav" id="mainNav">

        <a href="index.html"
          class="${currentPage === "index.html" ? "active" : ""}">
          Início
        </a>

        <a href="sobre.html"
          class="${currentPage === "sobre.html" ? "active" : ""}">
          Quem somos
        </a>

        <a href="index.html#servicos">Serviços</a>

        <a href="index.html#parceiros">Parceiros</a>

        <a href="equipa.html"
          class="${currentPage === "equipa.html" ? "active" : ""}">
          Nossa equipa
        </a>

        <a href="index.html#contactos">Contactos</a>

      </nav>

      <div class="header-actions">
        <label class="language-picker" aria-label="Idioma">
          <i class="fa-solid fa-globe"></i>

          <select id="languageSelect" aria-label="Seleccionar idioma">
            <option value="pt">PT</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="ar">AR</option>
          </select>
        </label>
      </div>

    </header>
  `;
}

if (footer) {
  footer.innerHTML = `
    <footer class="site-footer">

      <div class="container footer-top">

        <a class="brand footer-brand" href="index.html">
          <img
            class="brand-mark"
            src="assets/logo.png"
            alt="NGINAMAU"
          >
        </a>

        <a class="back-top" href="#inicio" aria-label="Voltar ao início">
          <i class="fa-solid fa-arrow-up"></i>
        </a>

      </div>

      <div class="container footer-bottom">

        <span>
          © ${new Date().getFullYear()}
          M.V. NGINAMAU BUSINESS - COMÉRCIO & SERVIÇOS, LDA.
        </span>

        <span>Todos os direitos reservados.</span>

      </div>

    </footer>
  `;
}
