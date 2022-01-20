const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('nav-active')
})