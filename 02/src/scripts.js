const { validateData, validateId, validateNewUser } = require('./middlewares/validations');

function getAll(data) {
    const validateUsers = validateData(data)

    if (validateUsers) {
        return validateUsers;
    }
    return data;
}

function getById(data, id) {
    const validateIds = validateId(id)

    if(validateIds) {
        return validateIds
    }

    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if (element.id === id) {
            return element
        }
    }
    return 'not found user'
}

function createUser(user) {
    const users = getAllUsers()
    const validateUser = validateNewUser(user)
    const nextId = users.length + 1;

    if(validateUser) {
        return validateUser
    }
    // const { name, email, password } = user;
    const new_user = {
        id: nextId,
        ...user,
    }
    users.push(new_user)
    return new_user
}

function updateUserById(id, userUpdate) {
    const users = getAllUsers()
    const validateIds = validateId(id)
    const validateUser = validateNewUser(userUpdate)

    if(validateIds) {
        return validateIds
    }

    if(validateUser) {
        return validateUser
    }

    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        if (id === user.id) {
             user.name = userUpdate.name
             user.email = userUpdate.email
             user.password = userUpdate.password
             return user
        }
    }
    return 'not found'
}

module.exports = {
    getAll,
    getById,
    createUser,
    updateUserById,
}