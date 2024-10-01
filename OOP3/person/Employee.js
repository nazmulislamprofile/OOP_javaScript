const UniPerson=require('./UniPerson');

const _employId=Symbol('employId');
const _salary=Symbol('salary');

class Employee extends UniPerson{
    constructor(id,name,employId){
        super(id,name);
        this[_employId]=employId;
        this[_salary]=null;

    }

    get employId(){
        return this[_studentId];
    }
    get salary(){
        return this[_salary];
    }
    set salary(value){

        this[_salary]=value;
    }

    toString(){
       return `${super.toString()}, EmployeId=${this[_employId]}, salary:${this[_salary]}`
    }

}
module.exports=Employee;