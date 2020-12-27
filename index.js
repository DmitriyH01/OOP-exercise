class Mammal {
  constructor(name, gender, species, friend, saying) {
    this.name = name;
    this.gender = gender;
    this.species = species;
    this.friend = friend;
    this.saying = saying;
  }
  toString() {
    return [
      this.name,
      this.gender,
      this.species,
      this.friend,
      this.saying,
    ].join(';');
  }
}

// class Animal extends Mammal {
//   constructor(name, gender, species, friend, saying, legs = 4) {
//     super(name, gender, species);
//     this.species = 'animal';
//     this.friend = friend;
//     this.saying = saying;
//     this.legs = legs;
//   }
//   toString() {
//     return [super.toString(), this.legs].join(';');
//   }
// }

class Human extends Mammal {
  constructor(name, gender, friend, saying, legs = 2, hands = 2) {
    super(name, gender);
    //почему species определяется, а если взять friend прописать - то хуй?
    //почему если убрать все аргументы из super - не работает, хотя я все равно прописываю
    //в Human 'name' и 'gender'?
    //почему не прописывая 'this.name' - все равно определяется 'name'? А если не прописать
    //this.friend - то - хуй?
    this.species = 'human';
    this.friend = friend;
    this.saying = saying;
    this.legs = legs;
    this.hands = hands;
  }
  toString() {
    return [super.toString(), this.legs, this.hands].join(';');
  }
}

class Cat extends Mammal {
  constructor(name, gender, saying, friend, legs = 4) {
    super(name, gender);
    this.species = 'cat';
    this.friend = friend;
    this.saying = saying;
    this.legs = legs;
  }
  toString() {
    return [super.toString(), this.legs].join(';');
  }
}
class Dog extends Mammal {
  constructor(name, gender, saying, friend, legs = 4) {
    super(name, gender);
    this.species = 'dog';
    this.friend = friend;
    this.saying = saying;
    this.legs = legs;
  }
  toString() {
    return [super.toString(), this.legs].join(';');
  }
}
class Werewolf extends Human {
  constructor(name, gender, saying, friend, transforms) {
    super(name, gender);
    this.species = 'werewolf';
    this.saying = saying;
    this.friend = friend;
    this.transforms = transforms;
  }
  toString() {
    return [super.toString(), this.transforms].join(';');
  }
}

const man = new Human('Bob', 'male', 'Bobik', 'Hi!');
const woman = new Human('Lara', 'female', 'Zarina', 'Hello!');
const dog = new Dog('Bobik', 'male', 'Woof-Woof', 'Bob');
const cat = new Cat('Zarina', 'female', `Meow-Meow`, 'Lara');
const werewolf = new Werewolf(
  'Dorian',
  'male',
  `Lingering howl!`,
  'Bobik',
  'full moon'
);

const inhabitants = [man, woman, dog, cat, werewolf];

inhabitants.forEach((inhabitant) => print(inhabitant));
