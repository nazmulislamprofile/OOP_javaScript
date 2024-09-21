//Object Literal
let person = {

    //Properties
    first_name: 'Jhon',
    last_name: 'Dee',

    //method
    getName:()=> {
        return (`The name of the person is ${person.first_name} ${person.last_name}`)
    },
    arr:[122,23,34],
    obj:{
        firstName:"nazmul",
        lastName:"islam",
        age:20,
        getAge:()=>{
            return `this person name ${person.obj.firstName} ${person.obj.lastName} and age ${person.obj.age}`
        }
    }

}

console.log(person.getName());
console.log(person.arr[1]);
console.log(person.obj.getAge())