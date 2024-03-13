var yesElement = document.getElementById('answer-yes');
var popupElement = document.getElementById('popup');
var valentineContent = document.getElementById('valentine-content');
var noElement = document.getElementById('answer-no');

yesElement.onclick = function() {
    showValentine();
};

function showValentine() {
    popupElement.style.display = 'flex';
    setTimeout(function() {
        valentineContent.style.opacity = '1';
    }, 100);
}

function hidePopup() {
    popupElement.style.display = 'none';
    valentineContent.style.opacity = '0';
}

noElement.onmouseover = function() {
    moveNo();
};

function moveNo() {
    noElement.style.transition = 'left 0.5s ease-in-out, top 0.5s ease-in-out';
    noElement.style.position = 'absolute';
    noElement.style.left = Math.random() * (window.innerWidth - noElement.clientWidth) + 'px';
    noElement.style.top = Math.random() * (window.innerHeight - noElement.clientHeight) + 'px';
}

noElement.onclick = function() {
    resetNo();
};

function resetNo() {
    noElement.style.transition = 'none';
    noElement.style.position = 'static';
}

// Ваш JavaScript код

var noElement = document.getElementById('answer-no');

noElement.onmouseover = function() {
    moveNo();
};

noElement.ontouchstart = function(event) {
    // Предотвращаем стандартное поведение, чтобы избежать масштабирования на некоторых устройствах
    event.preventDefault();
    moveNo();
};

function moveNo() {
    // Обработка перемещения "Нет"
    noElement.style.transition = 'left 0.5s ease-in-out, top 0.5s ease-in-out';
    noElement.style.position = 'absolute';

    // Проверка границ экрана
    var maxX = window.innerWidth - noElement.clientWidth;
    var maxY = window.innerHeight - noElement.clientHeight;

    noElement.style.left = Math.random() * maxX + 'px';
    noElement.style.top = Math.random() * maxY + 'px';
}

noElement.onclick = function() {
    resetNo();
};

function resetNo() {
    // Сброс положения "Нет"
    noElement.style.transition = 'none';
    noElement.style.position = 'static';
}


