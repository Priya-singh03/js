// for  of

// ["" ,"",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello World"

for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}

//map unique element print krta hai
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United State America")
map.set('FR',"France")

console.log(map);

for (const [key, value] of map) {
    console.log(key ,":-" ,value);    
}

const myObject = {
    game1 :'NFS',
    game2 : 'spiderman'
}

for(const [key,value] of myObject){
    console.log(key , ':-' , value);
}
