const person=require('./Person');
const department=symbol('department');
const account =symbol('acount');

class UniPerson extends Person{
    constructor(id,name){
        super(id,name);
        this[_department]=null;
        this[_account]=null;
    }

    get department(){
        return this[_department];
    }
    set department(value){
        this[_department]=value;
    }

    get account(){
        return this[_account];
    }
    set account(value){
        this[_accout]=value;
    }

    toString(){

        return `${super.toString()},department=${this[_department]},account=${this[_account]}`
        
    }
}

module.exports=UniPerson;