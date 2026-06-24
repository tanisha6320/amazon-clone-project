let products = [
    {
        id: 1,
        name: "iPhone 14",
        price: 69999,
        img: "https://img.magnific.com/free-photo/elegant-smartphone-composition_23-2149437071.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
        id: 2,
        name: "Samsung Phone",
        price: 64999,
        img: "https://www.bbassets.com/media/uploads/p/l/1200051944_4-samsung-galaxy-s24-5g-8gb-ram-128gb-cobalt-violet.jpg"
    },
    {
        id: 3,
        name: "Laptop",
        price: 55000,
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
    },
    {
        id: 4,
        name: "Gaming Laptop",
        price: 85000,
        img: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=500"
    },
    {
        id: 5,
        name: "Headphones",
        price: 1999,
        img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500"
    },
    {
        id: 6,
        name: "Wireless Earbuds",
        price: 1499,
        img: "https://www.lapcare.com/cdn/shop/files/1_75fc7562-0fbb-4d23-9c72-40d36d5c6e90.jpg?v=1757325350&width=2048"
    },
    {
        id: 7,
        name: "Smart Watch",
        price: 2999,
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        id: 8,
        name: "Fitness Band",
        price: 1999,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCYxnk3XzjFWZdyWGaxteqEn1w3f4RUeZvui7Zqt6iow&s=10"
    },
    {
        id: 9,
        name: "Camera",
        price: 45999,
        img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },
    {
        id: 10,
        name: "Keyboard",
        price: 2499,
        img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
    }
];

let cart = [];

function displayProducts(list = products) {
    let container = document.getElementById("productList");
    container.innerHTML = "";

    list.forEach(p => {
        container.innerHTML += `
        <div class="product">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
        `;
    });
}

function addToCart(id) {
    let product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    document.getElementById("cartCount").innerText = cart.length;

    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <p>
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">Remove</button>
            </p>
        `;
    });
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

document.getElementById("searchBar").addEventListener("input", function(e) {
    let value = e.target.value.toLowerCase();
    let filtered = products.filter(p =>
        p.name.toLowerCase().includes(value)
    );
    displayProducts(filtered);
});

displayProducts();