//Funções validadoras//


/*
Essa função recebe um dado e valida se o mesmo "existe"
Em seguida através do metodo Array.isArray(data) - valida se é um array
&& também se o array data tem seu tamanho === 0 porque se sim, ele será um array vazio.
*/

function validateData(data) {
    if (!data) {
        return 'not found data'
    }
    if(!Array.isArray(data) || data.length === 0) {
        return 'data is not array or empty array'
    }
    return null
}

/*
Essa função também recebe um parametro e valida se ele "existe"
em seguida normalmente um ID costuma ser do tipo numero, então uma validação
para, verificar através do metodo typeof se o ID é !== number
*/

function validateId(id) {
    if(!id) {
        return 'not found id'
    }
    if(typeof id !== 'number') {
        return 'id is not a number'
    }
    return null
}

/*
Essa função também recebe um parametro e valida se ele "existe"
em seguida valida se user é um objeto também através do typeof porém agora veirifica,
se o mesmo é um objeto
*/

function validateNewUser(user) {
    if (!user) {
        return 'not found user'
    }
    if (typeof user !== 'object') {
        return 'not found object'
    }
}

//Exporta as funções validadoras para que possa ser usada em outros scripts//

module.exports = {
    validateData,
    validateId,
    validateNewUser,
}