// const add = (...numbers: number[]) => {
//     return numbers.reduce((curResult, curValue) => {
//         return curResult + curValue;
//     }, 0)
// }

const add = (...numbers: [number, number, number]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0)
}


const addedNumbers = add(5, 10, 2)
console.log(addedNumbers)



const hobbies = ['sports', 'cooking']
const [h1, h2, ...remaingHobbies] = hobbies
console.log(hobbies, h1, h2)


const person = {
    Name: 'max',
    age: 30
}

const { Name: userName, age } = person;
console.log(person, userName, age)
