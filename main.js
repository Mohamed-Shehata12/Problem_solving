// المسالة الثانيه
// Write a function that takes the base and height of a triangle and return its area
function area(height, width) {
  return (1 / 2) * height * width;
}
console.log(area(10, 10));

/************************************************************************************************************* */

//المسالة الثالثة
// Create a function that takes the age in years and returns the age in days and print it on console
function old(years) {
  var day = years * 365;
  console.log("The Age in Days is :  " + day);
}
old(21);

/************************************************************************************************************* */

//المسالة الرابعة
// Create a function takes two numbers and return thier sum Create a function takes two numbers and return thier sum
function sum(num1, num2) {
  var total = num1 + num2;
  console.log("The Total Of Number is : " + total);
}
sum(5, 5);

/************************************************************************************************************* */

//المسالة الخامسة
//Create a function that takes an array containing only numbers and return the first element
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function num(arr1) {
  console.log("The First Number : " + arr1);
}
num(arr1[0]);

/************************************************************************************************************* */

//المسالة السادسة
// Create a function show your name in HTML document
var name1 = document.getElementById("h");
function getName(names) {
  name1.innerHTML = " My Name Is : " + names;
}
getName("MOHAMED SHEHATA");

/************************************************************************************************************* */

//المسالة السابعة
//Write a function that takes an integer hours and converts it to second
function second(our) {
  return our * 60 * 60;
}
console.log(second(1));

/************************************************************************************************************* */

//المسالة الثامنة
//Given four numbers, return true if the sum of both numbers is more than 350. Otherwise return false.

function sumTotal(num1, num2, num3, num4) {
  var total = num1 + num2 + num3 + num4;
  if (total > 350) {
    return true;
  } else if (total < 350) {
    return false;
  } else {
    return "The Total Is Equals";
  }
}
document.write(sumTotal(0, 10, 300, 40));

/************************************************************************************************************* */

//المسالة التاسعة
//مل فانكشن بتاخد رقم لو بيساوي صفر رجع true عكس كدا بيرجع fals
function returnes(num1) {
  if (num1 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(returnes(0));

/************************************************************************************************************* */

//المسالة العاشرة
//عمل فانكشن بتاخد رقمين وتجيب باقي القسمة بتاعهم وليس القسمة (مختلفة)
function restDevision(num1, num2) {
  return num1 % num2;
}
console.log(restDevision(23, 2));

/************************************************************************************************************* */

//المسالة الحادية عشر
//Find the largest of two number Make a function take two parameters num1 and num2 and print the greater number or if they are equal print they are equal.
function twoNumber(num1, num2) {
  if (num1 > num2) {
    return "The Largest Is : " + num1;
  } else if (num2 > num1) {
    return "The Largest Is : " + num2;
  } else {
    return "The Numbers Is Equals";
  }
}
console.log(twoNumber(20, 20));

/************************************************************************************************************* */

//المسالة الثانية عشر
//Check if input variable is a number or not
function check(varia) {
  if (typeof varia === "number") {
    return "The Variable Is A Number";
  } else {
    return "The Variable Is A Not Number";
  }
}
console.log(check(1));
