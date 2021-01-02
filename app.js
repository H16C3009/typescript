var person = {
    name: 'yota',
    age: 31,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
// person.role.push('admin')
// person.role[1] = 10;
// person.role = [0, 'admin', 'user']
var favoriteActivities;
favoriteActivities = ['sports', 31];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
