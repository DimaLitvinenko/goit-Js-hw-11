// Подключаем стили
import '../sass/_common.scss';
import '../sass/_timer.scss';

// // ======== СПОСОБ №1 ========
// Установка даты окончания
// const endDate = new Date("Apr 23, 2022 12:00:00").getTime();

// // Определяем таймер
// const intervalId = setInterval(
//   function() {
//   // Расчёт оставшегося времени
//   let dateNow = new Date().getTime();
//   let time = endDate - dateNow;

//   if (time >= 0) {
//     // Конвертация UTC в дни, часы, минуты и секунды
//     let days = Math.floor(time / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     let secs = Math.floor((time % (1000 * 60)) / 1000);

//     // Вывод таймера
//     document.querySelector('span[data-value="days"]').innerHTML = days;
//     document.querySelector('span[data-value="hours"]').innerHTML = ("0"+hours).slice(-2);
//     document.querySelector('span[data-value="mins"]').innerHTML = ("0"+mins).slice(-2);
//     document.querySelector('span[data-value="secs"]').innerHTML = ("0"+secs).slice(-2);
//   } else {
//     // Уведомление для пользователя, когда закончился отсчёт
//     document.getElementById("timer-1").innerHTML = "The countdown is over!";
//     clearInterval(intervalId);
//   };
// }, 1000);


// ======== СПОСОБ №2 =========
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.intervalId = null;
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();

    this.refs = {
      days: document.querySelector(
        `${this.selector} span[data-value="days"]`
      ),
      hours: document.querySelector(
        `${this.selector} span[data-value="hours"]`
      ),
      mins: document.querySelector(
        `${this.selector} span[data-value="mins"]`
      ),
      secs: document.querySelector(
        `${this.selector} span[data-value="secs"]`
      ),

    };
  }
  
  calcTheTime() {
    let dateNow = Date.now();
    let deltaTime = this.targetDate - dateNow;

    this.timerReview(deltaTime);   // ???

    this.getTimeComponents(deltaTime);
  }

  // Проверка на время  
  timerReview(time) {   // ???
    if (time < 0) {
      document.querySelector(`${this.selector}`).innerHTML = "The countdown is over!";

      clearInterval(intervalId);
    };
  }

  getTimeComponents(time) {
    let days = this.pad(
      Math.floor(time / (1000 * 60 * 60 * 24))
    );
    let hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    let mins = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    let secs = this.pad(
      Math.floor((time % (1000 * 60)) / 1000)
    );
      
    this.updateComponents(days, hours, mins, secs);
  }
  
  updateComponents(days, hours, mins, secs) {  
    this.refs.days.textContent = days; 
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  start() {
    this.intervalId = setInterval(() => { 
      this.calcTheTime();
    }, 1000); 
  }

};

const timeToMyBithday = new CountdownTimer ({
  selector: '#timer-1',
  targetDate: new Date('Apr 23, 2022'),
});