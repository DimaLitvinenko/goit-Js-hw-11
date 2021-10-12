// Подключаем стили
import '../sass/_common.scss';
import '../sass/_color-switcher.scss';
import refs from './refs.js';

// // ======== СПОСОБ №1 =========
// import data from '../data/colors.json';

// const { startBtn, stopBtn, body, resetBtn } = refs;
// const INTERVAL_TIME = 900;
// let intervalId = null;

// // Генерации случайного числа
// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };

// // Генерация цвета
// const startColorSwitcher = () => {
//     document.body.style.backgroundColor = 
//     data[
//         randomIntegerFromInterval(0, 
//             data.indexOf(data[data.length - 1])
//         )
//     ];
// };

// // Вызов слушателя Старт
// startBtn.addEventListener('click', ({ target }) => {
//     if (target.dataset.action.start) {
//         return;
//     };

//     intervalId = setInterval(() => {
//         startColorSwitcher();
//     }, INTERVAL_TIME);

//     if (!target.disabled) {
//         target.disabled = true;

//         body.classList.remove('body_switcher');
//         resetBtn.classList.remove('is_active');
//     };   
// });

// // Вызов слушателя Стоп
// stopBtn.addEventListener('click', ({ target }) => {
//     if (target.dataset.action.stop) {
//         return;
//     };

//     clearInterval(intervalId);

//     if (startBtn.disabled) {
//         startBtn.disabled = false;
//         resetBtn.classList.add('is_active');
//     };
// });

// // Вызов слушателя Сброс 
// resetBtn.addEventListener('click', ({ target }) => {
//     if (target.dataset.action.reset) {
//         return;
//     };
        
//     if(!body.classList.contains('body_switcher')) { 
//         body.classList.add('body_switcher');
//         resetBtn.classList.remove('is_active');
//     };

//     return body.style.backgroundColor = ""; 
// });



// ======== СПОСОБ №2 ========
const { startBtn, stopBtn, body, resetBtn } = refs;

const INTERVAL_TIME = 900;
let intervalId = null;

// - Вызовы слушателей (обработчиков) события
startBtn.addEventListener('click', startBtnHandler);
stopBtn.addEventListener('click', stopBtnHandler);
resetBtn.addEventListener('click', resetBtnColorHandler);

// - Генерации случайного цвета
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// - Вешает рандомный цвет на body
function getBodyColor() {
    return body.style.backgroundColor = getRandomHexColor();
}; 


// - Обработчик кнопки Старт
function startBtnHandler({ target }) {
   if (target.dataset.action.start) {
        return;
    };
    console.log(target);

    if (!target.disabled) {
        target.disabled = true;
        
        intervalId = setInterval(getBodyColor, INTERVAL_TIME);

        resetBtn.classList.remove('is_active');
        body.classList.remove('body_switcher');
    };   
};

// - Обработчик кнопки Стоп
function stopBtnHandler({ target }) {
   if (target.dataset.action.stop) {
        return;
    };
    console.log(target);

    clearInterval(intervalId);

    if (startBtn.disabled) {
        startBtn.disabled = false;
        resetBtn.classList.add('is_active');
    };   
};

// - Сброс инлайн цвета
function resetBtnColorHandler({ target }) {
    if (target.dataset.action.reset) {
        return;
    };
    console.log(target);

    if(!body.classList.contains('body_switcher')) { 
        body.classList.add('body_switcher');
        resetBtn.classList.remove('is_active');
    };
    return body.style.backgroundColor = ""; 
};



