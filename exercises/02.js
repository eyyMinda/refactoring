console.clear();
/**
 * Should print notification for each student.
 * @param {*} list 
 */
function marksAverages_forEvery_student(students) {
  return students.map(student => {
    if (!student.marks || !student.marks.length) return `${student.name} does not have any marks yet.`;

    const invalidMarks = student.marks.filter(mark => isInvalidMark(mark));
    if (invalidMarks.length) return `Not possible to count ${student.name}'s mark average`;

    const sum = student.marks.reduce((a, b) => a + b);
    const average = Math.round(sum / student.marks.length);
    return `${student.name} mark average is ${average}.`;
  });
}

function isInvalidMark(mark) {
  return mark === undefined || mark === null || typeof mark !== 'number';
}

const student = [
  {
    name: 'Petras',
    marks: [10, 2, 8, 4, 6],
  },
  {
    name: 'Maryte',
    marks: [4, 6, 8, 10],
  },
  {
    name: 'Jonas',
    marks: [8, 7, 5, 4, -1, 13, 8.7],
  },
  {
    name: 'Ona',
    marks: [],
  },
];


const results = marksAverages_forEvery_student(student);

// ***********************************
// DO NOT EDIT CODE BELOW THIS COMMENT
// ***********************************

console.assert(results[0] === 'Petras mark average is 6.', 'Neteisingai suskaiciuotas Petro pazymiu vidurkis.');

console.assert(results[1] === 'Maryte mark average is 7.', 'Neteisingai suskaiciuotas Marytes pazymiu vidurkis.');

console.assert(results[2] === 'Jonas mark average is 6.', 'Neteisingai suskaiciuotas Jono pazymiu vidurkis.');

console.assert(results[3] === 'Ona does not have any marks yet.', 'Neteisingai suskaiciuotas Onos pazymiu vidurkis.');