class User{
	constructor(email, password){
		this.email = email;
		this.password = password
	}

	get password(){
		return this.password.toUppercase;
	}
}

const bk = new User("b@brajk.ai","124");
console.log(bk.password);