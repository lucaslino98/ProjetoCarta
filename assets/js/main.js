document.addEventListener('DOMContentLoaded', function () {
    const simButton = document.querySelector('button[data-choice="sim"]');
    const naoButton = document.querySelector('button[data-choice="nao"]');

    simButton.addEventListener('click', function () {
        alert('Obrigado pela oportunidade, saiba que farei da sua filha a mulher mais feliz do mundo!');
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const naoButton = document.querySelector('button[data-choice="nao"]');

    naoButton.addEventListener('mouseover', function () {
        moveButtonRandomly(naoButton);
    });

    function moveButtonRandomly(button) {
        const body = document.querySelector('body');
        const bodyWidth = body.offsetWidth;
        const bodyHeight = body.offsetHeight;
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;

        const maxX = bodyWidth - buttonWidth;
        const maxY = bodyHeight - buttonHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        button.style.position = 'fixed';
        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';

        setTimeout(() => {
            button.style.position = 'static';
        }, 1000);
    }
});






