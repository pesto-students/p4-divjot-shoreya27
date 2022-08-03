let batman = {
  name: "Batman",
  sayHi() {
    console.log("Hi,", this.name, "!");
  },
};

let superman = {
  name: "superman",
};

let sayBatman = batman.sayHi.bind(batman);
let saySuperman = batman.sayHi.bind(superman);
setTimeout(sayBatman, 2000);
setTimeout(saySuperman, 3000);
