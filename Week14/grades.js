const grades = new Array();

for (let i = 12; i > 0; i--) {
    grades.push(Math.round(Math.random() * (100 - 1) + 1));
}
console.log(grades);
const averageGrade = grades.reduce((acc, grade) => acc + grade) / grades.length;
console.log('Среднее значение', Math.round(averageGrade));

//const maxGrade = Math.max(...grades);

const maxGrade = Math.max.apply(null, grades);
console.log('Максимальное значение', maxGrade);
const minGrade = Math.min.apply(null, grades);
console.log('Минимальное значение', minGrade);

const positivGrades = grades.filter(function (grade) {
    return grade >= 60;
});
console.log('Количество студентов, получивших положительную оценку', positivGrades.length);

const negativeGrades = grades.filter(function (grade) {
    return grade < 60;
});
console.log('Количество студентов, получивших отрицательную оценку', negativeGrades.length);


const newGrades = grades.map(function (grade) {
    if (grade >= 80) { return grade = 'A'; }
    else if (grade >= 60 && grade < 80) { return grade = 'B'; }
    else if (grade >= 40 && grade < 60) { return grade = 'C'; }
    else if (grade >= 20 && grade < 40) { return grade = 'D'; }
    else if (grade < 20) { return grade = 'E'; }
});

console.log(newGrades);