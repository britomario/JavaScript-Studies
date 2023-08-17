const scripts = require('./scripts');

const all_users = scripts.getAllUsers();
const findById = scripts.getById(5)
const new_user = scripts.createUser({
    name: 'mario brito',
    email: 'mariobrito@gmail.com',
    password: 'djdk24945kd'
})

const new_user2 = scripts.createUser({
    name: 'Lucas',
    email: 'lucas@email.com',
    password: '12344566'
})

//console.log(all_users)
console.log(all_users)
//console.log(findById)