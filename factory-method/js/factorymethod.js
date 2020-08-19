// https://refactoring.guru/uk/design-patterns/factory-method

class Tesla {
  constructor(model, price, color) {
    this.model = model;
    this.price = price;
    this.color = color;
  }
  ShowCarInfo(){
      console.log(`Model: ${this.model} \nPrice:${this.price} \nColor: ${this.color}`)
  }
}

class TeslaFactory {
  create(type) {
    if (type === "X") {
      return new Tesla(type, 50000, "Blue");
    }
    if (type === "Y") {
      return new Tesla(type, 70000, "Red");
    }
  }
}


let factory = new TeslaFactory();

let X = factory.create('X');
X.ShowCarInfo();

let Y = factory.create("Y");
Y.ShowCarInfo();