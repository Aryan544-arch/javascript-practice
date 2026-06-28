

let products = [
    {
        productId: 501,
        title: "Leather Wallet",
        price: 45.00,
        category: "Fashion",
        rating: 4.2,
        isFeatured: true
    },
    {
        productId: 502,
        title: "Running Shoes",
        price: 89.99,
        category: "Sports",
        rating: 4.5,
        isFeatured: true
    },
    {
        productId: 503,
        title: "Bluetooth Headphones",
        price: 120.00,
        category: "Electronics",
        rating: 4.7,
        isFeatured: true
    },
    {
        productId: 504,
        title: "Smart Watch",
        price: 199.99,
        category: "Electronics",
        rating: 4.6,
        isFeatured: false
    },
    {
        productId: 505,
        title: "Gaming Keyboard",
        price: 75.50,
        category: "Electronics",
        rating: 4.4,
        isFeatured: true
    },
    {
        productId: 506,
        title: "Office Chair",
        price: 149.99,
        category: "Furniture",
        rating: 4.3,
        isFeatured: false
    },
    {
        productId: 507,
        title: "Backpack",
        price: 39.99,
        category: "Accessories",
        rating: 4.1,
        isFeatured: false
    },
    {
        productId: 508,
        title: "Wireless Mouse",
        price: 29.99,
        category: "Electronics",
        rating: 4.5,
        isFeatured: true
    },
    {
        productId: 509,
        title: "Coffee Maker",
        price: 65.00,
        category: "Home Appliances",
        rating: 4.0,
        isFeatured: false
    },
    {
        productId: 510,
        title: "Water Bottle",
        price: 15.99,
        category: "Lifestyle",
        rating: 4.3,
        isFeatured: false
    },
    {
        productId: 511,
        title: "Yoga Mat",
        price: 25.00,
        category: "Fitness",
        rating: 4.4,
        isFeatured: true
    },
    {
        productId: 512,
        title: "Desk Lamp",
        price: 34.99,
        category: "Home Decor",
        rating: 4.2,
        isFeatured: false
    },
    {
        productId: 513,
        title: "Mechanical Pencil Set",
        price: 12.50,
        category: "Stationery",
        rating: 4.1,
        isFeatured: false
    },
    {
        productId: 514,
        title: "Portable SSD",
        price: 99.99,
        category: "Electronics",
        rating: 4.8,
        isFeatured: true
    },
    {
        productId: 515,
        title: "Travel Suitcase",
        price: 135.00,
        category: "Travel",
        rating: 4.5,
        isFeatured: false
    },
    {
        productId: 516,
        title: "Digital Camera",
        price: 499.99,
        category: "Photography",
        rating: 4.7,
        isFeatured: true
    }
];

function showProduct(product) {
    console.log("Product ID: ", product.productId);
    console.log("Title: ", product.title);
    console.log("Price: $", product.price);
    console.log("Category: ", product.category);
    console.log("Rating: ", product.rating, " Stars");
    console.log("Featured: ", product.isFeatured ? "Yes" : "No");
}


function objectLength() {
    return products.length;
}

// Task 1

function displayAllProducts() {
    if (objectLength()) {
        let total = objectLength();
        for (let i = 0; i < total; i++) {
            showProduct(products[i]);
        }
    }
    else {
        console.log("No Product Available");
    }
    console.log("\n");
    console.log("\n");
}


// Task 2


function totalValuation() {
    if (objectLength()) {
        let total = 0;
        let len = objectLength();
        for (let i = 0; i < len; i++) {
            total += products[i].price;
        }
        console.log("Total Catalog Value: $", total);
    } else {
        console.log("No Product Available");
    }
    console.log("\n");
    console.log("\n");
}


// Task 3

function identifyPremiumProduct() {
    if (objectLength()) {
        let len = objectLength();
        for (let i = 0; i < len; i++) {
            if (products[i].price > 100) {
                showProduct(products[i]);
            }
        }
    } else {
        console.log("No Product Available");
    }
    console.log("\n");
    console.log("\n");
}

// Task 4

