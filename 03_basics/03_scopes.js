//var c=400
let a=300
if(true){
   let a = 10
  const b =20
  var c=30
  d=90
}
console.log(a);
//console.log(b);
console.log(c);
console.log(d);

// for(let i=0;i<Array.length;i++){
//     const element = array[i];
// }

function one(){
    const username = "priya"

    function two(){
        const website = "youtube"
        console.log(username);  
    }
    //console.log(website);
    two()
}
one()

if(true){
    const username = "priya"
    if(username ===  "priya"){
        const website = " youtube"
        console.log(username+website);  
    }
    //console.log(website); 
}
//console.log(username);

//+++++++++++++++++++++++++Interesting ++++++++++++++++//
console.log(addone(5));
function addone(num){
   return num+1
}



const addTwo = function(num){
    return num + 2
}
addTwo(5)  // ye upr fxn ke krne pr error dega bcz eska declareation niche hai
