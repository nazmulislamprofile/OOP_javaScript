
const _id=Symbol('this is id');
const _name=Symbol('this is name');
const _blood=Symbol('this is blood');
const _contact=Symbol('this is contact');

class Person{
    constructor(id,name,blood,contact){
        this[_id]=id;
        this[_name]=name;
        this[_blood]=blood;
        this[_contact]=contact;
    }
    
    get id(){
        return this[_id];
    }

    /*
    set id(id){
        this[_id]=id;
    }
    */
    
    get name(){
        return this[_name];
    }
    set name(value){
        this[_name]=value;
    }
    get blood(){
        return this[_blood];
    }
    set blood(value){
        this[_blood]=value;
    }
    
    get contact(){
        return this[_contact];
    }
    set contact(value){
        this[_contact]=value;
    }

    toString(){
        return `${this[_id]}-${this[_name]}`
    }

}

let p1=new Person(233,"nazmul islam","b+","01973961381");

console.log(p1.blood="A+");


module.exports=Person;
