document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll ('[data-tab-button]');

    for(let i= 0; i < buttons.length; i++ ) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector (`[data-tab-id=${abaAlvo}]`);
            esconderTodasAbas();
            aba.classList.add('opcao__sobre--is-active');
            esconderButton();
            botao.target.classList.add('opcao__list__item--is-active')
        });
    }
})

function esconderButton () {
    const buttons = document.querySelectorAll ('[data-tab-button]');

    for (let i= 0; i < buttons.length; i++) {
        buttons[i].classList.remove('opcao__list__item--is-active');
    }
}

function esconderTodasAbas () {
    const tabConsteiners = document.querySelectorAll ('[data-tab-id]');

    for (let i= 0; i < tabConsteiners.length; i++ ) {
        tabConsteiners[i].classList.remove('opcao__sobre--is-active')
    }
}