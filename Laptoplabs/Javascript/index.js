const stock_products = [
  {
    name: "Dell Smartchoice 15 Thin & Light Laptop",
    ram: "8GB",
    processor: "Intel Core i3-1215U",
    storage: "512GB SSD",
    price: "₹35,990",
    original_price: "₹47,876",
    image_reference:
      "https://m.media-amazon.com/images/I/4143CSktumL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "HP Laptop 15s",
    ram: "16GB DDR4",
    processor: "Intel Core i5-1235U",
    storage: "512GB SSD",
    price: "₹52,990",
    original_price: "₹62,417",
    image_reference:
      "https://m.media-amazon.com/images/I/61cpreycK-L._SY450_.jpg",
  },
  {
    name: "Lenovo IdeaPad Slim 1",
    ram: "16GB",
    processor: "AMD Ryzen 5 5500U",
    storage: "512GB SSD",
    price: "₹45,990",
    original_price: "₹60,990",
    image_reference:
      "https://m.media-amazon.com/images/I/31paoJTwAdL._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    name: "Lenovo IdeaPad Slim 3",
    ram: "16GB",
    processor: "Intel Core i7-13620H",
    storage: "512GB SSD",
    price: "₹61,990",
    original_price: "₹85,390",
    image_reference:
      "https://m.media-amazon.com/images/I/41cgBFdKbfL._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    name: "Lenovo V15 G2",
    ram: "8GB",
    processor: "Intel Celeron N4500",
    storage: "256GB SSD",
    price: "₹22,990",
    original_price: "₹89,990",
    image_reference:
      "https://m.media-amazon.com/images/I/31paoJTwAdL._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    name: "Acer Aspire 5",
    ram: "8GB",
    processor: "Intel Core i5-1135G7",
    storage: "512GB SSD",
    price: "₹49,990",
    original_price: "₹59,990",
    image_reference:
      "https://m.media-amazon.com/images/I/41cgBFdKbfL._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    name: "Asus Vivobook 15",
    ram: "16GB",
    processor: "AMD Ryzen 5 5500U",
    storage: "512GB SSD",
    price: "₹45,990",
    original_price: "₹55,990",
    image_reference:
      "https://m.media-amazon.com/images/I/41RwlBLxm5L._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "MSI Modern 14",
    ram: "8GB",
    processor: "Intel Core i5-1135G7",
    storage: "512GB SSD",
    price: "₹54,990",
    original_price: "₹64,990",
    image_reference:
      "https://m.media-amazon.com/images/I/41z4NndSF5L._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    name: "Apple MacBook Air",
    ram: "8GB",
    processor: "Apple M1",
    storage: "256GB SSD",
    price: "₹99,990",
    original_price: "₹1,09,900",
    image_reference:
      "https://m.media-amazon.com/images/I/316ArzLeJ2L._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    name: "HP Pavilion x360",
    ram: "16GB",
    processor: "Intel Core i5-1235U",
    storage: "512GB SSD",
    price: "₹67,990",
    original_price: "₹79,990",
    image_reference:
      "https://m.media-amazon.com/images/I/41cgBFdKbfL._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    name: "Lenovo Legion 5",
    ram: "16GB",
    processor: "AMD Ryzen 7 5800H",
    storage: "1TB SSD",
    price: "₹1,09,990",
    original_price: "₹1,29,990",
    image_reference:
      "https://m.media-amazon.com/images/I/31paoJTwAdL._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    name: "Asus ROG Zephyrus G14",
    ram: "16GB",
    processor: "AMD Ryzen 9 5900HS",
    storage: "1TB SSD",
    price: "₹1,29,990",
    original_price: "₹1,49,990",
    image_reference:
      "https://m.media-amazon.com/images/I/41FE0fkNHpL._SX300_SY300_QL70_FMwebp_.jpg",
  },
];
const productsection = document.getElementById("product-page");
const btnCart = document.getElementById("btnCart");
const mymodal = new bootstrap.Modal(document.getElementById("mymodal"));

let CartItems = [];

