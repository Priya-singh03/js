
//chai()

//()() first paranthesis defintion lekhine ke liye hai or 2nd execution ke liye
// global scope se jo pollution hoti hai kai bar usko htane ke liye use hoti hai iife

//named iife
(function chai (){
    console.log(`DB CONNECTED`);
    
})();
 

// unnamed iife
(  (name) => {
   console.log(`DB CONNECTED TWO ${name}`);
   
})("priya")

// jo bhi execute kr rha hai vo name le liye ()