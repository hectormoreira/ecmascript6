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
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yessica", "Camila"];

let education = ["David", ...team1, ...team2];
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
const a = "b";
// no es posible a = 'c'

//Objetos
let name = "Hector";
let age = 32;
//es5
let obj = { name: name, age: age };
//es6
let obj2 = { name, age };
console.log(obj2);

// arrow functions > Funciones anónimas que retornan un valor
const names = [
  { name: "Hector", age: 29 },
  { name: "Yessica", age: 29 },
];
//es5
let listOfNames = names.map(function (item) {
  console.log(item.name);
});
//es6
let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  //code
};

const listOfNames4 = (name) => {
  //code
};

const square = (num) => num * num;

//Promesas
const helloPromise = () => {
  //Se retorna nueva Promise que devuelve 2 elementos: resolve o reject
  return new Promise((resolve, reject) => {
    if (true) {
      //promesa resuelta
      resolve("Hey!");
    } else {
      //promesa rechazada
      reject("Ups!!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("Hello"))
  .catch((error) => console.log(error));

//POO
//Clases, modulos, generadores
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//modulo
import { hello } from "./module";
hello();

//generadores
function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }

  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);