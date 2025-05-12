function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(3));
console.log(calculateCartPrice(300,4556,2984));
console.log(calculateCartPrice(300,4556,2984,568,800));

const user={
    username:"priya",
    price:199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)
handleObject({
    username : "sam",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,500,1000]));
