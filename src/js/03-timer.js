// Подключаем стили
import '../sass/_common.scss';
import '../sass/_timer.scss';

// Установка даты окончания
const endDate = new Date("Apr 23, 2022 12:00:00").getTime();

// Определяем таймер
const intervalId = setInterval(
  function() {
  // Расчёт оставшегося времени
  let now = new Date().getTime();
  let time = endDate - now;
    
  if (time >= 0) {
    // Конвертация UTC в дни, часы, минуты и секунды
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((time % (1000 * 60)) / 1000);

    // Вывод таймера
    document.querySelector('span[data-value="days"]').innerHTML = days;
    document.querySelector('span[data-value="hours"]').innerHTML = ("0"+hours).slice(-2);
    document.querySelector('span[data-value="mins"]').innerHTML = ("0"+mins).slice(-2);
    document.querySelector('span[data-value="secs"]').innerHTML = ("0"+secs).slice(-2);
  } else {
    // Уведомление для пользователя, когда закончился отсчёт
    document.getElementById("timer-1").innerHTML = "The countdown is over!";
    clearInterval(intervalId);
  };
}, 1000);



// const dt_in = new Date(2007, 02, 11, 23, 59, 59);
// const now = new Date();
// const time = now.getTime() - dt_in.getTime();
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// if (days > 0) {
//   console.log("Прошло времени: " + days + " дней");
// } else {
//   console.log("Указанная дата в будущем");
// }




// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Apr 23, 2022'),
// });

// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// const secs = Math.floor((time % (1000 * 60)) / 1000);