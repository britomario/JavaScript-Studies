const users = require('./data/users');
const products = require('./data/products');
const {  getAll, getById } = require('./functions/scripts');
const { createUser, updateUserById } = require('./functions/user');

const allUsers = getAll(users);
const allProducts = getAll()
const findUser = getById(users, 5)
const findProduct = getById(products, 3)
const newUser = createUser(users, {
    name: 'Mario',
    email: 'mario@email.com',
    password: '1234'
})

const updateUser = updateUserById(users, 5, {
    name: 'Mario',
    email: 'mario@email.com',
    password: '1234',
    cargo: 'Gerente'
})

console.log(allUsers)



