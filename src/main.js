
  document.addEventListener("DOMContentLoaded", () => cargarModulo('buscador-banners'));





function cargarModulo(nombre) {
  const contenedor = document.getElementById("contenedorModulo");

  fetch(`src/modules/${nombre}/${nombre}.view.html`)
    .then(res => res.text())
    .then(html => {
      contenedor.innerHTML = html;

      const script = document.createElement("script");
      script.src = `src/modules/${nombre}/${nombre}.js`;
      script.id = `script-${nombre}`;
      script.defer = true;
      document.body.appendChild(script);

      // Cargar CSS del módulo layout
const styleId = `style-${nombre}`;
const stylePrevio = document.getElementById(styleId);
if (stylePrevio) stylePrevio.remove();

const style = document.createElement("link");
style.rel = "stylesheet";
style.href = `src/modules/${nombre}/${nombre}.css`;
style.id = styleId;
document.head.appendChild(style);


      activarLinkMenu(nombre);
    })
    .catch(err => {
      contenedor.innerHTML = `<div class="text-danger">❌ Error al cargar ${nombre}</div>`;
      console.error(err);
    });
}
  

function activarLinkMenu(nombre) {
  document.querySelectorAll('.nav-link').forEach(e => e.classList.remove('active'));
  const link = document.querySelector(`.nav-link[onclick*="${nombre}"]`);
  if (link) link.classList.add('active');
}


script.onload = () => {
  if (typeof inicializarModulo === 'function') {
    inicializarModulo();
  }
};

