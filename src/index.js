import loadPage from './pagcreator';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contato.js';


inicialização()


function escutador(){
  const home = document.getElementById('ab')
  const produtos = document.getElementById('mn')
  const contato = document.getElementById('ctt')
  home.addEventListener('click', loadHome);
  produtos.addEventListener('click', loadMenu);
  contato.addEventListener('click', loadContact);
}

function inicialização(){
  loadPage()
  loadHome()
  escutador()
}

