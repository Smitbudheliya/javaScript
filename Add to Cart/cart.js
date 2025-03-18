
let product = [
    {
        id: 1,
        name: "Classic Margherita Pizza",
        price: 1299,
        qty: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLEoGo3bHJYJEpRIaveeChxuCkXPoLk3RNg&s",
        rate: "assets/img/rating.png"
    },
    {
        id: 2,
        name: "Cheese Burger",
        price: 899,
        qty: 1,
        image: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg",
        rate: "assets/img/rating.png"
    },
    {
        id: 3,
        name: "Cheesy Loaded Fries",
        price: 499,
        qty: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHdznCrdfH-FJFmT8fUGK-zVzdt5dCIpXqg&s",
        rate: "assets/img/rating.png"
    },
    {
        id: 4,
        name: "Grilled BBQ Ribs",
        price: 2499,
        qty: 1,
        image: "https://static.vecteezy.com/system/resources/previews/001/783/321/non_2x/grilled-bbq-ribs-with-vegetables-and-french-fries-on-wooden-cutting-board-photo.jpg",
        rate: "assets/img/rating.png"
    },
    {
        id: 5,
        name: "Veggie Delight Sandwich",
        price: 750,
        qty: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjuImsG1fNRI5inAaBvbr1L1tl3vhTBs0okQ&s",
        rate: "assets/img/rating.png"
    },
    {
        id: 6,
        name: "Creamy Alfredo Pasta",
        price: 1399,
        qty: 1,
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Alfredo-dc662e3.jpg",
        rate: "assets/img/rating.png"
    },
    {
        id: 7,
        name: "Crispy Fried Potato",
        price: 1699,
        qty: 1,
        image: "https://www.southernplate.com/2016/08/whistle-stop-potatoes.html/whistle-stop-potatoes",
        rate: "assets/img/rating.png"
    },
    {
        id: 8,
        name: "Chocolate Lava Cake",
        price: 599,
        qty: 1,
        image: "https://preppykitchen.com/wp-content/uploads/2022/03/Chocolate-Lava-Cake-Recipe.jpg",
        rate: "assets/img/rating.png"
    },
    {
        id: 9,
        name: "Strawberry Cheesecake",
        price: 799,
        qty: 1,
        image: "https://www.thespruceeats.com/thmb/FVgJ6FkRjHenPPYHJgVrnEAHjyo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/strawberry-cheesecake-4588014-03-5a5769c5f121456c8b4aa5c7c6e06f61.jpg",
        rate: "assets/img/rating.png"
    },
    {
        id: 10,
        name: "Spaghetti Bolognese",
        price: 1499,
        qty: 1,
        image: "https://img.taste.com.au/5qlr1PkR/taste/2016/11/spaghetti-bolognese-106560-1.jpeg",
        rate: "assets/img/rating.png"
    },
    {
        id: 11,
        name: "Sushi Platter",
        price: 2999,
        qty: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG2sMkAF4B_ScYJNqvRGgPuBoki4_05u4ccQ&s",
        rate: "assets/img/rating.png"
    },
    {
        id: 12,
        name: "Thai Green Curry",
        price: 1899,
        qty: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Thai_green_chicken_curry_and_roti.jpg",
        rate: "assets/img/rating.png"
    },
    {
        id: 13,
        name: "Fresh Greek Salad",
        price: 999,
        qty: 1,
        image: "https://cdn.loveandlemons.com/wp-content/uploads/opengraph/2019/07/greek-salad-2.jpg",
        rate: "assets/img/rating.png"
    },
    {
        id: 14,
        name: "Tandoori Vegetables",
        price: 2099,
        qty: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZWmqTzCusTFpg0pvNQmAIawQGCbeSlyySQ&s",
        rate: "assets/img/rating.png"
    },
    {
        id: 15,
        name: "Mango Smoothie",
        price: 499,
        qty: 1,
        image: "https://everylittlecrumb.com/wp-content/uploads/mangosmoothie-5.jpg",
        rate: "assets/img/rating.png"
    }
]
const getproduct = () => {
    let tbl = "";
    product.map((val, index) => {
        tbl += `
                    

                    
                    <div class="product">
                        <img src="${val.image}"
                        alt="Burger">
                        <div class="product-content">
                            <h3>${val.name}</h3>
                            <p class="price">₹ ${val.price}</p>
                        </div>
                        <button class="add-btn"  onclick="addtocart(${val.id})">Add to Cart</button>
                    </div>
                `
    });
    document.getElementById('products').innerHTML = tbl;
}
getproduct();

let cart = [];
const addtocart = (pid) => {
    let allcart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
    let dup = allcart.find(val => val.id == pid);
    if (dup) {
        alert("already exits in your cart");
        return false;
    }

    product.map((val, i) => {
        if (val.id == pid) {
            if (localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined) {
                cart.push(val);
                localStorage.setItem('cart', JSON.stringify(cart));
            }
            else {
                let oldproductdata = JSON.parse(localStorage.getItem('cart'));
                oldproductdata.push(val);
                localStorage.setItem('cart', JSON.stringify(oldproductdata));
            }
        }
    })
    alert("product succesfully added to your cart");
}