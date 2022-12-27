console.log("Welcome to Address Book System Program");

class Contact{

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.city = params[2];
        this.state = params[3];
        this.zip = params[4];
        this.phoneNumber = params[5];
        this.email = params[6]
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get city(){
        return this._city;
    }

    get state(){
        return this._state;
    }

    get zip(){
        return this._zip;
    }

    get phoneNumber(){
        return this._phoneNumber;
    }

    get email(){
        return this._email;
    }

    set firstName(firstName){
        this._firstName = firstName;
    }

    set lastName(lastName){
        this._lastName = lastName;
    }

    set city(city){
        this._city = city;
    }

    set state(state){
        this._state = state;
    }

    set zip(zip){
        this._zip = zip;
    }

    set phoneNumber(phoneNumber){
        this._phoneNumber = phoneNumber;
    }

    set email(email){
        this._email = email;
    }

    toString(){
        return "First Name : "+ this.firstName + ", Last Name : "+ this.lastName + ", City : "+ this.city + ", State : "+ this.state +", Zip : "+ this.zip+ ", Phone Number : "+ this.phoneNumber + ", Email : "+ this.email;
    }
}

let contact = new Contact("Rahul", "Ranjan", "Ranchi", "Jharkhand", "123006", "4785961235", "rah007@gmail.com");
console.log(contact.toString());

let contact2 = new Contact("Devansh", "Kumar", "Deoghar", "Jharkhand", "874596", "7894561238", "dev2022@gmail.com");
console.log(contact2.toString());