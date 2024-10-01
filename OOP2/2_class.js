// Declare Symbols outside the class
const _name = Symbol('name');
const _id = Symbol('id');
const _pass = Symbol('pass');

class Person {
    constructor(name, id, pass) {
        this[_name] = name;
        this[_id] = id;
        this[_pass] = pass;
    }

    get name() {
        console.log(this[_name]);
    }
    get id() {
        console.log(this[_id]);
    }
    get pass() {
        console.log(this[_pass]);
    }

    set name(n) {
        this[_name] = n;
    }
    set id(id) {
        this[_id] = id;
    }
    set pass(pass) {
        this[_pass] = pass;
    }
}

// Create instances of Person
let p1 = new Person("nazmul islam", 234, "2334#@#nazmul");
let p2 = new Person("abid hasan", 233, "2343@23abid");

// Access properties
p1.name;  // Outputs: nazmul islam
p1.id;    // Outputs: 234
p1.pass;  // Outputs: 2334#@#nazmul
p2.name;  // Outputs: abid hasan
p2.id;    // Outputs: 233
p2.pass;  // Outputs: 2343@23abid

// Update properties using setters
p1.name = "nazmul Islam father of abid hasan";
p2.name = "abid hasan son of nazmul islam";

// Access updated properties
p1.name;  // Outputs: nazmul Islam father of abid hasan
p2.name;  // Outputs: abid hasan son of nazmul islam
