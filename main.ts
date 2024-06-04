//  Find the Average Grade: Given a list of grades, calculate the average grade.

// Explain & TIP: We can sum up all the grades and divide by the number of grades to find the average, giving us 
// an idea of how well someone did overall.

let grade = [88, 94, 65, 96 ,77];

let averageGrade= grade.reduce((grade,total)=> total + grade , 0) / grade.length;

console.log(averageGrade);
