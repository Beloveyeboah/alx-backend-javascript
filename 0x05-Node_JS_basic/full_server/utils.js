import fs from 'fs/promises';

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const students = {};
    const lines = data.split('\n').slice(1); // assuming the first line is header

    for (const line of lines) {
      if (line.trim()) {
        const [firstname, field] = line.split(',');
        if (!students[field]) students[field] = [];
        students[field].push(firstname);
      }
    }

    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
