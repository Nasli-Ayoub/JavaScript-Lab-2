let number = 4;

if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

let day = 6; // You can change this number to test different cases

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

for (let i = 1; i <= 5; i++) {
    console.log(i); // Prints the value of i
}
let i = 1;

while (i <= 5) {
  console.log(i); // Prints the value of i
  i++; // Increment i manually
}
let j = 1;

do {
  console.log(j); // Prints the value of j
  j++; // Increment j
} while (j <= 5);

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      break; // Stop the loop when i is 3
    }
    console.log(i);
}
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue; // Skip the current iteration when i is 3
    }
    console.log(i);
}

let globalVar = "I'm global!"; // Global variable

function scopeExample() {
  let localVar = "I'm local!"; // Local variable
  console.log(globalVar); // Accessing globalVar inside the function
  console.log(localVar);  // Accessing localVar inside the function
}

scopeExample(); // Call the function

console.log(globalVar);  // Accessing globalVar outside the function
console.log(localVar);   // Trying to access localVar outside the function (this will cause an error)