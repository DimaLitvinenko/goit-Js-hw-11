// - Достать ссылки на элементы 
const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    resetBtn: document.querySelector('button[data-reset]'),
    body: document.querySelector('body'),
};
const { startBtn, stopBtn, body, resetBtn } = refs;

let intervalId = null;

// - Генерации случайного цвета
const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// - Вешает рандомный цвет на body
const getBodyColor = () => {
    return body.style.backgroundColor = getRandomHexColor();
}; 

// - Сброс инлайн цвета
const resetColorHandler = ({ target }) => {
    if (target.dataset.reset === undefined) {
        return;
    };
    console.log(target);
    return body.style.backgroundColor = "";
};

// - Обработчик кнопки Старт
const startBtnHandler = ({ target, currentTarget }) => {
    if (target.dataset.start === undefined) {
        return;
    };

    console.log(target);
    console.log(currentTarget);

    if (target.disabled === false) {
        target.disabled = true;
        intervalId = setInterval(getBodyColor, 1000);
    };   
    
    body.addEventListener('click', resetColorHandler);
};

// - Обработчик кнопки Стоп
const stopBtnHandler = ({ target, currentTarget }) => {
    if (target.dataset.stop === undefined) {
        return;
    };

    console.log(target);
    console.log(currentTarget);

    if (target.disabled === false) {
        
        startBtn.disabled = false;
        clearInterval(intervalId);
    };   

    // body.addEventListener('click', resetColorHandler);
};

// - Вызовы обработчиков слушателей событий 
body.addEventListener('click', startBtnHandler);
body.addEventListener('click', stopBtnHandler);


