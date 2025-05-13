// scope ke andr jitne bhi variable ho usko access krne ke liye this lgate hai ye current context ke liye use hota hai

const user = {
    username:"priya",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

//function chai(){
    //let username = "priya"
    //console.log(this);
   // console.log(this.username); ye object me krte hai function me nhi krte 
    
    
//}
//chai()

// const chai = function(){
//     let username = "priya"
//     console.log(this);
//     console.log(this.username);
    
// }

const chai = () => {
    let username ="priya"
    console.log(this);
    console.log(this.username);
    
}
//chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

//implicit arrow me aise bhi likh skte hai
//{} <- ye use krenge to return likhna pdega ,, ()<- ye use krenge to return nhi likhna pdega
//object ko retrun krne ke liye()<- esme wrap krna hi pdega


//const addTwo = (num1,num2) =>   num1 + num2  
//const addTwo = (num1,num2) =>  (num1 + num2) 
//const addTwo = (num1,num2) =>  {username:"priya"} // undefined dega
const addTwo = (num1,num2) =>  ({username:"priya"}) 
console.log(addTwo(5,8));


// arrow fxn () => {} 
    // () => () dono trh se likha ja skta hai