function applyDiscount() {
    if (objectLength()) {
        let len = objectLength();
        for (let i = 0; i < len; i++) {
            let newPrice = products[i].price - (products[i].price * 0.10);
            console.log(products[i].title, " - Original: $", products[i].price, " | Promo Price: $", newPrice.toFixed(2));
        }
    }
    else {
        console.log("No Product Available");
    }
    console.log("\n");
    console.log("\n");
}

// Task 5


function countFeatured() {
    if (objectLength()) {
        let productCategories = {};
        let len = objectLength();
        for (let i = 0; i < len; i++) {
            if (products[i].isFeatured) {
                if (productCategories[products[i].category] === undefined) {
                    productCategories[products[i].category] = 1;
                }
                else {
                    productCategories[products[i].category]++;
                }
            }
        }
        for (let category in productCategories) {
            console.log(category, ": ", productCategories[category]);
        }
    }
    else {
        console.log("No Product Available");
    }
    console.log("\n");
    console.log("\n");
}

// Task 6

function highestRatedProduct() {
    if (objectLength()) {
        let len = objectLength();
        let highestRating = 0;
        let name;
        for (let i = 0; i < len; i++) {
            if (products[i].rating > highestRating) {
                highestRating = products[i].rating;
                name = products[i].title;
            }
        }
        console.log("Top Rated Product: ", name, " ", highestRating, " Stars");
        return highestRating;
    }
    else {
        console.log("No Product Available");
    }
    console.log("\n");
    console.log("\n");
}

// Task 7

function satisfactoryProduct() {
    if (objectLength()) {
        let len = objectLength();
        for (let i = 0; i < len; i++) {
            let satisfy = products[i].rating;
            if (satisfy >= 4.5) {
                console.log(products[i].title, " - Highly Recommended");
            }
            else if (satisfy >= 3.5) {
                console.log(products[i].title, " - Satisfactory");
            }
            else {
                console.log(products[i].title, " - Needs Review");
            }
        }
    }
    else {
        console.log("No Product Available");
    }
    console.log("\n");
    console.log("\n");
}

// Task 8

function countSatisfactory() {
    if (objectLength()) {
        let len = objectLength();
        let highly = 0, satisfactory = 0, needsReviews = 0;
        for (let i = 0; i < len; i++) {
            let satisfy = products[i].rating;
            if (satisfy >= 4.5) {
                highly++;
            }
            else if (satisfy >= 3.5) {
                satisfactory++;
            }
            else {
                needsReviews++;
            }
        }
        console.log("Highly Recommended: ", highly);
        console.log("Satisfactory: ", satisfactory);
        console.log("Needs Review: ", needsReviews);
    }
    else {
        console.log("No Product Available");
    }
    console.log("\n");
    console.log("\n");
}

// Task 9

function featuredProducts() {
    if (objectLength()) {
        let len = objectLength();
        for (let i = 0; i < len; i++) {
            if (products[i].isFeatured === true) {
                console.log(products[i].title);
            }
        }
    }
    else {
        console.log("No Product Available");
    }
    console.log("\n");
    console.log("\n");
}

// Task 10

function storePerformance() {
    if (objectLength()) {
        console.log("STORE PERFORMANCE REPORT");
        console.log("\n");
        console.log("\n");
        console.log("Total Catalog Items: ", objectLength());
        countSatisfactory();
        console.log("Max Product Rating: ", highestRatedProduct(), " Stars");
    }
    else {
        console.log("No Product Available");
    }
    console.log("\n");
    console.log("\n");
}

let n = Number(prompt("Enter Choice: "));
switch (n) {
    case 1: displayAllProducts(); break;
    case 2: totalValuation(); break;
    case 3: identifyPremiumProduct(); break;
    case 4: applyDiscount(); break;
    case 5: countFeatured(); break;
    case 6: highestRatedProduct(); break;
    case 7: satisfactoryProduct(); break;
    case 8: countSatisfactory(); break;
    case 9: featuredProducts(); break;
    case 10: storePerformance(); break;
    default: console.log("Invalid Input\n");
}