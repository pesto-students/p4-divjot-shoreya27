let manali = {
  name: "Manali",
  region: "Hills",
  state: "Himachal",
  country: "India",
};

function flightBooking(passenger, price) {
  console.log(
    `Destination:${this.name} is a ${
      this.region
    }.\nPer passenger price is:${price} and you are total ${passenger} passengers and cost is ${
      price * passenger
    }Rs.`
  );
}

flightBooking.call(manali, ...[2, 800]); //call function with arguments
flightBooking.apply(manali, [3, 800]); //apply on same function with array like arg
flightBooking.apply(manali, [4, 800]);
