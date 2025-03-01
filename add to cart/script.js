const record = [
    {
        id: 1,
        name: "Farmhouse",
        qnt: 1,
        price: 220,
        Image: "image/Farmhouse.webp",
    },
    {
        id: 2,
        name: "Margherita",
        qnt: 1,
        price: 240,
        Image: "image/Margherita.webp",
    },
    {
        id: 3,
        name: "Peppy Paneer",
        qnt: 1,
        price: 420,
        Image: "image/Peppy Paneer.webp",
    },
];

const viewProduct = () => {
    let tbl = '';
    record.map((val) => {
        tbl += `
            <div class="col-md-4">
                <div class="product">
                    <img src="${val.Image}">
                    <div>
                        <h2>${val.name}</h2>
                        <p>Price: ${val.price}</p>
                        <button class="add-to-cart">Add To Cart</button>
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById("product").innerHTML = tbl;
}

viewProduct();