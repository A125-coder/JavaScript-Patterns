let URL = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
class Curs {
  constructor() {
    if (typeof Curs.instance === "object") {
      return Curs.instance;
    }
  
    Curs.instance = this;
    return this;
  }

  getData(URL) {
    fetch(URL)
      .then((response) => response.json())
      .then((currency) => {
        this.ShowCurrency(currency);
      })
      .catch((error) => console.error(error));
  }

  ShowCurrency(data){
    console.log(data);
  }
}

let obj1 = new Curs();
obj1.getData(URL);




// ========================================================


