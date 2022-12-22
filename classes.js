"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAdress() {
        return `${this.name}, ${this.address}`;
    }
}
let john = new Employee(1, "John", "123 Main St");
console.log(john.getNameWithAdress());
