interface Person {
    name: string;
    age: number;

    greeting(phrase: string): void;
}


let user1: Person;

user1 = {
    name: 'Max',
    age: 30,

    greeting(phrase: string) {
        console.log(phrase + ' ' + this.name)
    },
}


user1.greeting('I am')