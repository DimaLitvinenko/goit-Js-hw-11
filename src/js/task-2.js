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