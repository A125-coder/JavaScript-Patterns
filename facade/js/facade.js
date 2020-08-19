// https://refactoring.guru/uk/design-patterns/facade

class CarFactory {
  setEngine() {
    console.log("Set Engine");
  }
  setColor() {
    console.log("Color");
  }
  setWheels() {
    console.log("Set Wheels");
  }
  setBody(){
    console.log("Set Body");
  }
}


class CarFactoryFacade{
  constructor(car){
    this.car = car;
  }

  StartAssembly(){
    this.car.setBody();
    this.car.setEngine();
    this.car.setWheels();
    this.car.setColor();
  }
}


const cf = new CarFactoryFacade(new CarFactory());
cf.StartAssembly();