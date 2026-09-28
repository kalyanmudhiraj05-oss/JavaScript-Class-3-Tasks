// Logical Operators

//1. Use && to check whether 10 > 5 and 20 > 15 are true.
console.log(10 > 5 && 20 > 15);

//2. Use && to check whether 10 > 15 and 20 > 10 are true.
console.log(10 > 15 && 20 > 10);

//3. Use || to check whether 10 > 20 or 15 > 10 is true.
console.log(10 > 20 || 15 > 10);

//4. Use || to check whether 5 > 10 or 20 < 15 is true.
console.log(5 > 10 || 20 < 15);

//5. Use ! to reverse the result of 10 > 5.
console.log(!(10 > 5));

//6. Use ! to reverse the result of 10 < 5.
console.log(!(10 < 5));

//7. Create two conditions using && and || and print the final result.
let a = 10;
let b = 20;

console.log(a < b && b > 15);
console.log(a > b || b > 15);

//8. Create three conditions using &&, ||, and ! together.
let x = 10;
let y = 20;
let z = 30;

console.log(x < y && y < z || !(x > z));


// Ternary Operator

//9. Create an age variable. If age is 18 or above, print Eligible.
let age = 26;

console.log(age >= 18 ? "Eligible" : "Not Eligible");

//10. Create a marks variable. If marks are 35 or above, print Pass.
let marks = 50;

console.log(marks >= 35 ? "Pass" : "Fail");

//11. Create a number variable. Check whether it is greater than 10.
let number = 15;

console.log(number > 10 ? "Greater than 10" : "Not greater than 10");

//12. Create a number variable. Check whether it is even or odd.
let number1 = 8;

console.log(number1 % 2 == 0 ? "Even" : "Odd");

//13. Create a salary variable. If salary is greater than 30000, print Good Salary.
let salary = 25000;

console.log(salary > 30000 ? "Good Salary" : "Low Salary");


// Concatenation & Template Strings

//14. Create three variables containing first name, last name, and city. Join them using +.
let firstName = "Kalyan";
let lastName = "Garige";
let city = "Hyderabad";

console.log(firstName + " " + lastName + " " + city);

//15. Create name and age variables and print them using concatenation.
let name = "Kalyan";
let age1 = 26;

console.log("My name is " + name + " and my age is " + age1);

//16. Create product, price, and brand variables and print them as one sentence using +.
let product = "Mobile";
let price = 25000;
let brand = "Redmi";

console.log("Product is " + product + ", Price is " + price + ", Brand is " + brand);

//17. Create variables for name, qualification, and company. Display using template string.
let name1 = "Kalyan";
let qualification = "MCA";
let company = "Stackly";

console.log(`My name is ${name1}, I completed ${qualification}, and I work at ${company}`);

//18. Create name, age, and city variables. Display using template string.
let name2 = "Kalyan";
let age2 = 26;
let city1 = "Hyderabad";

console.log(`My name is ${name2}, my age is ${age2}, and I live in ${city1}`);


// Type Casting - Implicit

//19. Add a string and a number. Print result and typeof.
let value1 = "10";
let value2 = 20;

console.log(value1 + value2);
console.log(typeof(value1 + value2));

//20. Add a number and a number. Print result and typeof.
let value3 = 10;
let value4 = 20;

console.log(value3 + value4);
console.log(typeof(value3 + value4));

//21. Add a number and true. Print result and typeof.
let value5 = 10;

console.log(value5 + true);
console.log(typeof(value5 + true));

//22. Add a number and null. Print result and typeof.
let value6 = 10;

console.log(value6 + null);
console.log(typeof(value6 + null));

//23. Add a string and true. Print result and typeof.
let value7 = "Hello";

console.log(value7 + true);
console.log(typeof(value7 + true));

//24. Add a string and an array. Print result and typeof.
let value8 = "Hello";
let fruits = ["Apple", "Mango"];

console.log(value8 + fruits);
console.log(typeof(value8 + fruits));

//25. Add a number and an object. Print result and typeof.
let value9 = 10;
let obj = {name: "Kalyan"};

console.log(value9 + obj);
console.log(typeof(value9 + obj));

