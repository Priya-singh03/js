//singleton

//Object.create
//object literals

const mysym = Symbol("Key1")   // symbol me use krna chahte ho to squre bracket me usae kro

const JsUser = {
    name: "priya",
    "full name" : "Priya Singh",
   [mysym]: "mykey1",  
    age: 18,
    location:"jaipur",
    email:"priya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "friday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
//console.log(JsUser.full name);  string ko dot se access nhi kr skte

console.log(JsUser["full name"]);
console.log(JsUser[mysym]);
console.log(typeof JsUser[mysym]);

JsUser.email = "priya@chatgpt.com"
console.log(JsUser);

//Object.freeze(JsUser)
JsUser.email = "priya@amazon.com"
console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
  console.log(`Hello JS User , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());

