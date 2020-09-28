import '../scss/main.scss'

    let element = document.querySelector('.btn');
    let hiddenContent = document.querySelectorAll('.brands-one-hidden')
    let btn = document.querySelector('.btn-brands');
    element.addEventListener('click', () => {
        btn.textContent === 'Показать все'
            ? btn.innerHTML = 'Скрыть'
            : btn.innerHTML = 'Показать все'

        hiddenContent.forEach((element) => {
            element.classList.toggle('hidden')
        })
    })

    let burgerMenu = document.querySelector('.burger-menu');
    let button = document.querySelector('.burger-menu__button');
    button.addEventListener('click',() => {
        burgerMenu.classList.toggle('burger-menu_active')
    })



