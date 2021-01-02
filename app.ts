// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// デフォルトは自動的にインクリメント
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


console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if (person.role === Role.ADMIN) {
    console.log('管理者専用ユーザー')
}
