interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Osei",
  lastName: "Yeboah",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Richlove",
  lastName: "Ayaba",
  age: 22,
  location: "San Francisco"
};

const studentsList: Student[] = [student1, student2];

// Create table and render
const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

document.body.appendChild(table);
