// ===============================
// Task 1 - Employee Bonus Filter
// ===============================

let employees = [
  {name:"john", salary:200000},
  {name:"rahul", salary:500000},
  {name:"siva", salary:700000}
];

employees
.filter(emp => emp.salary > 300000)
.map(emp => console.log("Congrats " + emp.name));


// ===============================
// Task 2 - Shopping Cart Total
// ===============================

let cart = [1200, 3400, 500, 999];

let total = cart.reduce((sum, item) => sum + item, 0);

console.log(total);


// ===============================
// Task 3 - Login Username Formatter
// ===============================

let user = "naveen";

let formattedUser =
user.slice(0,1).toUpperCase() + user.slice(1);

console.log(formattedUser);


// ===============================
// Task 4 - OTP Checker
// ===============================

let otp = "560890";

console.log(
otp.includes("0") ? "Valid OTP" : "Invalid OTP"
);


// ===============================
// Task 5 - Food Delivery App
// ===============================

let orders = ["burger","pizza"];

orders.push("shawarma");

orders.pop();

console.log(orders);


// ===============================
// Task 6 - Attendance Checker
// ===============================

let marks1 = [40,50,70,80];

let result1 = marks1.every(mark => mark >= 35);

console.log(result1);


// ===============================
// Task 7 - Find VIP Customer
// ===============================

let customer = [
  {name:"arun", purchase:5000},
  {name:"vijay", purchase:15000},
  {name:"surya", purchase:25000}
];

let vip = customer.find(cust => cust.purchase > 10000);

console.log(vip.name);


// ===============================
// Task 8 - Reverse Chat Message
// ===============================

let msg = "hello";

let reverseMsg =
msg.split("").reverse().join("");

console.log(reverseMsg);


// ===============================
// Task 9 - Remove Duplicate Product
// ===============================

let products = ["tv","laptop","mobile","watch"];

console.log(products.indexOf("mobile"));


// ===============================
// Task 10 - Student Rank Sort
// ===============================

let marks2 = [99,45,12,67,89];

marks2.sort((a,b) => a - b);

console.log(marks2);


// ===============================
// Task 11 - Movie Search
// ===============================

let movies1 = ["Jailer","Leo","Vikram"];

let movieCheck =
movies1.some(movie => movie === "Leo");

console.log(movieCheck);


// ===============================
// Task 12 - Hide Mobile Number
// ===============================

let num = "6383366774";

console.log(num.slice(-4));


// ===============================
// Task 13 - Online Exam Result
// ===============================

let mark = 78;

console.log(mark >= 35 ? "Pass" : "Fail");


// ===============================
// Task 14 - Cab Booking Price
// ===============================

function totalFare(baseFare, extraKm) {
  return baseFare + extraKm;
}

console.log(totalFare(100, 50));


// ===============================
// Task 15 - Instagram Hashtag Generator
// ===============================

let tag = "web developer";

console.log(tag.replaceAll(" ", "_"));


// ===============================
// Task 16 - Netflix Kids Content
// ===============================

let movies2 = [
  {name:"A", age:13},
  {name:"B", age:18},
  {name:"C", age:10}
];

movies2
.filter(movie => movie.age < 18)
.forEach(movie => console.log(movie.name));


// ===============================
// Task 17 - E-commerce Product Search
// ===============================

let product = "iphone";

console.log(product.startsWith("i"));


// ===============================
// Task 18 - WhatsApp Group Names
// ===============================

let groups = ["office","friends","family"];

groups.forEach((group, index) => {
  console.log((index + 1) + " " + group);
});


// ===============================
// Task 19 - Salary Highest Finder
// ===============================

let salary = [20000,50000,70000,10000];

let highest =
salary.reduce((max, item) =>
item > max ? item : max
);

console.log(highest);


// ===============================
// Task 20 - Password Security Checker
// ===============================

let password = "navi@123";

let strongPassword =
password.includes("@") && password.length >= 8;

console.log(
strongPassword
? "Strong Password"
: "Weak Password"
);