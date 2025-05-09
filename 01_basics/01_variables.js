const accountId="12345"
let accountEmail="priya@google.com"
var accountPassword="45637"
accountCity= "ghaziabad"
let accountState;
// accountId=9 // not allowed
console.log(accountId);


// perfer not to use var
// because issue in block scope and functional  scope
accountEmail="Pc@hc.com"
accountPassword="24314"
accountCity="bengaluru"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
