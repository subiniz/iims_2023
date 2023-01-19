// Objects
const students = [
    {
    name: 'Niruta',
    address: {
        country: 'Nepal',
        state: 'Bagmati'
    },
    age: 16
    },
    {
    name: 'yangma',
    address: {
        country: 'USA',
        state: 'NY'
    },
    age: 14
    }
];



students.forEach((student, key) => {
    if(key == 1) {
        console.log(student.name);
    }
    // if(student.age == 14) {
    //     console.log("I am sweet 14");
    // } else {
    //     console.log("Sweet 16")
    // }
});

const value = '1';

if(value === 1) {
    const sum = value + 9;
    console.log(sum);
}

// if(value === 1) {
//     console.log('Ipsum');
// }