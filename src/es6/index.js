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

//Multilínea
let lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. \n" +
  " At, voluptate laudantium! Corrupti quod sint aperiam beatae eius id debitis iusto fugit, consequuntur, reprehenderit minus, illo itaque explicabo nulla voluptate quaerat?";

//es6
let lorem2 = `Otra frase epica que necesitamos
salto de linea
`;
console.log(lorem);
console.log(lorem2);

// Desestructuración
let person = {
  name: "Hector",
  age: 32,
  country: "EC",
};
console.log(person.name, person.age);

//es6
let { name } = person;
console.log(name);


//Spread Operator
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yessica', 'Camila'];

let education = ['David', ...team1, ...team2 ];
console.log(education);

//es6
//let > Disponible solo dentro del scope
//var > Disponible global
{
    var globalVar = "Global Var";
}

{
    let globalLet = "Gloval Let";
    console.log(globalLet);
}
console.log(globalVar);

//const > Constante que no cambia, no es posoble cambiar su valor
const a = 'b';
// no es posible a = 'c'
