console.clear();
/**
 * Should print notification for each student.
 * @param {*} list 
 */
function marksAverages_forEvery_student(list) {
    const notifications = [];
    for (var j = list.length; j != 0;) {
        var stud = list[list.length - j--];

        if (stud['name'] == 'Maryte') {
            let i = 0;
            var maryteAverage = 0;
            for (; i < stud['marks'].length; i++) {
                // should be some sort of validation...
                // can not remember what...
                if (true) {
                    let m = stud['marks'][i];
                    maryteAverage += m;
                }
            }
            maryteAverage /= stud['marks'].length;
            // console.log(`${stud['name']} mark average is ${maryteAverage}.`);
            notifications.push(`${stud['name']} mark average is ${maryteAverage}.`);
        }

        if (stud.name === 'Jonas') {
            let Count = stud.marks.length;
            let Sum = 0;
            while (Count) {
                if (stud.marks[--Count] <= 10 && stud.marks[Count] % 1 == 0 && stud.marks[Count] > 0) {
                    Sum = Sum + stud.marks[Count];
                }
            }
            // console.log(`${stud.name} mark average is ${Sum / 4}.`);
            notifications.push(`${stud.name} mark average is ${Sum / 4}.`);
        }

        switch (stud.name) {
            case 'Petras':
                notifications.push(`${stud.name} mark average is ${stud.marks.reduce((t, m) => t + m) / stud.marks.length}.`);
                // console.log(`${stud.name} mark average is ${stud.marks.reduce((t, m) => t + m) / stud.marks.length}.`);
                break;

            default:
                let s = 0;
                for (const m of stud['marks']) {
                    s += m / stud.marks.length;
                }
                notifications.push(`${stud.name} mark average is ${s}.`);
                // console.log(`${stud.name} mark average is ${s}.`);
                break;
        }
    }

    return notifications;
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
