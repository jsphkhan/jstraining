/* Observer Pattern example */
/* Publisher-Subscriber */

/* Example1 - DOM events */
var myBtnRef = document.getElementById("myBtn");
myBtnRef.addEventListener('click', listener, false);

function listener() {
	alert('clicked');
}

/* Example2 - Custom Logic  */
/* Subscriber subscribes for a particular type */
/* Subscriber is notified by publisher publishing of that type */
var Observer = (function() {
	var map = {}; //local
	/* Example structure is
		var map = {
			type1: [callback1, callback2, callback3],
			type2: [callback3, callback4]
		}
	*/
	return {
		publish: function(type) {
			if(typeof map[type] !== 'undefined') {
				for(var i=0; i < map[type].length; i++) { //loop thru each callback
					map[type][i](); //invoke the callback
				}
			} else {
				console.error('Type ' + type + " not found.");
			}
		},
		subscribe: function(type, callback) {
			if(typeof type !== 'undefined' && typeof callback === 'function') {
				if(!(type in map)) { //initially that type does not exist
					map[type] = [];
					map[type].push(callback);
				} else {
					map[type].push(callback);
				}
			} else {
				console.error('Wrong types of arguments passsed');
			}
		},
		unsubscribe: function(type, callback) {
			//try
		}
	}
})();