// //Write a program to create a higher order  function .
var grades = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
];

// // Q1 Write a HOF function to display average of all students.
// // Hint : average(grades)('grade')
// // o/p :
// // Average of All Students 10.2
let isBoy = (student) => student.sex === "M";

let isGirl = (student) => student.sex === "F";

let getBoys = (grades) => grades.filter(isBoy);
let getGirls = (grades) => grades.filter(isGirl);

let average = (grades) =>
  grades.reduce((acc, curr) => acc + curr.grade, 0) / grades.length;

let classroomAverage = average(grades);
let boysAverage = average(getBoys(grades));
console.log("problem1");
console.log(classroomAverage);
console.log(boysAverage);

// Q2: Write a HOF function to display List of Boys.
// Hint : getGender(grades)('sex')('M')
// o/p:
// List of Boys
// [ { name: 'John', grade: 8, sex: 'M' },
//   { name: 'Bob', grade: 16, sex: 'M' },
//   { name: 'Johnny', grade: 2, sex: 'M' },
//   { name: 'Ethan', grade: 4, sex: 'M' },
//   { name: 'Donald', grade: 5, sex: 'M' } ]

const getGender = (data) => {
  const get = data.filter((data) => {
    return data.sex == "M";
  });
  console.log(get);
};
getGender(grades);

//   Q3: Write a HOF function to display Average  grade of Boys
// Hint : average(getGender(grades)('sex')('M'))('grade')
// o/p:
// Average grade of Boys - 7

// let isBoy = (student) => student.sex === "M";
// let getBoys = (grades) => grades.filter(isBoy);
// let average = (grades) =>
//   grades.reduce((acc, curr) => acc + curr.grade, 0) / grades.length;

// let boysAverage = average(getBoys(grades));
// console.log("problem3");
// console.log(boysAverage);

// // Q4: Write a HOF function to display List of Girls.
// // Hint : getGender(grades)('sex')('F')
// // o/p:
// // List of Girls
// [ { name: 'Sarah', grade: 12, sex: 'F' },
//   { name: 'Paula', grade: 18, sex: 'F' },
//   { name: 'Jennifer', grade: 13, sex: 'F' },
//   { name: 'Courtney', grade: 15, sex: 'F' },
//   { name: 'Jane', grade: 9, sex: 'F' } ]

// const getGender = (data) =>
// {   const get = data.filter((data) =>
//      {
//           return data.sex == "F";   });
//       console.log(get);
//     };
//        getGender(grades);

// Q5:  Write a HOF function to display Average  grade of Girls
// o/p:
// Average grade of Girls - 13.4
// let isGirl = (student) => student.sex === "F";
// let getGirls = (grades) => grades.filter(isGirl);
// let average = (grades) =>
//   grades.reduce((acc, curr) => acc + curr.grade, 0) / grades.length;

// let girlsAverage = average(getGirls(grades));
// console.log("problem3");
// console.log(girlsAverage);

// Q6 : Write a HOf function which will check from an object weather gender is M or F
//it return either true or false.

// Hint :  isGender(property)(genderType)(object)
//           eg:  isGender('sex')('M')(obj)
//           obj = { name: 'John', grade: 8, sex: 'M' } // true

// const displayJustify = (person,sex) => {
//     let result2 =person.map((element) => element.sex===sex ? {...element,justify:true}:{...element,justify:false});
//     console.log(result2);

//     };
// console.log("problem6");
// const display = displayJustify(grades, "F");
// console.log(display);

//   Q7 : Write a HOf function which will check from an object weather name starts v l4rlowith
//    'J' or not. It will check from an object weather /

// Hint : isGender(property)(genderType)(object)
// eg: isGender('sex')('M')(obj)
// obj = { name: 'John', grade: 8, sex: 'M' } // true

// const isGender = (obj, word) => {
//   const result = obj.map((obj) => {
//     if (obj.name.startsWith(word) == true) {
//       console.log("Starts with " + word);
//     } else {
//       console.log("Not starts with " + word);
//     }
//     console.log(result);
//   });
// };
// isGender(obj, "J");

// Q8 :  Write a HOF function to display List of all students starting with J "
// Hint : getSpecific(grades)('name')('J')
// o/p
// List of all students starting with J
// [ { name: 'John', grade: 8, sex: 'M' },
//   { name: 'Johnny', grade: 2, sex: 'M' },
//   { name: 'Jennifer', grade: 13, sex: 'F' },
//   { name: 'Jane', grade: 9, sex: 'F' } ]

// const findSpecificStartChar = (grades,ch) => {
//       var result = grades.filter((member) => {
//         return member.name.startsWith(ch);
//       });
//       console.log(result);
//     };
//    const start = findSpecificStartChar(grades,'J');
//    console.log(start);

// Q9 :Write a HOF function to display List of all students starting with J and
//gender is M
// o/p
//List of all students starting with J and gender is M
// [ { name: 'John', grade: 8, sex: 'M' },
//   { name: 'Johnny', grade: 2, sex: 'M' } ]

// const getSpecificNames = (data, word, sex) => {
//   const result = data.filter((data) => {
//     return data.name.startsWith(word);
//   });
//   const result1 = result.filter((data) => {
//     return data.sex == sex;
//   });
//   console.log(result1);
// };
// getSpecificNames(grades, "J", "M")

// Q10. Write a HOF function to find average of  List of all students starting with J and
//gender is M
// o/p
// Average of all students starting with J and gender is M
// 5

// const getSpecificNames = (data, word, sex) => {
//   const result = data.filter((data) => {
//     return data.name.startsWith(word);
//   });
//   const result1 = result.filter((data) => {
//     return data.sex == sex;
//   });
//   console.log(result1);

//   const average = result1.reduce((i, a) => {
//     return i + a.grade;
//   }, 0);
//   console.log(average / result1.length);
// };
// getSpecificNames(grades, "J", "M");
// const result3 = average(avg);
// console.log(result3);
