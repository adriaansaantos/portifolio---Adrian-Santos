const scrollAnima = document.querySelector('[data-anime="scroll"]');

const metadewindow = window.innerHeight

console.log(metadewindow)

function animarScroll() {
    const topoItem = scrollAnima.getBoundingClientRect().top

    const itemVisivel = topoItem - metadewindow < 0

    if(itemVisivel){
        scrollAnima.classList.add('show-button')
    }
    else{
        scrollAnima.classList.remove('show-button')
    }
}



window.addEventListener('scroll', animarScroll)