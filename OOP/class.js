class MyClass {
    num1 = 12;
    num2 = 13;
    
    sum() {
        // Corrected return statement
        let total= this.num1 + this.num2;
        return total;
    }
}

let obj = new MyClass();
console.log(obj.num1);  // Outputs: 12
console.log(obj.sum());  // Outputs: 25
