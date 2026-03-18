//complete this code
// class Animal {}

// class Dog extends Animal {}

// class Cat extends Animal {}

// // Do not change the code below this line
// window.Animal = Animal;
// window.Dog = Dog;
// window.Cat = Cat;


// Parent Class
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

class Cat extends Animal {
  purr() {
    print("purr");
  }
}

class Dog extends Animal {
  bark() {
    print("woof");
  }
}

function print(message) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML += message + "<br>";
  console.log(message);
}

function runDemo() {
  document.getElementById("output").innerHTML = "";

  const myCat = new Cat("Siamese");
  myCat.makeSound();
  myCat.purr();

  const myDog = new Dog("Golden Retriever");
  myDog.makeSound();
  myDog.bark();
}