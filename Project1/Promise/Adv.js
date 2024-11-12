const promiseOne = new Promise(function(resolve,reject){
	setTimeout(function(){
		console.log("async task is complete");
		resolve()
	}, 1000)
})

promiseOne.then(function(){
	console.log("Promise consumed");
})

new Promise(function(resolve, reject){
	setTimeout(function(){
		console.log("Async task 2");
		resolve();
	},1000)
}).then(function(){
	console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve({username:"BK",priority:"chai & Code"})
	},1000);
})

promiseThree.then(function(user){
	console.log(user)
})

const promoiseFour = new Promise(function(resolve,reject){
	setTimeout(function(){
		// let error = true;
		let error = false;
		if(!error){
			resolve({username:"Braj", priority:"chai & code"})
		}
		else{
			reject("ERROR : something went wrong");
		}
	},1000)
})

promoiseFour.then((user)=>{
	console.log(user);
	return user.username
}).then((username)=>{
	console.log(username);
}).catch((error)=>{
	console.log(error);
})


// PromiseFive using async and await

const PromiseFive = new Promise(function(resolve,reject){
	setTimeout(function(){
		// let error = false;
		let error = true;
		if(!error){
			resolve({username:"Braj",priority:"JavaScript"})
		}
		else{
			reject("ERROR: JS went wrong");
		}
	},1000)
});

async function consumedPromiseFive(){
	try{

		const response = await PromiseFive;
		console.log(response);
	}
	catch(error){
		console.log(error)
	}
}

consumedPromiseFive();
	

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()