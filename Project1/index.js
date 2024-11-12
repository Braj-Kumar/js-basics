 const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
const Heading = document.querySelector('#heading');

buttons.forEach(function (button){
	button.addEventListener('click', function(event){
		
		// both lines just for printing in console
		console.log(event);
		console.log(event.target);

		if(event.target.id === 'grey'){
			body.style.backgroundColor =  event.target.id;
			// Heading.style.color = event.target.id;
			
		}
		if(event.target.id === 'white'){
			body.style.backgroundColor = event.target.id;
			// Heading.style.color = event.target.id;

		}
		if(event.target.id === 'blue'){
			body.style.backgroundColor = event.target.id;
			// Heading.style.color = event.target.id;
		}	
		if(event.target.id === 'yellow'){
			body.style.backgroundColor = event.target.id;
			// Heading.style.color = event.target.id;
	
		}

		if(event.target.id === 'pink'){
			body.style.backgroundColor = event.target.id;
			// Heading.style.color = event.target.id;
		}
	})
})

