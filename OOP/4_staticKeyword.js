class person{
   static firstName="nazmul";
   static lastName="islam";
   static getName(){
        return `this person name is ${this.firstName} ${this.lastName}`
    }
}
console.log(person.getName());
