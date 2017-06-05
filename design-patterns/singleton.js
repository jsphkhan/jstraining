//Employee Constructor Function
function Employee(name, id) {
	if(typeof Employee.instance === 'undefined') {
		Employee.instance = this; //cache the instance ref into a property
		this.name = name;
		this.ID = id;
	} else {
		return Employee.instance;
	}
}

//prototype
Employee.prototype.getName = function() {
	return this.name;
}

//instances
var e1 = new Employee('joseph', '1426');
var e2 = new Employee('joseph1', '1890');

//e1 === e2 //TRUE