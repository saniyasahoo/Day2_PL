let objects:

const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 22 }
];

---

// forEach()

students.forEach(student => {
  console.log(student.name);
  if (student.name === "Alice") {
    student.name = "Saniya";
  }
});


---

// map()

const updatedStudents = students.map(student => {
  if (student.name === "Alice") {
    return { ...student, name: "Saniya" };
  }
  return student;
});
console.log(updatedStudents);


---
// filter() 
const withoutAlice = students.filter(student => student.name !== "Alice");
console.log(withoutAlice);

---

//reduce() 

const namesList = students.reduce((acc, student) => {
  if (student.name === "Alice") {
    student.name = "Saniya"; // modifying inside reduce (not recommended in pure functions)
  }
  acc.push(student.name);
  return acc;
}, []);
console.log(namesList);


---

//find() 

const alice = students.find(student => student.name === "Alice");
if (alice) {
  alice.name = "Saniya";
}
console.log(students);


---
//some()

const hasAlice = students.some(student => student.name === "Alice");
console.log("Contains Alice?", hasAlice);

---

//every()

const allAbove18 = students.every(student => student.age > 18);
console.log("All students are older than 18?", allAbove18);
