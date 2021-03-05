//Principales novedades de ECMAScript 7
//includes en array
let numbers = [1,2,3,7,8];
if(numbers.includes(9)){
    console.log('Existe el 7');
}else{
    console.log('No existe');
}

//potencia
let base = 4;
let exponent = 2;
let result = base ** exponent;
console.log(result);