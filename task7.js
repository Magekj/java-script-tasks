// ==========================================
// 1. E-Commerce Product Filter
// ==========================================

async function productFilter() {

  let response = await fetch("https://fakestoreapi.com/products");

  let data = await response.json();

  let filteredProducts = data.filter((item) => {
    return item.price > 100 && item.category === "electronics";
  });

  filteredProducts.forEach((product) => {
    console.log(product.title);
    console.log(product.price);
  });

}

productFilter();


// ==========================================
// 2. Online Shopping Cart Total
// ==========================================

let cart = [
  {product:"Shoes", price:2000, qty:2},
  {product:"Watch", price:1500, qty:1},
  {product:"Bag", price:1000, qty:3}
];

let totalBill = cart.reduce((total, item) => {
  return total + (item.price * item.qty);
},0);

console.log("Total Bill :", totalBill);


// ==========================================
// 3. Employee Salary Dashboard
// ==========================================

let employees = [
  {name:"John", salary:25000},
  {name:"Sam", salary:50000},
  {name:"Ravi", salary:45000},
  {name:"Kumar", salary:30000}
];

let highSalary = employees
.filter((emp) => emp.salary > 40000)
.map((emp) => emp.name);

console.log(highSalary);


// ==========================================
// 4. Food Delivery App
// ==========================================

let hotels = [
  {hotel:"A2B", rating:4.1},
  {hotel:"KFC", rating:4.7},
  {hotel:"Dominos", rating:4.3}
];

let bestHotel = hotels.find((item) => item.rating > 4.5);

console.log(bestHotel);


// ==========================================
// 5. Student Pass/Fail System
// ==========================================

let marks = [45,67,89,90,34];

let allPassed = marks.every((mark) => mark >= 35);

console.log(allPassed);


// ==========================================
// 6. OTP Verification System
// ==========================================

let otpList = [1234,4567,7890,9876];

let enteredOtp = 4567;

console.log(otpList.includes(enteredOtp));


// ==========================================
// 7. Movie Booking Timer
// ==========================================

let count = 10;

let timer = setInterval(() => {

  console.log(count);

  count--;

  if(count < 0){
    clearInterval(timer);
    console.log("Booking Closed");
  }

},1000);


// ==========================================
// 8. Instagram Like Counter
// ==========================================

let likes = 0;

let likeCounter = setInterval(() => {

  likes++;

  console.log("Likes :", likes);

  if(likes === 10){
    clearInterval(likeCounter);
  }

},1000);


// ==========================================
// 9. Login Authentication
// ==========================================

let username = "admin";
let password = "12345";

if(username === "admin" && password === "12345"){
  console.log("Login Success");
}
else{
  console.log("Invalid Credentials");
}


// ==========================================
// 10. Weather App Simulation
// ==========================================

let internet = true;

let weatherPromise = new Promise((resolve, reject) => {

  if(internet){
    resolve("Weather Data");
  }
  else{
    reject("No Internet");
  }

});

weatherPromise
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.log(error);
});


// ==========================================
// 11. Amazon Product Search
// ==========================================

let products = [
  "black shirt",
  "blue jeans",
  "white shirt",
  "watch"
];

let shirtProducts = products.filter((item) => {
  return item.includes("shirt");
});

console.log(shirtProducts);


// ==========================================
// 12. YouTube Video Duration
// ==========================================

let videos = [10,20,30,40];

let totalTime = videos.reduce((total, video) => {
  return total + video;
},0);

console.log(totalTime);


// ==========================================
// 13. Swiggy Order Status
// ==========================================

let status = "Preparing";

switch(status){

  case "Placed":
    console.log("Order Placed Successfully");
    break;

  case "Preparing":
    console.log("Food is Preparing");
    break;

  case "Out for Delivery":
    console.log("Delivery Partner is Coming");
    break;

  case "Delivered":
    console.log("Order Delivered");
    break;

  default:
    console.log("Invalid Status");

}


// ==========================================
// 14. WhatsApp Chat Analyzer
// ==========================================

let chats = ["hi","hello","where","ok","bye"];

for(let i = 0; i < chats.length; i++){
  console.log(chats[i]);
}

console.log("Total Messages :", chats.length);


// ==========================================
// 15. Netflix Age Restriction
// ==========================================

let age = 20;

let result = age >= 18 ? "watch movie" : "access denied";

console.log(result);


// ==========================================
// 16. Flipkart Product Sorting
// ==========================================

let prices = [1200,450,9999,2500,700];

prices.sort((a,b) => a-b);

console.log(prices);


// ==========================================
// 17. Employee Attendance
// ==========================================

let attendance = ["present","absent","present"];

let attendanceCount = attendance.reduce((acc, item) => {

  acc[item] = (acc[item] || 0) + 1;

  return acc;

},{});

console.log(attendanceCount);


// ==========================================
// 18. Banking System
// ==========================================

let balance = 5000;

function deposit(amount){
  balance += amount;
  console.log("Deposited :", amount);
}

function withdraw(amount){

  if(amount <= balance){
    balance -= amount;
    console.log("Withdraw :", amount);
  }
  else{
    console.log("Insufficient Balance");
  }

}

function checkBalance(){
  console.log("Current Balance :", balance);
}

deposit(2000);
withdraw(1000);
checkBalance();


// ==========================================
// 19. Zomato Rating Checker
// ==========================================

let zomatoHotels = [4.5, 4.2, 2.8, 3.9];

let lowRating = zomatoHotels.some((rating) => rating < 3);

console.log(lowRating);


// ==========================================
// 20. Real API Product Table
// ==========================================

let allProducts = [];

async function fetchProducts(){

  let response = await fetch("https://fakestoreapi.com/products");

  let data = await response.json();

  allProducts = data;

  displayProducts(allProducts);

}

fetchProducts();

function displayProducts(products){

  let container = document.getElementById("productContainer");

  container.innerHTML = "";

  products.map((item) => {

    container.innerHTML += `
    
      <div class="card">

        <img src="${item.image}" />

        <h4>${item.title}</h4>

        <p>₹ ${item.price}</p>

        <button>Add To Cart</button>

      </div>
    
    `;

  });

}


// ==========================================
// 21. Small E-Commerce Logic
// ==========================================

// Search Product

document
.getElementById("searchInput")
.addEventListener("keyup",(e) => {

  let value = e.target.value.toLowerCase();

  let filtered = allProducts.filter((item) => {
    return item.title.toLowerCase().includes(value);
  });

  displayProducts(filtered);

});


// Sort Product

function sortProducts(){

  let sorted = [...allProducts].sort((a,b) => {
    return a.price - b.price;
  });

  displayProducts(sorted);

}