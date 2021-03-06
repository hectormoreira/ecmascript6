//Principales novedades de ECMAScript 9
//spread operator object
const obj = {
  name: "Hector",
  age: 32,
  country: "EC",
};

let { name, ...all } = obj;
console.log(name, all);

//**** */
const obj2 = {
  name: "Hector",
  age: 32,
};

const obj3 = {
    ...obj2,
  country: "EC",
};
 
console.log(obj3);

//Promise finally
const helloWorld = () =>{
    return new Promise((resolve, reject) => {
        true
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test error'))
    })
}
helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizó'))


//REGEX
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day);
