const title = document.querySelector('.title')
const leaf1 = document.querySelector('.folha1')
const leaf2 = document.querySelector('.folha2')
const bush2 = document.querySelector('.arbusto2')
const mount1 = document.querySelector('.montanha1')
const mount2 = document.querySelector('.montanha2')

document.addEventListener('scroll', function() {
    let value = window.scrollY

    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 0.1 + 'px'
    mount2.style.marginBottom = -value * 0.2 + 'px'
})