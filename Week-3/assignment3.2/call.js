//Call function executed the function with given this keyword value
let tvActors = {
  name: "sheldon cooper",
  show: "Big Bang Theory",
};

let movieActors = {
  name: "Tom Cruise",
  show: "Mission Impossible",
};

function whatsInShow() {
  console.log(`${this.name} is in ${this.show}`);
}

whatsInShow.call(tvActors);
whatsInShow.call(movieActors);
