import '../sass/_common.scss';
import '../sass/_promisification.scss';
/*
    ### 1
Напиши функцию `delay(ms)`, которая возвращает промис, 
переходящий в состояние `"resolved"` через `ms` миллисекунд. 
Значением исполнившегося промиса должно быть то кол-во миллисекунд 
которое передали во время вызова функции `delay`.
const delay = ms => {
    // Твой код
};
const logger = time => console.log(`Resolved after ${time}ms`);
    // Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
*/

//    ======== Answer ========
const delay = ms => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(ms)
        }, ms)
    });
};
    
const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms


/* ==================================================================================
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */
const promise = new Promise((resolve, reject) => {
    const canFullfill = Math.random() > 0.5;
    
    setTimeout(() => {
        if (canFullfill) {
            resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
        }

        reject('Промис выполнился с ошибкой (отклонён, rejected)');
    }, 1000);
});

  // promise.then(onFulfilled, onRejected);
function onFullfilled(result) {
    console.log('onFulfilled -> onFulfilled');
    console.log(`✅ ${result}`);
};

function onRejected(error) {
    console.log('onRejected -> onRejected');
    console.log(`❌ ${error}`);
};

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */
promise
.then(onFullfilled)
.then(x=>{
    console.log(x);

    return 10;
})
.then(y=>{
    console.log(y);
})
.catch(onRejected)
.finally(() => console.log('Я буду выполнен в любом случае'));