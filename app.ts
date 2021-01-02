enum Role {
    ADMIN = 'ADMIN',
    READ_ONLY = 100,
    AUTHOR = 200,
}

const person = {
    name: 'yota',
    age: 31,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN,
};

// # 必要でなければ、any型は避けるほうがいい（typescriptが型推論をしてくれないため）
let favoriteActivities: any[];
favoriteActivities = ['Sports'];

console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if (person.role === Role.ADMIN) {
    console.log('管理者専用ユーザー')
}
