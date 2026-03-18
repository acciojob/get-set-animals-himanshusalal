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
    print(`The ${this._species} makes a sound`);
  }
}

// Cat Class
class Cat extends Animal {
  purr() {
    print("purr");
  }
}

// Dog Class
class Dog extends Animal {
  bark() {
    print("woof");
  }
}

// Function to show output on screen
function print(message) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML += message + "<br>";
  console.log(message); // also logs in console (for Cypress)
}

// Run Demo
function runDemo() {
  document.getElementById("output").innerHTML = "";

  const myCat = new Cat("Siamese");
  myCat.makeSound();
  myCat.purr();

  const myDog = new Dog("Golden Retriever");
  myDog.makeSound();
  myDog.bark();
}
