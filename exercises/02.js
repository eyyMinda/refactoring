console.clear();
/**
 * Should print notification for each student.
 * @param {*} list 
 */
function marksAverages_forEvery_student(students) {
  const result = [];

  for (let student of students) {
    let marks = student.marks;
    let sum = 0;
    let invalidMarks = 0;

    if (!marks || marks.length === 0) {
      result.push(`${student.name} does not have any marks yet.`);
      continue;
    }

    for (let j = 0; j < marks.length; j++) {
      if (typeof marks[j] !== 'number') {
        invalidMarks++;
      } else {
        sum += marks[j];
      }
    }

    if (invalidMarks) {
      result.push(`Not possible to count ${student.name} mark average.`);
    } else {
      let average = Math.round(sum / (marks.length - invalidMarks));
      result.push(`${student.name} mark average is ${average}.`);
    }
  }
  return result;
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