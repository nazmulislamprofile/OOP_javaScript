const _id=Symbol('id');
const _roadNo=Symbol('roadNo');
const _city=Symbol('city')
const _region=Symbol('region');
const _country=Symbol('country');
const _postalCode=Symbol('postalcode');

class Address{
    constructor({id,roadNo,city,region,country,postalcode}){
        this[_id]=id;
        this[_roadNo]=roadNo || '';
        this[_city]=city || '';
        this[_region]=region ||'';
        this[_country]=country ||'';
        this[_postalCode]=postalcode||'';
    }

    get id(){
        
    }
}