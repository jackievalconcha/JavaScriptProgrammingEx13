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