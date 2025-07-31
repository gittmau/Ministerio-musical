
let btnMobile = document.querySelector('#btnMenu');
let naveg = document.querySelector('.menu');

btnMobile.addEventListener('click',abrirMenu);

function abrirMenu(){   
 naveg.classList.toggle('active'); 
}

document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active'); // aqui você fecha o menu manualmente
  });
});