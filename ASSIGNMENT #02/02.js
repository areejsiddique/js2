// QUESTION 01

// function add(a){
//     return function(b){
//         console.log(a+b);
//     }
// }
// let result = add(5);
// result(5);

//QUESTION 02

// function Array(arr, value) {
//     if (arr.length === 0) {
//         return false;
//       } else if (arr.length === value) {
//       return true;
//     } else {
//       return Array(arr.slice(1), value);
//     }
//   }
//   const arr = [1, 2, 3, 4, 5];
//   console.log(Array(arr, 3)); 
  
// QUESTION 03

// function newPara(text){
//     let myPara = document.getElementById("my-para");
//     myPara.textContent =text; 
// }
// newPara("This is new Paragraph!!");

// QUESTION 04

// function listItem(text){
//        let newList = document.getElementById("new-list");
//        newList.textContent = text;
//   }
//   listItem("new item");

// QUESTION 05

// let myPara = document.getElementById("my-para");
// myPara.innerHTML = "<b>Pakistan</b>";
// function para(){
//     let color1 = myPara.style.backgroundColor ="white";
//     let color2 = myPara.style.color="red";
//     console.log(color1,color2);
// }
// para();

// QUESTION 06

// function LocalStorage(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }
//   const myObj = { name: "areej", age: 20 };
//   LocalStorage("myKey", myObj);
//   const savedObj = JSON.parse(localStorage.getItem("myKey"));
//   console.log(savedObj); 
 
// QUESTION 07

// function LocalStorage(key) {
//     const item = localStorage.getItem(key);
//     return item ? JSON.parse(item) : null;
//   }
//   const myObj = LocalStorage('myKey');
//   console.log(myObj);
    
// QUESTION 08
            
// let prevstudents = localStorage.getItem("students");
// let students = prevstudents ? JSON.parse(prevstudents) :[];
// function providestudents(){
//     let std = {
//      name : prompt("enter name"),
//      rollno : +prompt("enter rollno" ),
//      coursename : prompt("enter coursename")
//     };
//     students.push(std);
//     console.log (students);

//     let stringify = JSON.stringify(students);
//     localStorage.setItem("students", stringify);
// }

  