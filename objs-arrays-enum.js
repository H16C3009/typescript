"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'yota',
    age: 31,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN,
};
// # 必要でなければ、any型は避けるほうがいい（typescriptが型推論をしてくれないため）
var favoriteActivities;
favoriteActivities = ['Sports', 5];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('管理者専用ユーザー');
}
