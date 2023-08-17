const produtos = [
    {
        nome: 'Tv LG 50 pol',
        preco: 4000,
        marca: 'LG'
    },
    {
        nome: 'Notebook Samsung 8GB',
        preco: 2500,
        marca: 'Samsung'
    },
    {
        nome: 'Notebook Acer 16GB',
        preco: 5150,
        marca: 'Acer'
    },
    {
        nome: 'Tablet LG 8 pol',
        preco: 750,
        marca: 'LG'
    },
    {
        nome: 'Smartphone Positivo 8 pol',
        preco: 400,
        marca: 'Positivo'
    },
    {
        nome: 'Carregado apple smartphone',
        preco: 250,
        marca: 'Apple'
    },
    {
        nome: 'Carregador Samsung smartphone',
        preco: 150,
        marca: 'Samsung'
    },
]

const numbers = [1, 2, 3, 4, 5]

// functions
function mapArray (array, transformFunction) {
    const result = []

    for (let index = 0; index < array.length; index++) {
       result.push(transformFunction(array[index]));
    }
    return result;
}

function double (x) {
    return x * 2
}

function getAllName () {
    const dataAllName = []
    for (let index = 0; index < produtos.length; index++) {
        const name = produtos[index]['marca'];
        dataAllName.push(name)
    }
    return dataAllName;
}

function getAllPrice () {
    const newPrice = [];
    for (let index = 0; index < produtos.length; index++) {
        const price = produtos[index]['preco'];
        newPrice.push(price)  
    }
   return newPrice;
}

function repeatedName () {
    const names = getAllName();
    const uniqueNameSet = new Set()
    for (let index = 0; index < names.length; index++) {
        const name = names[index];
        uniqueNameSet.add(name)
    }
    const uniqueNamesArray = Array.from(uniqueNameSet)
    return uniqueNamesArray;
}

function maxPrice(price) {
    const allPrice = getAllPrice();
    const dataMaxPrice = []
    for (let index = 0; index < allPrice.length; index++) {
        const maxPrice = allPrice[index];

        if (maxPrice < price) {
            dataMaxPrice.push(maxPrice)
        }
    }
    return dataMaxPrice
}

//instancias

const max_price = maxPrice(2000)
const unique_names = repeatedName();
const doubleNumbers = mapArray(numbers, double)
//chamadas
//console.log(max_price)
//console.log(unique_names)
console.log(doubleNumbers)