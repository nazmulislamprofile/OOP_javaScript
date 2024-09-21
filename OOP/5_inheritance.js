class father{
    firstName='Nazmul';
    lastName='Islam';

    getName(){
        return `this person name is ${this.firstName} ${this.lastName}`
    }

}

class son extends father{
    sonFirstName='Abid';
    sonLastName='Hasan';
    getNameSon(){
        return `this person name is ${this.sonFirstName} ${this.sonLastName}`
    }
}
/*
fatherObj=new father();
console.log(fatherObj.getName());
*/
sonObj=new son();
console.log(sonObj.getName()+sonObj.getNameSon());
