// 1

interface Student {
    firstName: string;  
    lastName: string;   
    age: number;        
    scores: number[];   
}

const student: Student = {
    firstName: 'Anya',
    lastName: 'Lallart',
    age: 20,
    scores: [20, 17, 15, 16]
};

console.log(`Nom : ${student.lastName}, Prénom : ${student.firstName}, Âge : ${student.age}`);
console.log(`Notes : ${student.scores.join(', ')}`);


// 2
function calculateAverage(student: Student): number {
    const total = student.scores.reduce((acc, score) => acc + score, 0);
    return total / student.scores.length;
}

console.log(calculateAverage(student));

// 3
const student2: Student = {
    firstName: 'Clément',
    lastName: 'Pernin',
    age: 21,
    scores: [12, 17, 15, 9]
};

const students: Student[] = [student, student2]

function compareAverage(students: Student[]): Student {
    let high = students[0];

    for (let i = 1; i < students.length; i++){
        if (calculateAverage(students[i]) > calculateAverage(high)){
            high = students[i];
        }
    }
    return high;
}

console.log(calculateAverage(student2));
console.log(compareAverage(students));


// 4