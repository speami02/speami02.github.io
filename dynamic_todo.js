restoreList("toDoList", isDone);

addTask = function() {
	var myLi, liText, myOl, myCheckbox;

	myLi = document.createElement('li');

	liText = document.createTextNode(document.querySelector("#newItem").value);

	myOl = document.querySelector("#toDoList");

	myCheckbox = document.createElement('input');
	myCheckbox.type = "checkbox";
	myCheckbox.onclick = isDone;

	myLi.className = document.querySelector('#priority').value;

	myLi.appendChild(myCheckbox);
	myLi.appendChild(liText);
	myOl.appendChild(myLi);
	
	localSave("#toDoList");
}
isDone = function() {
	if (this.checked) {
		this.parentNode.classList.add('done');
	} else {
		this.parentNode.classList.remove('done');
	}
	
	localSave("#toDoList");
}
