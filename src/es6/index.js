function newFunction(name, age, country) {
  var name = name || "Hector";
  var age = age || 29;
  var country = country || "EC";
  console.log(name, age, country);
}

//es6
function newFunction2(name = "Hector", age = 29, country = "EC") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Hugo", "20", "CO");

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//Template literal
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);