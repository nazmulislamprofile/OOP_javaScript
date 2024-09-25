class person{
    constructor(name,id,pass){
        this._name=name;
        this._id=id;
        this._pass=pass;
    }

    get name(){
        return console.log(this._name);
    }
    get id(){
        return console.log(this._id)
    }
    get pass(){
        return console.log(this._pass)
    }
    set name(n){
        this._name=n;
    }
    set id(id){
        this._id=id;
    }
    set pass(pass){
        this._pass=pass;
    }
}

let p1=new person("nazmul islam",234,"2334#@#nazmul");
let p2=new person("abid hasan",233,"2343@23abid");
p1.name;
p1.id;
p1.pass;
p2.name;
p2.id;
p2.pass;

//update
p1.name="nazmul Islam father of abid hasan"
p2.name="abid hasan son of nazmul islam";
p1.name;
p2.name;