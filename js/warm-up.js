// Function to calculate the average grade of the students
const calculateAverageGrade = (studentList) => {
    let classAverage;
    let sum = 0;
    // Your code here
    let count = studentList.length;

    studentList.forEach(i => {
        sum += i.grade;
    })
    classAverage = sum / count;
    return classAverage;
};

// Function to find the student with the highest grade
const findTopStudent = (studentList) => {
    let topStudent = studentList[0];
    studentList.forEach(i => {
        if (topStudent.grade < i.grade) {
            topStudent = i;
        }
    })

    // Your code here
 
    return topStudent;
};

//IIFE / Main
(() => {
    // Array of student objects
    const students = [
        {id: 1, name: "Alice", grade: 90},
        {id: 2, name: "Bob", grade: 85},
        {id: 3, name: "Charlie", grade: 78},
        {id: 4, name: "David", grade: 92},
        {id: 5, name: "Eva", grade: 88},
    ];
    // Display the average grade and the top student
    const averageGrade = calculateAverageGrade(students);
    const topStudent = findTopStudent(students);

    console.log(`Average Grade: ${averageGrade}`);
    console.log(`Top Student: ${topStudent.name} (Grade: ${topStudent.grade})`);
})();