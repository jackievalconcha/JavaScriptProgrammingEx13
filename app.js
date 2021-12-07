/** JavaScript Programming Exercise 13
 * Objects
 * Jackie Valconcha
 */

let myFirstObject = {
    myFirstStringProperty: 'My property value',
    myFirstFloatProperty: 45.59,
    myFunction: function() {
        return this.myFirstFloatProperty / 2;
    },
    add: (a, b) => a + b
}

console.log(myFirstObject);
console.log(myFirstObject.myFirstStringProperty);
console.log(myFirstObject.myFirstFloatProperty);
console.log(myFirstObject.myFunction());
console.log(myFirstObject.add(1, 2));

let Person = function(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dob;
    this.age = function() {
        let now = new Date();
        let years = now.getFullYear() - this.dateOfBirth.getFullYear();

        if (now.getMonth() < this.dateOfBirth.getMonth() || now.getMonth() == this.dateOfBirth.getMonth() && now.getDay() < this.dateOfBirth.getDay()) {
            years -= 1;
        }
        return years;
    }
    this.toString = function() {
        return `Name: ${this.firstName} ${this.lastName} Age: ${this.age()}`;
    }

}

let person = new Person('Chris', 'Cusack', new Date(1996, 7, 12));
console.log(person);
console.log(person.toString());

let anotherPerson = new Person('Pat', 'Thebeau', new Date(1990, 2, 18));
let oneMorePerson = new Person('Stephen', 'Carter', new Date(1900, 4, 12));
let finalPerson = new Person('Gary', 'Carter', new Date(1945, 2, 5));

let people = [];
people.push(person);
people.push(anotherPerson);
people.push(oneMorePerson);
people.push(finalPerson);

console.log('\nPrint all the people');
//foreach loop call toString
people.forEach(per => console.log(per.toString()));

//Use filter method to query collection of objects based off conditions
//Filter returns array
console.log('\nQuery last name Carter');
let query = people.filter(function(per) { return per.lastName == 'Carter' });
query.forEach(q => console.log(q.toString()));

console.log('\nQuery by first and last name');
let findChris = people.filter(function(p) { return p.firstName == 'Chris' && p.lastName == 'Cusack' });

if (findChris.length > 0) {
    console.log('\nRecord found:');
    console.log(findChris[0].toString());
} else {
    console.log('\nRecord not found');
}