const { validateNewUser, validateId } = require('../middlewares/validations');
function createUser(data, user) {
    const validateUser = validateNewUser(user)
    const nextId = data.length + 1;

    if(validateUser) {
        return validateUser
    }
    // const { name, email, password } = user;
    const new_user = {
        id: nextId,
        ...user,
    }
    data.push(new_user)
    return new_user
}

/*
função de uso genérico onde data recebe um array, id recebe o id a ser 
modificado e userUpdate recebe o novo objeto que vai ser atualizado.
 */
function updateUserById(data, id, userUpdate) {
    const validateIds = validateId(id)
    const validateUser = validateNewUser(userUpdate)

    if(validateIds) {
        return validateIds
    }

    if(validateUser) {
        return validateUser
    }

    for (let index = 0; index < data.length; index++) {
        if (id === data[index].id) {
           return data[index] = {
                id,
                ...userUpdate // spread para concatenar todos os valores de entrada para o novo objeto.
            }
        }
    }
    return 'not found'
}

module.exports = {
    createUser,
    updateUserById,
}