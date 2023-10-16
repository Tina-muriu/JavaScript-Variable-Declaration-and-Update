"strict mode";
//assign value using var keyword
var price1=5;
var price2=10;
var total=price1 + price2;
console.log("sum of price1 and price2=", total);
// updating the variale declaration
price1=21;
price2=14;
total=price1+price2;
console.log("updated sum of price1 and price2=", total);
// re-declaring the variables
var price1=500;
var price2=310;
var total=price1+price2;
console.log("sum of the reclared price1 and price2=", total);
// assign values using let keyword 
let dividend=420;
let divisor=20;
console.log("the division result: ", dividend/divisor);
//update value using let keyword
dividend=720;
divisor=30;
console.log("the updated division result:", dividend/divisor);
/* let does not permit redeclaration once a variable has been declared it can be updated but not reclared*/
/*let dividend=880;
let divisor=40;
console.log("The division result after declaration:", dividend/divisor);*/
const MY_BIRTHDAY='18.06.2023';
console.log("my birthday is on: ", MY_BIRTHDAY);
