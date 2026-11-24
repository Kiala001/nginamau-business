
const header = document.getElementById("site-header");

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


const footer = document.getElementById("site-footer");

if (footer) {
  footer.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-main">

        <div class="footer-brand">
          <a href="index.html" class="footer-logo">
            <img src="assets/logo.png" alt="NGINAMAU Business">
          </a>

          <p>
            Distribuição de combustível, onde e quando precisar.
            Soluções de fornecimento de gasóleo e gasolina
            para empresas e instituições.
          </p>
        </div>

        <div class="footer-column">
          <h3>Contactos</h3>

          <a href="tel:+244927358731">
            <i class="fa-solid fa-phone"></i>
            +244 927 358 731
          </a>

          <a href="mailto:nginamaugeral@outlook.com">
            <i class="fa-solid fa-envelope"></i>
            nginamaugeral@outlook.com
          </a>

          <a href="https://wa.me/244927358731"
             target="_blank" rel="noopener">
            <i class="fa-brands fa-whatsapp"></i>
            WhatsApp
          </a>
        </div>

        <div class="footer-column">
          <h3>Localização</h3>

          <p>
            <i class="fa-solid fa-location-dot"></i>
            Bairro Rangel, Município do Rangel,
            Luanda, Angola.
          </p>

          <p>
            <i class="fa-solid fa-file-lines"></i>
            NIF: 5002972042
          </p>
        </div>

        <div class="footer-column">
          <h3>Redes sociais</h3>

          <p>Acompanhe a NGINAMAU nas redes sociais.</p>

          <div class="footer-socials">
            <a href="https://www.facebook.com/share/1KJ75AmPST/"
               target="_blank"
               rel="noopener"
               aria-label="Facebook da NGINAMAU">
              <i class="fa-brands fa-facebook-f"></i>
            </a>

            <a href="https://wa.me/244927358731"
               target="_blank"
               rel="noopener"
               aria-label="WhatsApp da NGINAMAU">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

      </div>

      <div class="footer-bottom">
        <div class="container footer-bottom-content">
          <p>
            &copy; ${new Date().getFullYear()}
            M.V. NGINAMAU BUSINESS - COMÉRCIO & SERVIÇOS, LDA.
            Todos os direitos reservados.
          </p>

          <a href="#">Voltar ao topo
            <i class="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  `;
}
