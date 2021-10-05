// Подключаем стили
import '../sass/_common.scss';
import '../sass/_switcher.scss';
import refs from './refs.js';

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
const resetBtnColorHandler = ({ target }) => {
    if (target.dataset.reset === undefined) {
        return;
    };
    console.log(target);

    if(!body.classList.contains('body_switcher')) {
        body.classList.add('body_switcher');
    };

    resetBtn.classList.remove('is_active');

    return body.style.backgroundColor = ""; 
};


// - Обработчик кнопки Стоп
const stopBtnHandler = ({ target }) => {
    if (target.dataset.stop === undefined) {
        return;
    };
    console.log(target);

    if (target.disabled === false) {
        startBtn.disabled = false;
        
        // resetBtn.disabled = false;
        resetBtn.classList.add('is_active');

        clearInterval(intervalId);
    };   
    
    resetBtn.addEventListener('click', resetBtnColorHandler);
};


// - Обработчик кнопки Старт
const startBtnHandler = ({ target }) => {
    if (target.dataset.start === undefined) {
        return;
    };
    console.log(target);

    if (target.disabled === false) {
        
        target.disabled = true;
        
        intervalId = setInterval(getBodyColor, 900);
        resetBtn.classList.remove('is_active');
        body.classList.remove('body_switcher');
    };   
    
    
    stopBtn.addEventListener('click', stopBtnHandler);
};

// - Вызовы обработчиков слушателей событий 
startBtn.addEventListener('click', startBtnHandler);

resetBtn.addEventListener('click', resetBtnColorHandler);
