//dates

let myDate= new Date()
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toUTCString());
console.log(myDate.toLocaleDateString());

//let myCreatedDate = new Date(2034,8,27)
//let myCreatedDate = new Date(2034,8,27,9,4)
//let myCreatedDate = new Date("2023-10-30")
let myCreatedDate = new Date("04-5-2025")
console.log(myCreatedDate);
//console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());


let myTimeStamp  = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getMonth() +1);

newDate.toLocaleString('default',{
    weekday:"long",
})