import '../sass/_notification.scss';

const NOTIFICATION_DELAY = 5000;
let timeoutId = null;
const notification = document.querySelector('.js-alert');
 
notification.addEventListener('click', notificationClickHandler);
 
showNotification();
 
function notificationClickHandler() {
  hideNotification();
  clearTimeout(timeoutId);
}
 
function showNotification() {
  notification.classList.add('is_active');
 
  timeoutId = setTimeout(() => {
    console.log('Закрываем алерт автоматически');
    hideNotification();
  }, NOTIFICATION_DELAY);
}
 
function hideNotification() {
  notification.classList.remove('is_active');
}
 