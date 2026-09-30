/* =======================================================
   comun.js — funciones compartidas por todas las páginas:
   menú móvil, contador de favoritos y utilidades de localStorage
   ======================================================= */

const CLAVE_FAVORITOS = "polinoticias_favoritos";

/** Devuelve el arreglo de IDs favoritos guardados (o [] si no hay nada). */
function obtenerFavoritos() {
  try {
    const datos = localStorage.getItem(CLAVE_FAVORITOS);
    return datos ? JSON.parse(datos) : [];
  } catch (error) {
    console.error("No se pudieron leer los favoritos:", error);
    return [];
  }
}

/** Guarda el arreglo de IDs favoritos. */
function guardarFavoritos(lista) {
  localStorage.setItem(CLAVE_FAVORITOS, JSON.stringify(lista));
  actualizarContadorFavoritos();
}

/** true/false según si el id ya está en favoritos. */
function esFavorito(id) {
  return obtenerFavoritos().includes(id);
}

/** Agrega o quita un id de favoritos. Devuelve el nuevo estado (true = ahora es favorito). */
function alternarFavorito(id) {
  const favoritos = obtenerFavoritos();
  const indice = favoritos.indexOf(id);
  if (indice === -1) {
    favoritos.push(id);
    guardarFavoritos(favoritos);
    return true;
  }
  favoritos.splice(indice, 1);
  guardarFavoritos(favoritos);
  return false;
}

/** Actualiza la burbuja con el número de favoritos en el menú, si existe en la página. */
function actualizarContadorFavoritos() {
  const contador = document.querySelector("[data-fav-count]");
  if (contador) {
    contador.textContent = obtenerFavoritos().length;
  }
}

/** Activa el botón hamburguesa del menú en pantallas pequeñas. */
function iniciarMenuMovil() {
  const boton = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-links]");
  if (!boton || !menu) return;
  boton.addEventListener("click", () => {
    const abierto = menu.classList.toggle("open");
    boton.setAttribute("aria-expanded", abierto ? "true" : "false");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  iniciarMenuMovil();
  actualizarContadorFavoritos();
});
