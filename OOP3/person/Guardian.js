const Person = require('./Person'); // Import Person class with correct case
const _profession = Symbol('profession');
const _income = Symbol('income');

class Guardian extends Person {

    constructor(id, name) {
        super(id, name);
        this[_profession] = null;
        this[_income] = null;
    }

    get profession() {
        return this[_profession];
    }
    set profession(value) {
        this[_profession] = value;
    }

    get income() {
        return this[_income];
    }
    set income(value) {
        this[_income] = value;
    }

    toString(){

        return `${super.toString()},Profession=${this[_profession]},income=${this[_income]}`
        
    }
}




module.exports=Guardian;