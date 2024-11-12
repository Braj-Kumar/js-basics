// console.log("hello");

// const myArra=[1,2,3,5,6];
// console.log(myArra);

// const hero1 = ['a','b','c','d'];
// const hero2 = ['f','g','i'];

// const allhero = [...hero1,...hero2];
// console.log(allhero);

// const antarray = [1,2,3,4,[5,6,7],[8,90,-8]];

// console.log(antarray.flat(Infinity));

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));


// <<<<< ---- Objects ----->>>>>

const jsUSer = {
	name:"braj",
	age:20,
	location:"gsp",
	email:"bk@gmial.com",

}

console.log(jsUSer.email);

// best method to assign the value of objects value
console.log(jsUSer["email"]);

jsUSer.email = "k@google.com";
console.log(jsUSer["email"]);

// L--2

const app = {}

app.id = "123456"
app.name = "bk"
app.isLoggedIn=false

// console.log(app);

const reUser ={
	email: "abc@gmail.com",
	fullName :{
		userFullname:{
			firstName:"braj",
			lastName:"kumar"
		}
	}
}

console.log(reUser.fullName.userFullname.lastName);

const obj1 = {1:'a',2:'b',3:'c'};
const obj2 = {4:'d',5:'e',6:'f'};

// const obj3 = {obj1,obj2};
// console.log(obj3);

const obj4 = Object.assign({},obj1,obj2);
// console.log(obj4);


// best method to merge two objects
const obj5 = {...obj1,...obj2}
console.log(obj5);


// Important syntax 
console.log(Object.keys(app));
console.log(Object.values(app));
console.log(Object.entries(app));


// <<< --- L-3 --->>> 


const course ={
	price :"999",
	constructorName :"braj"
}

// course.constructorName
const { constructorName} = course;

console.log(constructorName);


// <<<<< ---- function ---->>>>

// function userLoggedIn(username){
// 	return `${username} just looged in`;
// }

// // console.log(userLoggedIn())

// console.log(userLoggedIn("bK"))


function userLoggedIn(username = "bk"){
	if(!username){
		console.log("please enter your username");
		return;
	}
	return `${username} just lpogged in`
}


// if we don't pass the value then parametrized value is automatically passed 

// console.log(userLoggedIn())

// if we pass the value of username then value is override the parameterzid value
console.log(userLoggedIn("braj"));

function handleObject(anyObj){
	console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);

}
// handleObject(user);

handleObject({
	username:"bk",
	price:30
})

const myNewArray = [200,300,400,100]

function return2ndvalue(getarray){
	return getarray[1]
}

console.log(return2ndvalue(myNewArray));


//  <<<<<------  5.18 ----->>>>

function one (){
	const fullName = "braj Kumar"

	function two(){
		const  age = 18;
		console.log(fullName);
	}

	// console.log(age)
	two()
}

one();



