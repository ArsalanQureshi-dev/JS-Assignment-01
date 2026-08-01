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
console.log(students[0].marks)
console.log(students[1].atten)
console.log(students[3].marks)