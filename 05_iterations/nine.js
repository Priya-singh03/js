const myNums = [1,2,3]

//accumulater ko jo bhi value dete ho comma ke baad vo aa jati hai

// const myTotal = myNums.reduce(function (acc , currval)  {
//     console.log(`accumulater: ${acc} and currentvalue: ${currval}`);
//     return acc + currval
// },0)
const myTotal = myNums.reduce( (acc , curr) => acc+curr,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "py course",
        price:3999
    },
    {
        itemName: "mobile dev course",
        price:9999
    },
    {
        itemName: "data science course",
        price:12999
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc+item.price ,0)
console.log(priceToPay);
