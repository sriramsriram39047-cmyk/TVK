console.log("Primitive Datatypes");

//Numbers
console.log("DT Numbers");
var age = 18
console.log(age);

//Strings
console.log("DT Strings");
var name = "sriram"
console.log(name);

//Booleans
console.log("DT Booleans")



//Null
console.log("DT Null");
var emptyvalue = null
console.log(emptyvalue);

//Undefined
console.log("DT Undefined");
var undef;
console.log(undef);

//Symbol
console.log("DT Symbol");
var sym1 = Symbol("sym1");
var sym2 = Symbol("sym2");
console.log(sym1);
console.log(sym2);

//BigInt
console.log("DT BigInt");
var bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue);

//Non-Primitive Datatypes
console.log("Non-Primitive Datatypes");
//Objects
console.log("DT Objects");
var person = {
    name: "sriram",
    age: 18,
    city: "chennai"
}
console.log(person);

//Arrays
console.log("DT Arrays");
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//Functions
console.log("DT Functions");
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("sriram"));
