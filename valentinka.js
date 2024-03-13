document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.container');
    var lid = document.querySelector('.lid');
    var card = document.querySelector('.card');

    container.addEventListener('click', function () {
        lid.style.animation = 'open 2s forwards';
        card.style.animation = 'slide 0.2s 0.5s forwards';
    });

    container.addEventListener('touchstart', function () {
        // Добавьте аналогичный код, если вы хотите запустить анимацию при касании на мобильных устройствах
        lid.style.animation = 'open 2s forwards';
        card.style.animation = 'slide 0.2s 0.5s forwards';
    });
});
