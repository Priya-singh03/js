//premitive

//7 types:string,number,boolean,null,undefined,symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp = null
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);

//const bigNumber=2472468727798972967564422n

//reference(non-premitive)

//arrays,objects,fxn
//dataTypes fxn obj

const heros=["skhatiman","nagraj","doga"]   //arrays rep

let myObj={
    name:"priya",
    age:20,
} //obj

const myFunction= function(){
    console.log("hello world");
    
} //function

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof heros);

