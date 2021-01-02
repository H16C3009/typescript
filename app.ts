const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'yota',
    age: 31,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author'],
};

// person.role.push('admin')
// person.role[1] = 10;

// person.role = [0, 'admin', 'user']

let favoriteActivities: any[];
favoriteActivities = ['sports', 31];

console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}
