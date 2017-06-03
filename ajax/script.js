var displayAreaRef = document.getElementById("displayArea"),
	listRef= document.getElementById("list"),
	myBtnRef = document.getElementById("myBtn");

myBtnRef.onclick = function() {
	makeAjaxCall();
	//doOtherTask();
}

function makeAjaxCall() {
	var xhr = new XMLHttpRequest(); //create the request object
	xhr.open('GET', './data/employees.json', true); //open a channel to the end URL i.e request URL
	xhr.send(''); //fire the call now. '' - since no params to pass

	/* whenever there is a state change, this event is triggered */
	xhr.onreadystatechange = function() {
		//console.log('state change ' + xhr.readyState);
		//console.log('status ' + xhr.status);

		//response is back and ready and HTTP status is 200 (OK)
		if(xhr.readyState === 4 && xhr.status === 200) {
			//console.log(typeof xhr.responseText); //responseText comes as String
			processResponse(xhr.responseText);
		}
	}
}

function processResponse(responseString) {
	var responseObj = JSON.parse(responseString); //convert string to JSON data
	//console.log(responseObj);
	displayAreaRef.value = responseString; //show in textarea

	var listHtml = "";
	//loop
	for(var i = 0; i < responseObj.data.length; i++) {
		listHtml += "<li>" + responseObj.data[i].name + " (" + responseObj.data[i].id + ")" + "</li>";
	}

	//append to page
	listRef.innerHTML = listHtml;
}

function doOtherTask() {
	for(var i = 1; i <= 5000 ; i++) {
		console.log(i);
	}
}