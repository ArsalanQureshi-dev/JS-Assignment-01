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

console.log("--------------------------------------------------");

console.log("Q2: Write a function toUpperCase(str) that returns the string in uppercase.");

function toUpperCase(str) {
  return str.toUpperCase();
}
console.log(toUpperCase("hello, world!"));

console.log("--------------------------------------------------");

console.log("Q3: Write a function getFirstCharacter(str) that returns the first character.");
function getFirstCharacter(str) {
  return str[0];
}
console.log(getFirstCharacter("Hello, World!"));

console.log("--------------------------------------------------");

console.log("Q4: Write a function getLastCharacter(str) that returns the last character.");
function getLastCharacter(str) {
  return str[str.length - 1];
}
console.log(getLastCharacter("Hello, World!"));

console.log("--------------------------------------------------");

console.log("Q5: Write a function isLongWord(word) that returns true if the word contains more than 5 characters.");
function isLongWord(word) {
  return word.length > 5;
}
console.log(isLongWord("JavaScript"));
console.log(isLongWord("Hello"));

console.log("============================================");
console.log("Level 4 — Small Problem Solving");
console.log("============================================");

console.log("Q1: Write a function calculateDiscount(price, discount) that returns the final price after applying the discount percentage.");
function calculateDiscount(price, discount) {
  const discountAmount = price * (discount / 100);
  return price - discountAmount;
}
console.log(calculateDiscount(1000, 20)); // Output: 800
console.log(calculateDiscount(50, 10));  // Output: 45

console.log("--------------------------------------------------");

console.log("Q2: Write a function calculateAge(birthYear, currentYear) that returns the person's age.");
function calculateAge(birthYear, currentYear) {
  return currentYear - birthYear;
}
console.log(calculateAge(1998, 2026)); 
console.log(calculateAge(2000, 2026)); 

console.log("--------------------------------------------------");

console.log("Q3: Write a function convertToMinutes(hours) that converts hours into minutes.");
function convertToMinutes(hours) {
  return hours * 60;
}
console.log(convertToMinutes(2)); 
console.log(convertToMinutes(0.5)); 

console.log("--------------------------------------------------");

console.log("Q4: Write a function getLargest(a, b, c) that returns the largest of three numbers.");
function getLargest(a, b, c) {
  return Math.max(a, b, c);
}
console.log(getLargest(5, 10, 3));
console.log(getLargest(1, 2, 3));

console.log("--------------------------------------------------");

console.log("Q5: Write a function calculator(a, b, operator). Example: calculator(10, 5, '+') should return 15, calculator(10, 5, '-') should return 5, calculator(10, 5, '*') should return 50, and calculator(10, 5, '/') should return 2.");
function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Invalid operator";
  }
}
console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 5, "/"));

console.log("============================================");
console.log("Bonus Challenges");
console.log("============================================");

console.log("Q1: Write a function countCharacters(str) that returns the number of characters in a string.");

function countCharacters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}
console.log(countCharacters("Hello, World!"));

console.log("--------------------------------------------------");

console.log("Q2: Create reverseString(str) that returns the reversed string.");
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello, World!"));

console.log("--------------------------------------------------");

console.log("Q3: Create countVowels(str) that returns the number of vowels.");

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Hello, World!")); // 3

console.log("--------------------------------------------------");

console.log("Q4: Create factorial(num).");

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); // 120

console.log("--------------------------------------------------");

console.log("Q5: Create isPalindrome(word) that checks whether a word reads the same backward.");
function isPalindrome(word) {
  const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedWord = cleanedWord.split("").reverse().join("");
  return cleanedWord === reversedWord;
}
console.log(isPalindrome("ahmed")); // true
console.log(isPalindrome("hello")); // false