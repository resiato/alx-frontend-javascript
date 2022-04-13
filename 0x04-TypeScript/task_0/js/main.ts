interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student {
  firstName: "Paul",
  lastName: "Hayees",
  age: 20,
  location: "Atlanta",
}

const studentTwo: Student {
  firstName: "Sarah",
  lastName: "Georgina",
  age: 20,
  location: "Miami",
}

const studentList = [studentOne, studentTwo];
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((obj) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = obj.firstName;
  cellLocation.textContent = obj.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
