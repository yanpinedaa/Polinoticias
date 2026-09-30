/* =======================================================
   layout.js — inserta el header y footer compartidos.
   Cada página solo necesita: <div id="site-header"></div>
   y <div id="site-footer"></div>, más data-pagina="inicio|noticias|contacto|favoritos"
   en el <body> para resaltar el enlace activo del menú.
   ======================================================= */

function renderHeader() {
  const contenedor = document.getElementById("site-header");
  if (!contenedor) return;
  const paginaActual = document.body.dataset.pagina || "";

  const enlace = (href, texto, clave) =>
    `<a href="${href}" ${paginaActual === clave ? 'aria-current="page"' : ""}>${texto}</a>`;

  contenedor.innerHTML = `
    <header class="site-header">
      <div class="container">
        <a href="index.html" class="logo">Poli<span>noticias</span></a>
        <ul class="nav-links" data-nav-links>
          <li>${enlace("index.html", "Inicio", "inicio")}</li>
          <li>${enlace("noticias.html", "Noticias", "noticias")}</li>
          <li>${enlace("contacto.html", "Contacto", "contacto")}</li>
          <li class="nav-fav">
            <a href="favoritos.html" ${paginaActual === "favoritos" ? 'aria-current="page"' : ""}>
              ♥ Favoritos <span class="fav-count" data-fav-count>0</span>
            </a>
          </li>
        </ul>
        <button class="nav-toggle" data-nav-toggle aria-label="Abrir menú" aria-expanded="false">☰</button>
      </div>
    </header>`;
}

function renderFooter() {
  const contenedor = document.getElementById("site-footer");
  if (!contenedor) return;
  contenedor.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <span class="logo">Polinoticias</span>
        <nav>
          <a href="index.html">Inicio</a>
          <a href="noticias.html">Noticias</a>
          <a href="contacto.html">Contacto</a>
        </nav>
        <small>© 2026 Polinoticias — Proyecto académico, Institución Universitaria Politécnico Grancolombiano.</small>
      </div>
    </footer>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});
