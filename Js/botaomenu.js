function botaomenu(){
    let menuResponsivo = document.querySelector('.menu-responsivo');
    if(menuResponsivo.classList.contains('abrir')){
        menuResponsivo.classList.remove('abrir');
        document.querySelector('.icon').src = "./imagens/fechar-menu.svg";
    }
    else{
        menuResponsivo.classList.add('abrir');
        document.querySelector('.icon').src = "./imagens/icon-menu.svg";
    }   
}