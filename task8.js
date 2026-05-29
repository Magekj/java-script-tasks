let apiLink = "https://fakestoreapi.com/products";

function getProducts() {

  fetch(apiLink)

    .then((response) => response.json())

    .then((products) => {

      console.log(products);

      // ==========================
      // Task 1 - Print All Products
      // ==========================

      console.log("TASK 1");

      products.forEach((product) => {
        console.log("Title :", product.title);
        console.log("Price :", product.price);
      });


      // ==========================
      // Task 2 - Print Product Titles
      // ==========================

      console.log("TASK 2");

      products.map((product) => {
        console.log(product.title);
      });


      // ==========================
      // Task 3 - Total Products
      // ==========================

      console.log("TASK 3");

      console.log("Total Products :", products.length);


      // ==========================
      // Task 4 - Categories
      // ==========================

      console.log("TASK 4");

      let categories = [...new Set(products.map((p) => p.category))];

      categories.forEach((cat) => {
        console.log(cat);
      });


      // ==========================
      // Task 5 - Products Above 50
      // ==========================

      console.log("TASK 5");

      let above50 = products.filter((p) => p.price > 50);

      above50.forEach((p) => {
        console.log(p.title, "-", p.price);
      });


      // ==========================
      // Task 6 - Products Below 50
      // ==========================

      console.log("TASK 6");

      let below50 = products.filter((p) => p.price < 50);

      console.log(below50);


      // ==========================
      // Task 7 - First Product Above 100
      // ==========================

      console.log("TASK 7");

      let firstAbove100 = products.find((p) => p.price > 100);

      console.log(firstAbove100);


      // ==========================
      // Task 8 - Search Product
      // ==========================

      console.log("TASK 8");

      let searchText = "shirt";

      let searchedProducts = products.filter((p) =>
        p.title.toLowerCase().includes(searchText.toLowerCase())
      );

      console.log(searchedProducts);


      // ==========================
      // Task 9 - Electronics Count
      // ==========================

      console.log("TASK 9");

      let electronics = products.filter(
        (p) => p.category === "electronics"
      );

      console.log("Electronics Count :", electronics.length);


      // ==========================
      // Task 10 - Highest Price Product
      // ==========================

      console.log("TASK 10");

      let highestPrice = products.reduce((max, product) =>
        product.price > max.price ? product : max
      );

      console.log(highestPrice);


      // ==========================
      // Task 11 - Lowest Price Product
      // ==========================

      console.log("TASK 11");

      let lowestPrice = products.reduce((min, product) =>
        product.price < min.price ? product : min
      );

      console.log(lowestPrice);


      // ==========================
      // Task 12 - Total Price
      // ==========================

      console.log("TASK 12");

      let totalPrice = products.reduce(
        (total, product) => total + product.price,
        0
      );

      console.log("Total Price :", totalPrice);


      // ==========================
      // Task 13 - Average Price
      // ==========================

      console.log("TASK 13");

      let averagePrice = totalPrice / products.length;

      console.log("Average Price :", averagePrice.toFixed(2));


      // ==========================
      // Task 14 - Highest Rating
      // ==========================

      console.log("TASK 14");

      let bestRated = products.reduce((best, product) =>
        product.rating.rate > best.rating.rate ? product : best
      );

      console.log("Title :", bestRated.title);
      console.log("Rating :", bestRated.rating.rate);


      // ==========================
      // Task 15 - Lowest Rating
      // ==========================

      console.log("TASK 15");

      let lowRated = products.reduce((low, product) =>
        product.rating.rate < low.rating.rate ? product : low
      );

      console.log("Title :", lowRated.title);
      console.log("Rating :", lowRated.rating.rate);


      // ==========================
      // Task 16 - Category Wise Count
      // ==========================

      console.log("TASK 16");

      let categoryCount = products.reduce((acc, product) => {

        acc[product.category] =
          (acc[product.category] || 0) + 1;

        return acc;

      }, {});

      console.log(categoryCount);


      // ==========================
      // Task 17 - Discount Products
      // ==========================

      console.log("TASK 17");

      let discountProducts = products.map((product) => {

        return {
          title: product.title,
          oldPrice: product.price,
          newPrice: (product.price * 0.9).toFixed(2)
        };

      });

      console.log(discountProducts);


      // ==========================
      // Task 18 - Low To High
      // ==========================

      console.log("TASK 18");

      let lowToHigh = [...products].sort(
        (a, b) => a.price - b.price
      );

      console.log(lowToHigh);


      // ==========================
      // Task 19 - High To Low
      // ==========================

      console.log("TASK 19");

      let highToLow = [...products].sort(
        (a, b) => b.price - a.price
      );

      console.log(highToLow);


      // ==========================
      // Task 20 - Any Product Above 500
      // ==========================

      console.log("TASK 20");

      let above500 = products.some(
        (p) => p.price > 500
      );

      console.log(above500);


      // ==========================
      // Task 21 - All Products Rating Above 3
      // ==========================

      console.log("TASK 21");

      let allAbove3 = products.every(
        (p) => p.rating.rate > 3
      );

      console.log(allAbove3);


      // ==========================
      // Task 22 - Top 5 Costliest
      // ==========================

      console.log("TASK 22");

      let top5Costly = [...products]
        .sort((a, b) => b.price - a.price)
        .slice(0, 5);

      console.log(top5Costly);


      // ==========================
      // Task 23 - Top 5 Rated
      // ==========================

      console.log("TASK 23");

      let top5Rated = [...products]
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, 5);

      console.log(top5Rated);


      // ==========================
      // Task 24 - Group By Category
      // ==========================

      console.log("TASK 24");

      let grouped = products.reduce((acc, product) => {

        if (!acc[product.category]) {
          acc[product.category] = [];
        }

        acc[product.category].push(product);

        return acc;

      }, {});

      console.log(grouped);


      // ==========================
      // Task 25 - Convert To INR
      // ==========================

      console.log("TASK 25");

      products.forEach((product) => {

        console.log(
          product.title,
          "- ₹" + (product.price * 85).toFixed(0)
        );

      });


      // ==========================
      // Task 26 - Amazon Filter
      // ==========================

      console.log("TASK 26");

      let amazonFilter = products.filter((p) =>
        p.price < 500 &&
        p.rating.rate > 4 &&
        p.category === "electronics"
      );

      console.log(amazonFilter);


      // ==========================
      // Task 27 - Best Seller
      // ==========================

      console.log("TASK 27");

      console.log(bestRated);


      // ==========================
      // Task 28 - Analytics Dashboard
      // ==========================

      console.log("TASK 28");

      console.log("Total Products :", products.length);
      console.log("Total Categories :", categories.length);
      console.log("Highest Price :", highestPrice.title);
      console.log("Lowest Price :", lowestPrice.title);
      console.log("Average Price :", averagePrice);
      console.log("Best Rated :", bestRated.title);


      // ==========================
      // Task 29 - Inventory Report
      // ==========================

      console.log("TASK 29");

      console.log(
        "Expensive Products :",
        products.filter((p) => p.price > 100).length
      );

      console.log(
        "Affordable Products :",
        products.filter((p) => p.price <= 100).length
      );


      // ==========================
      // Task 30 - Admin Dashboard
      // ==========================

      console.log("TASK 30");

      console.log("========================");

      console.log("TOTAL PRODUCTS :", products.length);

      console.log("TOTAL CATEGORIES :", categories.length);

      console.log("TOTAL PRICE :", totalPrice);

      console.log("AVERAGE PRICE :", averagePrice);

      console.log(
        "HIGHEST PRICE PRODUCT :",
        highestPrice.title
      );

      console.log(
        "LOWEST PRICE PRODUCT :",
        lowestPrice.title
      );

      console.log(
        "BEST RATED PRODUCT :",
        bestRated.title
      );

      console.log(
        "LOWEST RATED PRODUCT :",
        lowRated.title
      );

      console.log(
        "PRODUCTS ABOVE 100 :",
        above50.length
      );

      console.log(
        "PRODUCTS BELOW 50 :",
        below50.length
      );

      console.log("CATEGORY COUNTS :", categoryCount);

      console.log("========================");

    })

    .catch((error) => {

      console.log("Error :", error);

    })

    .finally(() => {

      console.log("API Call Completed");

    });

}