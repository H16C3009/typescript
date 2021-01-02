const person = {
    name: 'yota',
    age: 31,
    hobbies: ['sports', 'cooking'],
};

let favoriteActivities: any[];
favoriteActivities = ['sports', 31];

console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}
