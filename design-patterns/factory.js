/* Factory Pattern Example */

/* Lets create a Vehicle Factory */

//Car constructor
function Car() {
	this.door = 4;
	this.cc = 1000;
	this.name = 'Audi';
}
//Truck constructor
function Truck() {
	this.door = 2;
	this.cc = 3000;
	this.name = 'Tata';
}
//Bus constructor
function Bus() {
	this.door = 1;
	this.cc = 2000;
	this.name = "Volvo";
}

//Factory to create objects
function VehicleFactory() {
}
VehicleFactory.prototype.vehicleClass = Car; //default
VehicleFactory.prototype.createVehicle = function(type) {
	switch(type) {
		case "car":
			this.vehicleClass = Car;
		break;
		case "bus":
			this.vehicleClass = Bus;
		break;
		case "truck":
			this.vehicleClass = Truck;
		break;
	}
	return new this.vehicleClass(); //return the object
}

