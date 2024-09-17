//PROGRAMACIÓN FUNCIONAL

//Vamos a crear perritos
//nombre, edad
//ladrar, correr, comer, cumplir años

function createDog(name, age) {
  const dog = {
    name: name,
    age: age,
    clase: "mamíferos",
  };
  return dog;
}

function bark(dog) {
  const bark = `${dog.name} is barking`;
  return bark;
}

function run(dog) {
  const run = `${dog.name} is running`;
  return run;
}

function eat(dog) {
  const eat = `${dog.name} is eating`;
  return eat;
}

function haveBirthday(dog) {
  dog.age += 1;
  return `Happy birthday ${dog.name}! Now you are ${dog.age} years old!`;
}

export { createDog, bark, run, eat, haveBirthday };
