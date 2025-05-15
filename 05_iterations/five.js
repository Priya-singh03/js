const coding =["js","ruby","java","python","cpp"]

//eske andr fxn ka name nhi likha jata hai
coding.forEach( function (item){
   console.log(item);
   
})

coding.forEach( (val) => {
    console.log(val);
    
})

//printMe jo bhi aap esko dete ho vo print kr deta hai

function printMe(item) {
    console.log(item);
    
}

coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
  console.log(item,index,arr);
  
})

const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach( (item) => {

    console.log(item.languageFileName);
    
})