// Function to load stock products
function loadstockproduct() {
  let output = "";
  stock_products.forEach((product) => {
    output += `
        <div class="col mb-4">
            <div class="card h-100">
                <img class="card-img-top img-fluid" src="${product.image_reference}" alt="${product.name}">
                <div class="card-body py-4">
                    <h5 class="card-title text-center mb-3">${product.name}</h5>
                    <p class="card-text text-muted text-center"><b>RAM</b>: ${product.ram}</p>
                    <p class="card-text text-muted text-center"><b>Processor</b>: ${product.processor}</p>
                    <p class="card-text text-muted text-center"><b>Storage</b>: ${product.storage}</p>
                    <p class="card-text text-muted text-center text-decoration-line-through"><b>Original Price</b>: ${product.original_price}</p>
                    <p class="card-text text-success fw-bold text-center"><b>Price</b>: ${product.price}</p>
                </div>
                <div class="card-footer p-4 bg-transparent border-top-0">
                    <div class="text-center">
                        <button class="btn btn-primary btnProduct" data-id="${product.name}">
                            <i class="bi bi-cart-fill"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
  });
  productsection.innerHTML = output;

  // Add product button event listeners
  const productbtn = document.querySelectorAll(".btnProduct");
  productbtn.forEach((btn) => {
    const productId = btn.dataset.id;
    if (isidpresent(productId)) {
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }

    btn.addEventListener("click", addToCart);
  });
}

// Function to add product to cart
function addToCart() {
  this.disabled = true; // Disable button once added
  const productId = this.dataset.id;
  const product = stock_products.find((p) => p.name === productId);
  if (product) {
    CartItems.push({
      ...product,
      quantity: 1,
      amount: parseFloat(product.price.replace("₹", "").replace(",", "")),
    });
    console.log("Product added to cart:", product);
    updateCartBadge(); // Update badge count
    updateCartModal(); // Update modal content
  }
}

// Function to update the cart modal
function updateCartModal() {
  const tbody = document.querySelector("#mymodal tbody");
  const totalElem = document.querySelector(".total");
  tbody.innerHTML = ""; // Clear existing items

  let total = 0;
  CartItems.forEach((item) => {
    const row = `
        <tr>
            <td class="align-middle"><img src="${item.image_reference}" alt="${
      item.name
    }" class="img-fluid cart-image"></td>
            <td class="align-middle text-center">${item.name}</td>
            <td class="align-middle text-center">${item.price}</td>
            <td class="align-middle text-center">
                <input type="number" style="width:80px" value="${
                  item.quantity
                }" min="1" class="form-control quantity txtQty" data-id="${
      item.name
    }">
            </td>
            <td class="align-middle text-center amount">₹${(
              item.quantity * item.amount
            ).toFixed(2)}</td>
            <td class="align-middle text-center">
                <button class="btn btn-danger btn-remove btn-sm" data-id="${
                  item.name
                }">
                    <i class="bi bi-trash-fill"></i> Remove
                </button>
            </td>
        </tr>`;
    tbody.insertAdjacentHTML("beforeend", row);
    total += item.quantity * item.amount;
  });

  totalElem.textContent = `Total ₹${total.toFixed(2)}`;

  // Add event listener to quantity inputs
  const txtQty = document.querySelectorAll(".txtQty");
  txtQty.forEach((txt) => {
    txt.addEventListener("change", updateQty);
  });
}

// Function to update the quantity in the cart
function updateQty() {
  const name = this.dataset.id;
  const newQty = parseInt(this.value);
  const productIndex = CartItems.findIndex((p) => p.name === name);

  if (productIndex > -1) {
    CartItems[productIndex].quantity = newQty;
    CartItems[productIndex].amount =
      newQty *
      parseFloat(
        CartItems[productIndex].price.replace("₹", "").replace(",", "")
      );

    // Update the amount in the table
    const amountTd = this.closest("tr").querySelector(".amount");
    amountTd.textContent = `₹${CartItems[productIndex].amount.toFixed(2)}`;

    // Update total in the modal
    updateCartModal();
  }
}

// Function to update the cart badge count
function updateCartBadge() {
  const badge = document.querySelector("#btnCart .badge");
  badge.textContent = CartItems.length;
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  CartItems = CartItems.filter((p) => p.name !== productId);
  updateCartBadge();
  updateCartModal();

  // Re-enable the "Add to Cart" button when removed
  const productbtn = document.querySelector(
    `.btnProduct[data-id="${productId}"]`
  );
  if (productbtn) {
    productbtn.disabled = false;
  }
}

// Listen for click events to remove from cart
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-remove")) {
    const productId = e.target.dataset.id;
    removeFromCart(productId);
  }
});

// Listen for opening cart modal
btnCart.addEventListener("click", function () {
  updateCartModal();
  mymodal.show();
});

// Function to check if the product is in the cart
function isidpresent(id) {
  return CartItems.some((product) => product.name === id);
}

// Handle overflow for cart items in modal
document
  .querySelector("#mymodal .modal-body")
  .classList.add("table-responsive");

// Initial load of stock products
loadstockproduct();
