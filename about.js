console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let duck = document.querySelector('img')

duck.addEventListener('mouseover',  hover)

function hover(evt) {
	evt.preventDefault();
	
	alert('You are funny');
}