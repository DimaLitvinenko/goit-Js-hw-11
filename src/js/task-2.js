import '../sass/_common.scss';
import '../sass/_promisification.scss';

/*
    ### 2
Перепиши функцию `toggleUserState()` так, чтобы она не использовала callback-функцию callback, 
а принимала всего два параметра `allUsers` и `userName` и возвращала промис.
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];
const toggleUserState = (allUsers, userName, callback) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );
  callback(updatedUsers);
};
const logger = updatedUsers => console.table(updatedUsers);
    // Сейчас работает так
toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger);
*/

    // ======== Answer ========
const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
];
const toggleUserState = (allUsers, userName) => {
    const updatedUsers = allUsers
    .map(user => 
        user.name === userName 
        ? { ...user, active: !user.active } 
        : user,
    );

    console.log(Promise.resolve(updatedUsers)); 
    return Promise.resolve(updatedUsers);
};

const logger = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);


/* ===================================
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */
// const makeOrder = dish => {
//   const DELAY = 1000;

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅ Вот ваш заказ: ${dish}`);
//       }

//       reject('❌ Упс, у нас закончились продукты');
//     }, DELAY);
//   });
// };

// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

/*
 * Покемоны с https://pokeapi.co/
 */
const fetchPokemonById = id => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
};

fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);
  
fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);

fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);

function onFetchSuccess(pokemon) {
  console.log('onFetchSuccess -> onFetchSuccess');
  console.log(pokemon);
}

function onFetchError(error) {
  console.log('onFetchError -> onFetchError');
  console.log('Это в блоке catch');
  console.log(error);
}

// makePromise
const makePromise = () => {
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;

    setTimeout(() => {
      if (passed) {
        resolve('✅ Куку это resolve');
      }

      reject('❌ все пропало это reject');
    }, 2000);
  });
};

makePromise()
  .then(result => console.log(result))
  .catch(error => console.log(error));