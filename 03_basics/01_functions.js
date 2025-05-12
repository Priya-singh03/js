
function sayMyname() {
   console.log("H");
   console.log("I");
   console.log("T");
   console.log("E");
   console.log("S");
   console.log("H");

}

//sayMyname// it is a reference
//() <-- execution 

sayMyname()

// function addTwoNumber(number1,number2) {
//     console.log(number1+number2);
    
// }
addTwoNumber(4,"6")
addTwoNumber(4,"a")
addTwoNumber(4,null)

// function ka defintion bnate vkt jo bhi input lete hai usko bolte hai parameter
//or jb fxn call krte hai to jo value  liya jata hai usko bola jata hai arguments

// const result = addTwoNumber(4,5)
// console.log("Result :" ,result);


function addTwoNumber(number1,number2) {
//    let result = number1+number2
//    return result
     return number1+number2    
   console.log("priya"); // fxn ka rule hota hai ki return ke baad koi bhi statement execute nhi hoga
   
    
}
const result = addTwoNumber(4,5)
console.log("Result :" ,result);

function loginUserMessage(username ="sam"){
    if(username === undefined){ // (!username)  <-- aise bhi likh skte hai
        console.log("please enter user name");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("priya"));
console.log(loginUserMessage(""));
console.log(loginUserMessage()); // jb koi value pass nhi krne pr undefined aata hai

