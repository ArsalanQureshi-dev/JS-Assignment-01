// ============================================
// Q1 array

var colors = ["Red", "Blue", "Green", "Yellow"];
console.log(colors[0]);
console.log(colors[3]);
colors.splice(1,1 ,"black" )
console.log(colors);

// ============================================
// Q2 Object

var student = {
  name: "Ali",
  age: 20,
  city: "Karachi"
};
console.log(student.name);
console.log(student.city);
console.log(student.city="Lahore");
console.log(student);

//  ============================================
// Q3 Array of Objects

var students = [
  {
      name: "Ali",
      marks: 70,
      atten: true
  },
  {
      name: "Ahmed",
      marks: 50,
      atten: false
  },
  {
      name: "Zubair",
      marks: 90,
      atten: true
  }
];
console.log(students[0].marks);
console.log(students[1].atten);
console.log(students[2].marks = 95);
console.log(students[1].atten = true);
console.log(students);

// //  ============================================
// Q4. Loop

// Using the same `students` array:
// - Print all student names using a `for` loop.
// - Print all student marks using a `for` loop.
// - Print all student details in this format:
var students = [
  {
      name: "Ali",
      marks: 70,
      atten: true
  },
  {
      name: "Ahmed",
      marks: 50,
      atten: false
  },
  {
      name: "Zubair",
      marks: 95,
      atten: true
  }
];

for (var i = 0; i < students.length; i++) {
  console.log(students[i].name + " - " + students[i].marks + " - " + students[i].atten);
}

// Bonus Question ⭐

// Using the same `students` array:
// - Find the total marks of all students.
// - Find the average marks.
// - Increase every student's marks by `5`.
// - Print the updated array

var students = [
  {
      name: "Ali",
      marks: 70,
      atten: true
  },
  {
      name: "Ahmed",
      marks: 50,
      atten: false
  },
  {
      name: "Zubair",
      marks: 95,
      atten: true
  }
];

var totalMarks = 0;
for (var i = 0; i < students.length; i++) {
  totalMarks = totalMarks + students[i].marks;
}
var averageMarks = totalMarks / students.length;
console.log("Total Marks: " + totalMarks);
console.log("Average Marks: " + averageMarks);

for (var i = 0; i < students.length; i++) {
  students[i].marks += 5;
}
console.log(students);