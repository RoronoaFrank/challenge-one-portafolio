/* ------Funcionalidad del menú hamburguesa------ */

const abrirMenuBtn = document.getElementById("abrirMenu");
const cerrarMenuBtn = document.getElementById("cerrarMenu");
const menuLista = document.querySelector(".menu__lista");
const menuNavegacion = document.querySelector(".menu__navegacion");

const manejarMenu = () => {
  if (window.innerWidth < 1024) {
    abrirMenuBtn.style.display = "flex";
    cerrarMenuBtn.style.display = "none";
    menuLista.style.display = "none";
    menuNavegacion.classList.remove("activar");

    // Agregar eventos para dispositivos móviles
    abrirMenuBtn.addEventListener("click", abrirMenu);
    cerrarMenuBtn.addEventListener("click", cerrarMenu);
  } else {
    abrirMenuBtn.style.display = "none";
    cerrarMenuBtn.style.display = "none";
    menuLista.style.display = "flex";
    menuNavegacion.classList.add("activar");

    // Eliminar eventos innecesarios para escritorio
    abrirMenuBtn.removeEventListener("click", abrirMenu);
    cerrarMenuBtn.removeEventListener("click", cerrarMenu);
  }
};

// Funciones para abrir y cerrar el menú
const abrirMenu = () => {
  menuLista.style.display = "flex";
  abrirMenuBtn.style.display = "none";
  cerrarMenuBtn.style.display = "flex";
  menuNavegacion.classList.add("activar");
};

const cerrarMenu = () => {
  menuLista.style.display = "none";
  abrirMenuBtn.style.display = "flex";
  cerrarMenuBtn.style.display = "none";
  menuNavegacion.classList.remove("activar");
};

// Ejecutar la configuración inicial
manejarMenu();
window.addEventListener("resize", manejarMenu);

window.addEventListener("resize", () => {
  if (esDesktop) {
    mostrarSeccion(indiceActual); // En desktop, mantener el slide activo
  } else {
    secciones.forEach((seccion) => {
      seccion.style.display = "block"; // Mostrar todas las secciones en móvil
    });
  }
});

/* ------Inyección de imagenes en la sección "Proyectos" en función del ancho de pantalla------ */

function ajustarImagenes() {
  let imagenEncriptador = document.querySelector("#encriptador");

  switch (true) {
    case window.innerWidth <= 425:
      imagenEncriptador.src = "./assets/Encriptador-vista-movil.jpg";
      break;
    case window.innerWidth <= 768:
      imagenEncriptador.src = "./assets/Encriptador-vista-tablet.jpg";
      break;
    case window.innerWidth <= 1024:
      imagenEncriptador.src = "./assets/Encriptador-vista-portatil.jpg";
      break;
    default:
      imagenEncriptador.src = "./assets/Encriptador-vista-web.jpg";
  }
}
ajustarImagenes();
window.addEventListener("resize", ajustarImagenes);

// Variables generales
const secciones = document.querySelectorAll(".seccion");
let indiceActual = 0;
let esDesktop = window.innerWidth >= 1024;

// Mostrar todas las secciones (modo móvil)
function mostrarTodasLasSecciones() {
  secciones.forEach((seccion) => {
    seccion.style.display = "flex";
  });
}

// Mostrar una sección específica (modo desktop)
function mostrarSeccion(indice) {
  secciones.forEach((seccion) => {
    seccion.style.display = "none";
  });
  secciones[indice].style.display = "flex";
}

// Función para gestionar el cambio de vista
function actualizarVista() {
  if (window.innerWidth >= 1024) {
    if (!esDesktop) {
      esDesktop = true;
      indiceActual = 0;
      mostrarSeccion(indiceActual);
    }
  } else {
    if (esDesktop) {
      esDesktop = false;
      mostrarTodasLasSecciones();
    }
  }
}

// Configuración inicial
if (esDesktop) {
  mostrarSeccion(indiceActual);
} else {
  mostrarTodasLasSecciones();
}

// Escuchar cambios en el ancho de pantalla
window.addEventListener("resize", actualizarVista);

// Enlaces del menú para cambiar de sección (solo para desktop)
const enlacesMenu = document.querySelectorAll('a[href^="#"]');

function actualizarHref() {
  const esDesktop = window.innerWidth >= 1024;

  enlacesMenu.forEach((enlace) => {
    const hrefOriginal = enlace.getAttribute("href");

    if (
      hrefOriginal.includes("#nombre") ||
      hrefOriginal.includes("#presentacion")
    ) {
      // Cambiar el href según la versión
      if (esDesktop) {
        enlace.setAttribute("href", "#presentacion"); // Para desktop
      } else {
        enlace.setAttribute("href", "#nombre"); // Para móvil
      }
    }
  });
}

// Escuchar cambios de tamaño de la ventana
window.addEventListener("resize", actualizarHref);

// Llamar la función al cargar la página
actualizarHref();

function manejarNavegacionMenu(e) {
  e.preventDefault();

  const seccionId = e.target.getAttribute("href").substring(1);
  const seccionSeleccionada = document.getElementById(seccionId);

  if (seccionSeleccionada) {
    if (esDesktop) {
      const indice = Array.from(secciones).indexOf(seccionSeleccionada);
      if (indice !== -1) {
        mostrarSeccion(indice);
        indiceActual = indice;
      }
    } else {
      seccionSeleccionada.scrollIntoView({ behavior: "smooth" });
      cerrarMenu();
    }
  }
}
enlacesMenu.forEach((e) => {
  e.addEventListener("click", manejarNavegacionMenu);
});

// Botones del footer (solo para desktop)
const btnsFooter = document.querySelectorAll(".navegacion__secciones button");
btnsFooter.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    if (esDesktop) {
      const direccion = e.target.getAttribute("data-direccion");
      if (direccion === "next" && indiceActual < secciones.length - 1) {
        indiceActual++;
      } else if (direccion === "prev" && indiceActual > 0) {
        indiceActual--;
      }
      mostrarSeccion(indiceActual);
    }
  });
});
