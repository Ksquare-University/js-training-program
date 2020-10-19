function Vehicle() {
  this.engine = "engine";
  this.wheels = 4;
}

Vehicle.prototype.turnOf = function () {
  console.log("I'm dead");
};

Vehicle.prototype.turnOn = function () {
  console.log("I'm alive!!");
};

function Car() {
  Vehicle.call(this);
}

Car.prototype = Vehicle.prototype;
Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.turnOn = function () {
  console.log("I'm alive, but as a car");
};

var car = new Car();
var vehicle = new Vehicle();

car.turnOn();
vehicle.turnOn();
