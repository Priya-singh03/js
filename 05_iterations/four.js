const myObject ={
    js: 'javascript',
    cpp: 'c++',
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
   console.log( `${key} shortcut of ${myObject[key]}`);  
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
   console.log(programming[key]);
   
}

// const map = new Map()
// map.set('IN',"INDIA")
// map.set('USA',"United State America")
// map.set('FR',"France")
// map.set('IN',"INDIA")

// for (const key in map) {
//    console.log(key);
   
//}
// // +++++++++Map is not for iterator