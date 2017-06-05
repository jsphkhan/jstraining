/* Simple module that demonstrates mathematical  */
//var myApp = myApp || {};
(function(scope) {
	var MyModule = { //object literal notation
		multiply: function() {
			var result = 1;
			for(var i = 0; i<arguments.length; i++) {
				//console.log(arguments[i]);
				result *= arguments[i];
			}
			return result;
		},
		square: function(num) {
			return num*2;
		}
	}
	scope.MyModule = MyModule;
})(window);