//26. Create three different expressions using different data types and check their data types.
let result1 = "10" + 20;
let result2 = 10 + true;
let result3 = 10 + null;

console.log(result1, typeof(result1));
console.log(result2, typeof(result2));
console.log(result3, typeof(result3));


// Type Casting - Explicit

//27. Convert "100" into a number using Number().
let num1 = "100";

num1 = Number(num1);

console.log(num1);

//28. Convert "25" into a number and check its data type.
let num2 = "25";

num2 = Number(num2);

console.log(num2);
console.log(typeof(num2));

//29. Convert true into a number using Number().
let bool1 = true;

console.log(Number(bool1));

//30. Convert false into a number using Number().
let bool2 = false;

console.log(Number(bool2));

//31. Convert an empty string into a number using Number().
let empty = "";

console.log(Number(empty));

//32. Convert null into a number using Number().
let value10 = null;

console.log(Number(value10));

//33. Convert undefined into a number using Number().
let value11;

console.log(Number(value11));

//34. Convert "Hello" into a boolean using Boolean().
let text1 = "Hello";

console.log(Boolean(text1));

//35. Convert an empty string into a boolean using Boolean().
let text2 = "";

console.log(Boolean(text2));

//36. Convert 0, 1, and -1 into boolean values.
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));

//37. Convert an array into a boolean using Boolean().
let fruits1 = ["Apple", "Mango"];

console.log(Boolean(fruits1));

//38. Convert an object into a boolean using Boolean().
let student = {
    name: "Kalyan",
    age: 26
};

console.log(Boolean(student));


// Conditional Statements

//39. Create an age variable. Using if, print Eligible if age is 18 or above.
let age3 = 26;

if (age3 >= 18) {
    console.log("Eligible");
}

//40. Create an age variable. Using if else, print whether the person is eligible to vote.
let age4 = 26;

if (age4 >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}

//41. Create a marks variable and use if else to print Pass or Fail.
let marks1 = 50;

if (marks1 >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

//42. Create a time variable and use else if.
let time = 15;

if (time >= 1 && time <= 6) {
    console.log("Early Morning");
} else if (time >= 7 && time <= 12) {
    console.log("Morning");
} else if (time >= 13 && time <= 17) {
    console.log("Afternoon");
} else if (time >= 18 && time <= 19) {
    console.log("Evening");
} else if (time >= 20 && time <= 24) {
    console.log("Night");
} else {
    console.log("Invalid Time");
}

//43. Create a temperature variable.
let temperature = 30;

if (temperature > 35) {
    console.log("Hot");
} else if (temperature >= 20 && temperature <= 35) {
    console.log("Normal");
} else {
    console.log("Cold");
}

//44. Create a nested if program.
let age5 = 25;
let height = 175;
let weight = 65;

if (age5 >= 18) {
    if (height >= 170) {
        if (weight >= 60) {
            console.log("Eligible");
        }
    }
}


// Switch Statement

//45. Create a trafficLight variable and use switch.
let trafficLight = "red";

switch (trafficLight) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Wait");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Traffic Light");
}

//46. Create a day variable and use switch.
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Monday");
        break;

    case "Tuesday":
        console.log("Tuesday");
        break;

    case "Wednesday":
        console.log("Wednesday");
        break;

    case "Thursday":
        console.log("Thursday");
        break;

    case "Friday":
        console.log("Friday");
        break;

    case "Saturday":
        console.log("Saturday");
        break;

    case "Sunday":
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}

//47. Create a choice variable and use switch.
let choice = 2;

switch (choice) {
    case 1:
        console.log("Start");
        break;

    case 2:
        console.log("Settings");
        break;

    case 3:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}


// Loops

//48. Use a for loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//49. Use a while loop to print numbers from 10 to 1.
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

//50. Create an array of fruits and use for of to print every fruit.
// Create an object and use for in to print every key and value.

let fruits2 = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

for (let fruit of fruits2) {
    console.log(fruit);
}

let employee = {
    name: "Kalyan",
    role: "Java Full Stack Developer",
    experience: 1
};

for (let key in employee) {
    console.log(key, employee[key]);
}