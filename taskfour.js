// ===============================
// Task 1 - Smart Attendance Checker
// ===============================

function checkExamEligibility(attendance, feesPaid) {
    if (attendance >= 75 && feesPaid) {
        console.log("Allowed for Exam");
    } else {
        console.log("Not Allowed");
    }
}

checkExamEligibility(80, true);


// ===============================
// Task 2 - Mobile Password Strength Checker
// ===============================

let password = "Abc12345";

let hasUppercase = /[A-Z]/.test(password);
let hasNumber = /[0-9]/.test(password);

if (password.length >= 8 && hasUppercase && hasNumber) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}


// ===============================
// Task 3 - Find Second Largest Number
// ===============================

let numbers = [10, 50, 80, 20, 90, 70];

let largest = 0;
let secondLargest = 0;

for (let num of numbers) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log("Second Largest Number:", secondLargest);


// ===============================
// Task 4 - Bus Seat Booking System
// ===============================

let seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let bookedSeats = [];

function bookSeat(seatNumber) {

    if (bookedSeats.includes(seatNumber)) {
        console.log("Seat Already Booked");
    } else {
        bookedSeats.push(seatNumber);
        console.log("Seat Booked Successfully");
    }
}

bookSeat(3);
bookSeat(3);


// ===============================
// Task 5 - ATM Cash Withdraw Logic
// ===============================

function withdraw(balance, amount) {

    if (amount > balance || balance - amount < 1000) {
        return "Insufficient Balance";
    } else {
        return "Withdraw Successful";
    }
}

console.log(withdraw(10000, 9500));


// ===============================
// Task 6 - Product Search Engine
// ===============================

let products = ["iphone", "samsung", "realme", "oppo"];

let searchProduct = "realme";
let found = false;

for (let item of products) {
    if (item.toLowerCase() === searchProduct.toLowerCase()) {
        found = true;
    }
}

if (found) {
    console.log("Product Found");
} else {
    console.log("Product Not Found");
}


// ===============================
// Task 7 - Voting Eligibility System
// ===============================

let age = 20;
let hasVoterId = true;
let citizenship = "Indian";

if (age >= 18) {

    if (hasVoterId && citizenship === "Indian") {
        console.log("Eligible to Vote");
    } else {
        console.log("Not Eligible to Vote");
    }

} else {
    console.log("Not Eligible to Vote");
}


// ===============================
// Task 8 - Online Food Order Bill
// ===============================

function calculateBill(foodPrice, gst, deliveryCharge, discount) {

    let gstAmount = (foodPrice * gst) / 100;

    let total =
        foodPrice +
        gstAmount +
        deliveryCharge -
        discount;

    return total;
}

let totalBill = calculateBill(400, 5, 50, 20);

console.log("Total Bill : ₹" + totalBill);


// ===============================
// Task 9 - Reverse Word Without reverse()
// ===============================

let word = "javascript";
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

console.log(reversedWord);


// ===============================
// Task 10 - Mini Instagram Like System
// ===============================

let isLiked = false;
let totalLikes = 0;

function toggleLike() {

    isLiked = !isLiked;

    isLiked ? totalLikes++ : totalLikes--;

    console.log(isLiked ? "Liked ❤️" : "Like 🤍");

    console.log("Total Likes:", totalLikes);
}

toggleLike();
toggleLike();