// const themeButton = document.getElementById("themeToggle");
// if (themeButton) {
//   themeButton.addEventListener("click", () => {
//     document.body.classList.toggle("light");
//     const icon = themeButton.querySelector("i");
//     icon.className = document.body.classList.contains("dark") ? "fa-solid fa-sun" : "fa-solid fa-moon";
//   });
// }
const menuButton = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }));
}
const translations = {
  en: {
    "Início": "Home", "Quem somos": "About us", "Serviços": "Services", "Parceiros": "Partners", "Nossa equipa": "Our team", "Contactos": "Contact",
    "Conheça melhor a nossa empresa": "Learn more about our company", "Conhecer a empresa": "Discover the company", "Solicitar fornecimento": "Request a supply", "Energia para manter": "Power to keep"
  },
  fr: {
    "Início": "Accueil", "Quem somos": "Qui sommes-nous", "Serviços": "Services", "Parceiros": "Partenaires", "Nossa equipa": "Notre équipe", "Contactos": "Contacts",
    "Conheça melhor a nossa empresa": "En savoir plus sur notre entreprise", "Conhecer a empresa": "Découvrir l'entreprise", "Solicitar fornecimento": "Demander une livraison"
  }
};
const languageSelect = document.getElementById("languageSelect");
if (languageSelect) languageSelect.addEventListener("change", e => {
  const dict = translations[e.target.value] || {};
  document.querySelectorAll("a, h1, h2, h3, p, span").forEach(el => {
    if (el.children.length === 0 && dict[el.textContent.trim()]) el.textContent = dict[el.textContent.trim()];
  });
});