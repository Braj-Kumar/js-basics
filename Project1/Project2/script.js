const clock = document.querySelector('#clock');
const clock2 = document.querySelector('#clock2');


setInterval(function () {
	let date = new Date();
	// console.log(date.toLocaleTimeString);
	clock.innerHTML = date.toLocaleDateString();
	clock2.innerHTML = date.toLocaleTimeString();
}, 1000)