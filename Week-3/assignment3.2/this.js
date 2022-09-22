let car = {
  name: "xuv 700",
  brand: "Mahindra",
  suv: true,
  start() {
    console.log(`${this.name} of ${this.brand} is expensive`);
  },
};

let bike = {
  name: "KTM RC 390",
  brand: "KTM",
};

car.start = car.start;
bike.start = car.start;

car.start(); //xuv 700 of Mahindra is expensive
bike.start();
//This keyword is unbound in JS, its value depends on how the function is called.
//if that is called using an object , then this will hold value of that object
