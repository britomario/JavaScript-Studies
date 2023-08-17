// Data
const data = [
    {
        nome: 'Notebook',
        preco: 1000
    },
    {
        nome: 'Pc Gamer',
        preco: 2000
    },
    {
        nome: 'CPU Apple',
        preco: 10000
    },
    {
        nome: 'CPU Apple',
        preco: 5000
    },
    {
        nome: 'CPU Apple',
        preco: 175
    },
    {
        nome: 'CPU Apple',
        preco: 100
    },
    {
        nome: 'CPU Apple',
        preco: 50
    },
    {
        nome: 'CPU Apple',
        preco: 125
    }

]

// Funções
function hello() {
    return 'Hello World'
}

const hello2 = () => 'Hello World 2'

function getAllName() {
    for (let index = 0; index < data.length; index++) {
        const name = data[index]['nome'];
        console.log(name)
    }
}
function getAllPrice() {
    const newData = [];
    for (let index = 0; index < data.length; index++) {
        const price = data[index]['preco'];
        newData.push(price)
    }
    return newData
}

function maxPrice(price) {
    const allPrice = getAllPrice();
    const newDataPrice = []
    for (let index = 0; index < allPrice.length; index++) {
        const newPrice = allPrice[index];
        
        if (newPrice < price) {
            newDataPrice.push(newPrice)
        }
    }
    return newDataPrice
}


// Instancias
// const hello_1 = hello();
// const hello_2 = hello2();
// const get_all_name = getAllName();
// const get_all_price = getAllPrice();
const max_price = maxPrice(2000)
// Chamadas
// console.log(hello_1);
// console.log(hello_2)
// getAllName()
// getAllPrice()
//maxPrice()
console.log(max_price)