# Polinoticias

Plataforma web tipo periódico digital enfocada en noticias de tecnología. Proyecto académico para el módulo teórico-práctico de **Desarrollo de Front-End** — Institución Universitaria Politécnico Grancolombiano.

**Autor:** Yeferson Andrey Pineda Alonso
**Tutor:** John Olarte Ramos

## Entrega 2 — Prototipo funcional

Este prototipo implementa, con HTML, CSS y JavaScript puro (sin frameworks ni dependencias externas de build):

- **Renderizado dinámico** de noticias desde un archivo JSON (`data/noticias.json`), tanto en la página de inicio como en el listado y el detalle.
- **Búsqueda y filtrado por categoría** en el listado de noticias.
- **Gestión de favoritos** usando `localStorage`, con contador en el menú y una página dedicada (`favoritos.html`) para ver y quitar noticias guardadas.
- **Formulario de contacto con validaciones** (nombre, correo con formato válido, mensaje con longitud mínima) y mensaje de confirmación tras el envío.
- **Código estructurado**: HTML separado por página, un único hoja de estilos compartida y JavaScript dividido por responsabilidad (`comun.js` para utilidades y favoritos, `layout.js` para el header/footer reutilizables).

## Estructura del proyecto

```
polinoticias/
├── index.html          # Página de inicio (Home)
├── noticias.html        # Listado de noticias con búsqueda y filtros
├── detalle.html          # Detalle de una noticia (?id=N en la URL)
├── contacto.html         # Formulario de contacto con validaciones
├── favoritos.html        # Noticias guardadas (localStorage)
├── css/
│   └── styles.css        # Estilos compartidos por todas las páginas
├── js/
│   ├── comun.js           # Favoritos (localStorage) + menú móvil
│   └── layout.js          # Header y footer reutilizables
└── data/
    └── noticias.json      # Fuente de datos de las noticias
```

## Cómo verlo en tu computador

Como el sitio carga las noticias desde un archivo JSON con `fetch()`, los navegadores basados en Chrome bloquean esa carga si abres el archivo HTML directamente desde el explorador de archivos (protocolo `file://`). Para probarlo localmente necesitas un servidor:

**Opción A — VS Code:** instala la extensión "Live Server", clic derecho sobre `index.html` → "Open with Live Server".

**Opción B — Python** (si lo tienes instalado):
```bash
python -m http.server 8000
```
y abre `http://localhost:8000` en tu navegador.

Una vez publicado en GitHub Pages, Netlify o Vercel (Entrega 3), el sitio funcionará directamente desde la URL desplegada sin necesitar nada de esto.

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 (variables CSS, Grid y Flexbox, diseño responsivo)
- JavaScript (ES6+): `fetch`, `localStorage`, manipulación del DOM
- Tipografías: [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4) y [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)
