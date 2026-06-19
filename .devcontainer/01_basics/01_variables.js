const accountId = 12345
let accountEmail = "asb@gmail.com"
var accountPassword = "8765"
accountCity="xyz"
let accountState;

console.log(accountId);
console.table([accountEmail,accountPassword,accountState])
//prefer not to use var because of issue in block scope and functional scope