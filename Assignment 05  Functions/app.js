// =============================================
// Level 1 — Very Basic Functions
// =============================================

console.log("Q1: Write a function sayHello() that prints 'Hello World'");

function sayHello() {
  console.log("Hello World");
};
sayHello();

console.log("--------------------------------------------------");

console.log("Q2: Write a function showName(name) that prints the given name.");
function showName(name) {
  console.log(name);
}
showName("Usman");

console.log("--------------------------------------------------");

console.log("Q3: Write a function add(a, b) that returns the sum of two numbers.");
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));

console.log("--------------------------------------------------");

console.log("Q4: Write a function subtract(a, b) that returns the difference between two numbers.");

function subtract(a, b) {
  return a - b;
}
console.log(subtract(10, 4));

console.log("--------------------------------------------------");

console.log("Q5: Write a function multiply(a, b) that returns the multiplication of two numbers.");

function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 4));

console.log("--------------------------------------------------");

console.log("Q6: Write a function square(num) that returns the square of a number.");
function square(num) {
  return num * num;
}
console.log(square(5));

console.log("--------------------------------------------------");

console.log("Q7: Write a function cube(num) that returns the cube of a number.");
function cube(num) {
  return num * num * num;
}
console.log(cube(2));

console.log("--------------------------------------------------");

console.log("Q8: Write a function getFullName(firstName, lastName) that returns the full name.");
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(getFullName("Usman", "Ali"));

console.log("============================================");
console.log("Level 2 — Functions + Conditions");
console.log("============================================");

console.log("Q1: Write a function isEven(num) that returns true if the number is even and false otherwise.");

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(4));
console.log(isEven(5));
console.log("--------------------------------------------------");

console.log("Q2: Write a function isPositive(num) that checks whether a number is positive, negative, or zero.");

function isPositive(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(isPositive(2));
console.log(isPositive(-3));
console.log("--------------------------------------------------");

console.log("Q3: Write a function findGreater(a, b) that returns the greater number.");
function findGreater(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(findGreater(10, 5));

console.log("--------------------------------------------------");

console.log("Q4: Write a function canVote(age) that returns 'Eligible' if age is 18 or above, otherwise 'Not Eligible'.");
function canVote(age) {
  if (age >= 18) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
}
console.log(canVote(20));
console.log(canVote(17));

console.log("--------------------------------------------------");

console.log("Q5: Write a function checkNumber(num) that returns 'Even' or 'Odd'.");
function checkNumber(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkNumber(4));
console.log(checkNumber(5));

console.log("--------------------------------------------------");

console.log("Q6: 6. Write a function `getGrade(marks)` using these rules: (80+ → A, 70+ → B, 60+ → C, 50+ → D, Below 50 → Fail)");

function getGrade(marks) {
  if (marks >= 80) {
    return "A"; 
  } else if (marks >= 70) {
    return "B";
  } else if (marks >= 60) {
    return "C";
  } else if (marks >= 50) {
    return "D";
  } else {
    return "Fail";
  }
}
console.log(getGrade(85));
console.log(getGrade(75));
console.log(getGrade(65));
console.log(getGrade(55));
console.log(getGrade(45));

console.log("--------------------------------------------------");

console.log("Q7: Write a function isDivisibleBy5(num) that returns true if the number is divisible by 5.");
function isDivisibleBy5(num) {
  return num % 5 === 0;
}
console.log(isDivisibleBy5(10));
console.log(isDivisibleBy5(7));

console.log("============================================");
console.log("Level 3 — Functions + Strings");
console.log("============================================");

console.log("Q1: Write a function getLength(str) that returns the length of a string.");
function getLength(str) {
  return str.length;
}
console.log(getLength("Hello, World!"));
