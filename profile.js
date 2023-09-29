function favColor(evt) {
	evt.preventDefault();
	
	alert('Pink');
}


let color = document.querySelector('#color');

color.addEventListener('click', favColor);

function favPlace(evt) {
	evt.preventDefault();
	
	alert('Home');
}


let place = document.querySelector('#place');

place.addEventListener('click', favPlace);

function favRitual(evt) {
	evt.preventDefault();
	
	alert('eating outside during lunch');
}


let ritual = document.querySelector('#ritual');

ritual.addEventListener('click', favRitual);