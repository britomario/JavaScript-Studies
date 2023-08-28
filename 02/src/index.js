const { createUser, getAllUsers, getById, updateUserById } = require('./scripts');

const all_users = getAllUsers();
const findById = getById(5)
const updateUserById_1 = updateUserById(5, {
    
});
// const new_user = createUser({
//     name: 'mario brito',
//     email: 'mariobrito@gmail.com',
//     password: 'djdk24945kd'
// })

// const new_user2 = createUser({
//     name: 'Lucas',
//     email: 'lucas@email.com',
//     password: '12344566'
// })

//console.log(all_users)
console.log(updateUserById_1)
const exemplo = {
    name: 'arqueiro verde'
}
exemplo.name = 'thor'
console.log(exemplo.name)
//console.log(findById)
