class Employee {
  id: number;
  name: string;
  address: string;

  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  getNameWithAdress(): string {
	return `${this.name}, ${this.address}`;
}

}

let john = new Employee(1, "John", "123 Main St");

console.log(john.getNameWithAdress());
