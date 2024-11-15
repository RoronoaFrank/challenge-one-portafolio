

/*------------Sección del menú hamburguesa--------------*/


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


    });

    cerrarMenuBtn.addEventListener('click', () => {


      menuLista.style.display = 'none';
      abrirMenuBtn.style.display = 'flex';
      cerrarMenuBtn.style.display = 'none';
      menuNavegacion.classList.remove('activar');

      
    });

} if (window.innerWidth >= 1024) {

  menuNavegacion.classList.add('activar');

}



/* Inyección de imagenes en la sección "Proyectos" en función del ancho de pantalla*/

let imagenEncriptador = document.querySelector('#encriptador');
window.addEventListener('resize', function() {

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

});