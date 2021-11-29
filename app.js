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