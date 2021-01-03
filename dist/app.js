"use strict";
let user1;
user1 = {
    name: 'Max',
    age: 30,
    greeting(phrase) {
        console.log(phrase + ' ' + this.name);
    },
};
user1.greeting('I am');
//# sourceMappingURL=app.js.map