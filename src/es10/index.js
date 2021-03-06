/*
Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos.
Array.prototype.flatMap() lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
String.prototype.trimStart() | String.prototype.trimEnd() permite quitar los espacios al inicio o al final dependiendo de la funciona.
try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.
Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
Symbol.prototype.description: permite regresar el descripcion opcional del Symbol
*/
//junio 2019
let array = [1,2,3, [1,2,3, [1,2,3]]]
console.log(array.flat(3));

let array2 = [1,2,3,4,5]
console.log(array2.flatMap(value => [value, value * 2]));

let hello = '       hello world';
console.log(hello);
console.log(hello.trimStart());


let hello2 = 'hello world      ';
console.log(hello2);
console.log(hello2.trimEnd());


//Podemos no pasar Error en catch y tomarlo directamente
// Optional Catch Binding
try {
    
} catch {
    error//optional
}

// fromEntries
let entries = [["name","Hector"],["age", 29]];
console.log(Object.fromEntries(entries));
//{ name: 'Hector', age: 29 }


//objeto de tipo simbolo
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);

