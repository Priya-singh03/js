//const userEmail = "p@iya.ai"
const userEmail = ""
if(userEmail){
    console.log("Got user email");    
}
else{
    console.log("dont have user email");
    
}

//falsy value
//false, 0,-0,BigInt 0n,"",null,undefined,NaN(not a number)

//truthy value
//"0" , 'false' , " " , [],{}, function(){}
//string ke andr koi bhi value hoti hai vo truthy hoti hai

if(userEmail.length === 0){
    console.log("Array is empty");
    
}

const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}
//Object.keys(emptyObj) <-- ye array or .length krke usdka length dekh rhe hai

//Nullish Coalescing Operator(??) null, undefined

let val1;
//val1 = 5 ?? 10
val1 = null ?? 10
//val1 = undefined ?? 10
//val1 = null ?? 10 ?? 40
console.log(val1);


// Terniary Operator

//condition ? true:false

const iceTeaPrice = 200
iceTeaPrice <=  80 ? console.log("less than 80"):console.log("more than 80");
;
