// https://refactoring.guru/uk/design-patterns/builder

class Frog {
  constructor(name, weight, height, gender) {
    this.name = name;
    this.weight = weight; // in lbs
    this.height = height; // in inches
    this.gender = gender;
  }
}

class FrogBuilder {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  setWeight(weight) {
    this.weight = weight;
    return this;
  }
  setHeight(height) {
    this.height = height;
    return this;
  }
  build() {
    return new Frog(this.name, this.weight, this.height, this.gender);
  }
}

const leon = new FrogBuilder("Leon", "male")
  .setWeight(14)
  .setHeight(3.7)
  .build();

console.log(leon);

const sally = new FrogBuilder("Sally", "female")
  .setWeight(5)
  .setHeight(7.8)
  .build();

console.log(sally);

class Car {
  constructor() {
    this.color = "white";
    this.audioSystem = false;
    this.autopilot = false;
    this.model = "Unknown";
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addColor(color) {
    this.car.color = color;
    return this;
  }

  addAudioSystem(audio) {
    this.car.audioSystem = audio;
    return this;
  }

  addAutopilot(autopilot) {
    this.car.autopilot = autopilot;
    return this;
  }

  addModel(model) {
    this.car.model = model;
    return this;
  }

  ShowCarInfo() {
    console.log(
      `Model: ${this.car.model}\nColor: ${this.car.color}\nAudio: ${this.car.audioSystem}\nAutopilot: ${this.car.autopilot}`
    );
  }

  build() {
    return this.car;
  }
}

let car = new CarBuilder();
car.ShowCarInfo();
car.addColor("Red");
car.addAudioSystem("Samsung");
car.addModel("Audi");
car.addAutopilot("Stage 4");
car.build();
car.ShowCarInfo();
console.log(car);
