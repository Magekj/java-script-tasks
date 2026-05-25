let output = document.getElementById("output");

function showTask(title,data){

  output.innerHTML += `
    <div class="task">
      <h2>${title}</h2>
      <pre>${data}</pre>
    </div>
  `;
}



// =====================================
// Task 1 — Spread Operator
// =====================================

let frontEnd = ["HTML","CSS"];

let backEnd = ["Node","MongoDB"];

let mergedArray = [...frontEnd,...backEnd];

showTask("Task 1 — Spread Operator",
JSON.stringify(mergedArray));



// =====================================
// Task 2 — Copy Array
// =====================================

let original = [1,2,3];

let copied = [...original];

copied.push(4);

showTask("Task 2 — Copy Array",
`
Original Array : ${original}

Copied Array : ${copied}
`);



// =====================================
// Task 3 — Object Merge
// =====================================

let student1 = {
  name : "Rahul"
};

let student2 = {
  role : "Developer"
};

let mergedObject = {
  ...student1,
  ...student2
};

showTask("Task 3 — Object Merge",
JSON.stringify(mergedObject,null,2));



// =====================================
// Task 4 — Rest Operator
// =====================================

function total(a,b,...rest){

  return `
A Value : ${a}

B Value : ${b}

Remaining Values : ${rest}

Remaining Count : ${rest.length}
  `;
}

showTask("Task 4 — Rest Operator",
total(1,2,3,4,5,6,7,8));



// =====================================
// Task 5 — Array Destructuring
// =====================================

let colors = ["red","green","blue","yellow"];

let [c1,c2,c3,c4] = colors;

showTask("Task 5 — Array Destructuring",
`Blue Color : ${c3}`);



// =====================================
// Task 6 — Nested Array Destructuring
// =====================================

let data = [1,[2,[3,[4]]]];

let [a,[b,[c,[d]]]] = data;

showTask("Task 6 — Nested Array Destructuring",
`${a} ${b} ${c} ${d}`);



// =====================================
// Task 7 — Object Destructuring
// =====================================

let mobile = {
  brand : "Samsung",
  price : 20000,
  color : "black"
};

let {brand,color} = mobile;

showTask("Task 7 — Object Destructuring",
`${brand} ${color}`);



// =====================================
// Task 8 — push() & pop()
// =====================================

let numbers = [1,2,3];

numbers.push(4,5,6);

numbers.pop();

showTask("Task 8 — push() & pop()",
numbers);



// =====================================
// Task 9 — shift() & unshift()
// =====================================

let fruits = ["banana","orange"];

fruits.unshift("apple");

fruits.shift();

showTask("Task 9 — shift() & unshift()",
fruits);



// =====================================
// Task 10 — splice()
// =====================================

let arr1 = [1,2,30,40,5,6];

arr1.splice(2,2,3,4);

showTask("Task 10 — splice()",
arr1);



// =====================================
// Task 11 — concat()
// =====================================

let a1 = [1,2];

let b1 = [3,4];

let result = a1.concat(b1,[5,6]);

showTask("Task 11 — concat()",
result);



// =====================================
// Task 12 — slice()
// =====================================

let marks = [10,20,30,40,50,60];

let extracted = marks.slice(2,5);

showTask("Task 12 — slice()",
extracted);



// =====================================
// Task 13 — flat()
// =====================================

let nest = [1,[2,[3,[4,[5]]]]];

let flatArray = nest.flat(Infinity);

showTask("Task 13 — flat()",
flatArray);



// =====================================
// Task 14 — fill()
// =====================================

let arr2 = [1,2,3,4,5];

arr2.fill("done",3);

showTask("Task 14 — fill()",
arr2);



// =====================================
// Task 15 — includes()
// =====================================

let values = [10,20,30,40];

showTask("Task 15 — includes()",
`
20 Exists : ${values.includes(20)}

100 Exists : ${values.includes(100)}
`);



// =====================================
// Task 16 — indexOf()
// =====================================

let arr3 = [1,2,3,4,3,2];

showTask("Task 16 — indexOf()",
`
First Index Of 3 : ${arr3.indexOf(3)}

First Index Of 2 : ${arr3.indexOf(2)}
`);



// =====================================
// Task 17 — lastIndexOf()
// =====================================

let arr4 = [1,2,3,4,3,2];

showTask("Task 17 — lastIndexOf()",
`
Last Index Of 3 : ${arr4.lastIndexOf(3)}

Last Index Of 2 : ${arr4.lastIndexOf(2)}
`);



// =====================================
// Task 18 — sort()
// =====================================

let nums = [100,2,55,1,9];

let wrongSort = [...nums].sort();

let correctSort = [...nums].sort((a,b)=>a-b);

showTask("Task 18 — sort()",
`
Wrong Sort : ${wrongSort}

Correct Sort : ${correctSort}
`);



// =====================================
// Task 19 — reverse()
// =====================================

let letters = ["a","b","c","d"];

letters.reverse();

showTask("Task 19 — reverse()",
letters);



// =====================================
// Task 20 — Student Management
// =====================================

let students = ["Rahul","Ajay","Kumar"];

students.push("Naveen");

students.splice(1,1);

students.splice(1,1,"Arun");

students.reverse();

showTask("Task 20 — Student Management",
students);



// =====================================
// Task 21 — Shopping Cart
// =====================================

let cart = ["Shoes","Watch","Phone"];

cart.push("Laptop");

cart.splice(1,1);

showTask("Task 21 — Shopping Cart",
`
Phone Exists : ${cart.includes("Phone")}

Total Cart Items : ${cart.length}

Cart : ${cart}
`);



// =====================================
// Task 22 — Employee Database
// =====================================

let employee = {
  name : "Naveen",
  role : "Web Developer",
  salary : "5LPA"
};

let {name,role,salary} = employee;

let copiedEmployee = {
  ...employee
};

copiedEmployee.salary = "8LPA";

showTask("Task 22 — Employee Database",
`
Name : ${name}

Role : ${role}

Salary : ${salary}

Original Salary : ${employee.salary}

Copied Salary : ${copiedEmployee.salary}
`);



// =====================================
// Task 23 — Custom Function
// =====================================

function company(name,...skills){

  return `
Employee Name : ${name}

Skills : ${skills}

Total Skills : ${skills.length}
  `;
}

showTask("Task 23 — Custom Function",
company("Naveen","HTML","CSS","JS","React"));



// =====================================
// Task 24 — Array Analyzer
// =====================================

let data1 = [1,2,3,4,5,6,7,8,9,10];

let firstFive = data1.slice(0,5);

let reverseArray = [...data1].reverse();

showTask("Task 24 — Array Analyzer",
`
First 5 Values : ${firstFive}

Reversed Array : ${reverseArray}

7 Exists : ${data1.includes(7)}

Index Of 10 : ${data1.indexOf(10)}
`);



// =====================================
// Task 25 — Complete Challenge
// =====================================

let users = [
  {name:"Rahul",role:"Developer"},
  {name:"Ajay",role:"Designer"},
  {name:"Kumar",role:"Tester"}
];

users.push({name:"Naveen",role:"Manager"});

users.pop();

let extraUsers = [
  {name:"Arun",role:"HR"},
  {name:"Vijay",role:"Support"}
];

let finalUsers = [...users,...extraUsers];

let names = finalUsers.map(user => user.name);

finalUsers.reverse();

showTask("Task 25 — Complete Challenge",
`
User Names : ${names}

Reversed Users :

${JSON.stringify(finalUsers,null,2)}
`);