//const coding = ["'js" , "ruby" , "java" , "python" , "cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//    return item
// })
// console.log(values);

const myNums =[1,2,3,4,5,6,7,8,9,10]

//filter ke andr {condition }use krte hai or jo jo value true hoti usi ko return kiya jata hai
// const newNums = myNums.filter( (num) => num>3)
// console.log(newNums);
// const newNums = myNums.filter( (num) => {
//     return num>4
// })
// console.log(newNums);

const newNums =[]

myNums.forEach( (num) => {
    if (num>4) {
       newNums.push(num) 
    }
})
//console.log(newNums);

const books = [
    {title: 'Book One' , genre: 'fiction' ,publish:'1981' , edition:2004},
    {title: 'Book Two' , genre: 'non fiction' ,publish:'1990' , edition:2003},
    {title: 'Book Three' , genre: 'history' ,publish:'2021' , edition:2014},
    {title: 'Book Four' , genre: 'non fiction' ,publish:'2012' , edition:2009},
    {title: 'Book Five' , genre: 'science' ,publish:'1982' , edition:1994},
    {title: 'Book Six' , genre: 'fiction' ,publish:'1961' , edition:1984},
    {title: 'Book Seven' , genre: 'history' ,publish:'1891' , edition:2027},
    {title: 'Book Eight' , genre: 'science' ,publish:'1999' , edition:2029},
    {title: 'Book Nine' , genre: 'non fiction' ,publish:'2023' , edition:2000}
];

//const userBooks = books.filter( (bk) => bk.genre === 'science')
let userBooks = books.filter( (bk) => bk.genre === 'science')
userBooks = books.filter( (bk) => bk.publish >=2000)
console.log(userBooks);
