//if

const isUserloggedIn = true
if(true){

}

// === three equal type and value dono check krta hai

const temperature = 78
// if(temperature<50)
// {
//     console.log("less than 50");
    
// }
if(temperature <50)
{
    console.log("less than 50");
    
}else{
    console.log("temperature greater than 50");
    
}

const score = 200
if(score>100)
{ 
    let power ="fly"
   // console.log(`User power: ${power} `);   
}
 //console.log(`User power: ${power} `);
//const power = "fly"// var use kerna not safe


//if(balance>500)console.log("test"),console.log("test2");
//; this is not good way to write code
const balance = 1000
if(balance<500)
{
    console.log("less than");
}
else if(balance<750){
    console.log("less than 750");
    
}
else {
    console.log("less than 1200");
    
}

const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
    
}

const loggedInFromGoogle = false
const loggedInFromEmail = true
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
    
}
