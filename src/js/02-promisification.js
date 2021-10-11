// Подключаем стили
import '../sass/_common.scss';
import '../sass/_promisification.scss';


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
};
