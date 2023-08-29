const { validateData, validateId } = require('../middlewares/validations');

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

module.exports = {
    getAll,
    getById,
}