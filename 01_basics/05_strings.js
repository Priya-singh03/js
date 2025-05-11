const name= "priya"
const repoCnt= 50

//console.log(name + repoCnt + " Value" );

console.log(`hello my name is ${name} and my repo cnt is ${repoCnt}`);

const gameName= new  String('priya-hc-com')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString= gameName.substring(0,4)//postive value leta hai
console.log(newString);

const anotherString= gameName.slice(-6,-3)//negative value bhi le leta hai
console.log(anotherString);

const newStringOne="   priya   "
console.log(newStringOne);
console.log(newStringOne.trim());//trim staring and ending space remove kr deta hai

const url="https//priya.com/priya%20singh"
console.log(url.replace('%20','-'));
console.log(url.includes('shweta'));

console.log(gameName.split('-'));
console.log(gameName.split("  "));




