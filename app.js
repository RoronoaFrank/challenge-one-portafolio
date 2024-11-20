

/* ------Funcionalidad del menú hamburguesa------ */


const abrirMenuBtn = document.getElementById('abrirMenu');
const cerrarMenuBtn = document.getElementById('cerrarMenu');
const menuLista = document.querySelector('.menu__lista');
const menu = document.querySelector('.menu');
const menuNavegacion = document.querySelector('.menu__navegacion');


if (window.innerWidth < 1024) {

    abrirMenuBtn.addEventListener('click', () => {


      menuLista.style.display = 'flex';
      abrirMenuBtn.style.display = 'none';
      cerrarMenuBtn.style.display = 'flex';
      menuNavegacion.classList.add('activar');
      //console.log('ejecución abrir correcta');


    });

    cerrarMenuBtn.addEventListener('click', () => {


      menuLista.style.display = 'none';
      abrirMenuBtn.style.display = 'flex';
      cerrarMenuBtn.style.display = 'none';
      menuNavegacion.classList.remove('activar');

      
    });

}  if (window.innerWidth >= 1024) {

        menuNavegacion.classList.add('activar');

}



/* ------Inyección de imagenes en la sección "Proyectos" en función del ancho de pantalla------ */

function ajustarImagenes() {

    let imagenEncriptador = document.querySelector('#encriptador');

    switch (true) {
        case (window.innerWidth <= 425):
            imagenEncriptador.src = './assets/Encriptador-vista-movil.jpg';
            break;
        case (window.innerWidth <= 768):
            imagenEncriptador.src = './assets/Encriptador-vista-tablet.jpg';
            break;
        case (window.innerWidth <= 1024):
            imagenEncriptador.src = './assets/Encriptador-vista-portatil.jpg';
            break;
        default:
            imagenEncriptador.src = './assets/Encriptador-vista-web.jpg';
    }
}

ajustarImagenes();

window.addEventListener('resize', ajustarImagenes);

/* ------Funcionalidad del Slide para cambiar entre secciones------ */

if (window.innerWidth >= 1024) {

    // Variables de las secciones
    const secciones = document.querySelectorAll('.seccion');
    let indiceActual = 0; // Inicia en la primera sección

    //Falta agregar codigo para que si el indice es 0 no se vea el boton de "anterior" y si el indice es 5 no se vea el boton "siguiente"
    // Función para mostrar la sección actual
    function mostrarSeccion(indice) {
        // Ocultar todas las secciones
        secciones.forEach((seccion) => {
            seccion.style.display = 'none';
        });

        // Mostrar la sección seleccionada
        secciones[indice].style.display = 'flex';
    }

    // Mostrar la primera sección al cargar la página
    mostrarSeccion(indiceActual);

    // Botones del footer para cambiar de sección
    const btnsFooter = document.querySelectorAll('.navegacion__secciones button');
    btnsFooter.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            const direccion = e.target.getAttribute('data-direccion');

            // Cambiar el índice según la dirección del botón
            if (direccion === 'next') {
                // Asegurar que no pasar del último índice
                if (indiceActual < secciones.length - 1) {
                  indiceActual++;
                } 
            } else if (direccion === 'prev') {
                // Asegurar que no pasar del último índice
                if (indiceActual > 0) {
                    indiceActual--;
                }
            }

            // Cambiar la sección a la seleccionada
            mostrarSeccion(indiceActual);
        });
    });

    
    //Todo lo que esta abajo esta mal, primero captaré en una constante, la lista de todas las opciones del menu, sea por id o por algo
    //luego usaré el evento listener y el evento target para saber la opcion de la lista que orgina el evento
    //luego compararé cual opcion de la lista coincide con la lista de la constante secciones que ya tengo arriba, si existe coincidencia,
    //haré display none a todas las secciones y luego display flex al indice actual, igual que sucede arriba con los botones del footer
    //Eso debe activar la funcion del menu 
    
    // Menú del header para cambiar de sección
    const enlacesMenu = document.querySelectorAll('.menu__lista a'); // Selecciona todos los enlaces del menú

    // Corregir dinámicamente el href del enlace "Presentación"
    enlacesMenu.forEach((enlace) => {
        if (enlace.textContent.trim().toLowerCase() === 'presentación') {
            enlace.setAttribute('href', '#presentacion');
        }
    });
    
    enlacesMenu.forEach((enlace) => {
        enlace.addEventListener('click', (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado

            // Obtener el id de la sección desde el href del enlace
            const seccionId = enlace.getAttribute('href').substring(1); // Quitar el '#' del href

            // Buscar la sección correspondiente por id
            const seccionSeleccionada = document.getElementById(seccionId);

            if (seccionSeleccionada) {
                // Encontrar el índice de la sección seleccionada
                const indice = Array.from(secciones).indexOf(seccionSeleccionada);

                if (indice !== -1) {
                    mostrarSeccion(indice); // Cambiar la sección actual
                    indiceActual = indice; // Actualizar el índice
                }
            }
        });
    });

}
