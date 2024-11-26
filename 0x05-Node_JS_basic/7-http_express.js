const fs = require('fs');

function countStudents(databasePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(databasePath, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
            } else {
                const lines = data.split('\n');
                const students = lines.filter(line => line.trim() !== '').slice(1);
                const result = { numberOfStudents: students.length, fields: {} };

                students.forEach(student => {
                    const [firstName, , field] = student.split(',');
                    if (!result.fields[field]) {
                        result.fields[field] = [];
                    }
                    result.fields[field].push(firstName);
                });

                resolve(result);
            }
        });
    });
}

module.exports = countStudents;
