// https://refactoring.guru/uk/design-patterns/abstract-factory

function teslaCreator(kind) {
  // return kind === "sport" ? sportCarFactory : croosoverCarFactory;
  if (kind === "sport") {
    return sportCarFactory;
  } else if (kind === "crossover") {
    return croosoverCarFactory;
  }
}

function sportCarFactory() {
  return new ModelX();
}

function croosoverCarFactory() {
  return new CyberTruck();
}

class ModelX {
  ShowCarInfo() {
    return "Sport car ModelX";
  }
}

class CyberTruck {
  ShowCarInfo() {
    return "Crossover car CyberTruck";
  }
}

const creator = teslaCreator("sport");
const myCar = new creator();

console.log(myCar.ShowCarInfo());
