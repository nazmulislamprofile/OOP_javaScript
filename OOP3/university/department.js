const _id=Symbol('id');
const _name=Symbol('name')
const _subject=Symbol('subject')
const _dean=Symbol('dean')
const _teachers=Symbol('teachers')


class Department{
    constructor({id,name,subject,dean,teachers}){
        this._id=id;
        
    }
}

module.exports=Department