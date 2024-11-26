const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    if (!data) throw new Error('Cannot load the database');

    const lines = data.trim().split('\n');
    if (lines.length === 0) throw new Error('Cannot load the database');

    // Skip the header line
    const headers = lines[0].split(',');
    const students = lines.slice(1).filter(line => line.trim() !== '').map(line => line.split(','));

    console.log(`Number of students: ${students.length}`);

    // Count students in each field
    const fields = {};
    for (const student of students) {
      const field = student[student.length - 1]; // Assuming field is the last column
      const firstName = student[0]; // Assuming first name is the first column
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    }

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
