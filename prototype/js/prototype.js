// https://refactoring.guru/uk/design-patterns/prototype

class Tesla {
  constructor(model, price, color, autopilot) {
    this.model = model;
    this.price = price;
    this.color = color;
    this.autopilot = autopilot;
  }
  clone() {
    return new Tesla(this.model, this.price, this.color, this.autopilot);
  }
  ShowCarInfo() {
    console.log(
      `Model: ${this.model} \nPrice:${this.price} \nColor: ${this.color} \nAutopilot: ${this.autopilot}`
    );
  }
  SetColor(color) {
    this.color = color;
  }
  SetPrice(price) {
    this.price = price;
  }
  SetAutopilot(autopilot) {
    this.autopilot = autopilot;
  }
}

const prototype = new Tesla("X", 50000, "Red", false);

const car_1 = prototype.clone();
car_1.ShowCarInfo();
car_1.SetColor("Brown");
car_1.SetPrice(60000);
car_1.SetAutopilot(true);
car_1.ShowCarInfo();


const car_2 = prototype.clone();
car_2.ShowCarInfo();
car_2.SetColor("White");
car_2.SetPrice(80000);
car_2.SetAutopilot(true);
car_2.ShowCarInfo();