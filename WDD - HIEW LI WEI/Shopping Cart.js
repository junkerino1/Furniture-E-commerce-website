// Initialize item quantities
const quantities = document.querySelectorAll('.item-quantity');
const minusButtons = document.querySelectorAll('.minus');
const plusButtons = document.querySelectorAll('.plus');
const totalElement = document.getElementById('total');

let total = 0;

minusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (quantities[index].textContent > 0) {
            quantities[index].textContent--;
            total -= 100; // Adjust the price accordingly
            updateTotal();
        }
    });
});

plusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        quantities[index].textContent++;
        total += 100; // Adjust the price accordingly
        updateTotal();
    });
});

function updateTotal() {
    totalElement.textContent = total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const product = button.parentElement.getAttribute("data-name");
            const price = parseFloat(button.parentElement.getAttribute("data-price"));

            cart.push({ product, price });
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.product} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(listItem);

            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }

    checkoutButton.addEventListener("click", function () {
        alert("Thank you for your purchase!");
        cart = [];
        updateCart();

        location.href = "Payment.html";
    });
});