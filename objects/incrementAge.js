// https://maxcode.dev/problems/increment-age/

function incrementAge(person) {
    const newPerson = {...person};
    newPerson.age += 1;
    return newPerson;
}

const person = {
    name: "Joe",
    age: 82,
    gender: "male",
};

console.log(incrementAge(person));