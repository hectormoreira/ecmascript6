//Object entries
const data = {
  frontend: "Hector",
  backend: "Isabel",
  design: "Ana",
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object values
const data2 = {
  frontend: "Hector",
  backend: "Isabel",
  design: "Ana",
};

const values = Object.values(data2);
console.log(values);
console.log(values.length);

//padding
const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, "----"));
console.log("food".padEnd(12, " ------"));

//Async - await
const helloWorld = () => {
  return new Promise((resolve, refect) => {
    true
      ? setTimeout(() => resolve("Hello world"), 3000)
      : refect(new Error("Test error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  //const hello2 = await
  console.log(hello);
};

helloAsync();

//otra propuesta
const anotherFuntion = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFuntion();
