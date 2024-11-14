

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




