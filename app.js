const prevBtn = document.querySelector(".oldingisi");
const nextBtn = document.querySelector(".keyingisi");
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".rasm");
const headerX = document.querySelector(".HeaderTopIcon");
const dotsContainer = document.createElement("div");
const btns = document.querySelectorAll(".btn");
const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
const headertop = document.querySelector(".headerTop")
let modal = document.getElementById("navsingupmodalcont");
let btn = document.getElementById("singup");
let span = document.getElementById("close");
let singinmodal = document.getElementById("singincont");
let singinbtn = document.querySelectorAll("login");
let singinspan = document.getElementById("yop");
let nabar = document.getElementById("nabar");
let navbaropen = document.getElementById("navbaropen");
let navbarno = document.getElementById("yopq");

dotsContainer.classList.add("dots");
document.querySelector(".carouselContainer").appendChild(dotsContainer);
let index = 0;
slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
        index = i;
        updateCarousel();
    });
    dotsContainer.appendChild(dot);
});

function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    carousel.style.transform = `translateX(${-index * slideWidth}px)`;
    updateDots();
}
function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}
headerX.addEventListener("click", function () {
    headertop.remove();
});

for (let link of btns) {
    link.addEventListener("click", filterCard);
}
function filterCard() {
    for (let newLink of btns) {
        newLink.classList.remove(".active");
    }
    let filter = this.dataset.filter;
    for (let card of cards) {
        if (filter == "all") {
            card.style.display = "block";
            this.classList.add("active");
        } else
            if (card.classList.contains(filter)) {
                card.style.display = "block";
                this.classList.add("active");
            } else {
                card.style.display = "none";
            }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-switcher]").forEach(item => {
        item.addEventListener("click", function () {
            let page = this.getAttribute("data-switcher");
            document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
            document.getElementById(page).classList.add("active");
        });
    });
});


btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function toggleText(checkbox) {
    const text = document.getElementById("singupmodalchektext");
    if (checkbox.checked) {
        text.classList.add("strikethrough");
    } else {
        text.classList.remove("strikethrough");
    }
}


singinbtn.onclick = function () {
    singinmodal.style.display = "block";
}
singinspan.onclick = function () {
    singinmodal.style.display = "none";
}
window.onclick = function (even) {
    if (even.target == singinmodal) {
        singinmodal.style.display = "none";
    }
}




function toggleInputType() {
    const input = document.getElementById('passwordInput');
    const icon = document.getElementById('toggleIcon');
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}
const salesCards = document.querySelector(".cards")

fetch("../data/products.json")
    .then((salesProducts) => salesProducts.json())
    .then((salesProduct) => salesProductCards(salesProduct))

function salesProductCards(salesProduct) {
    salesProduct.map((salesproduct) => {
        const salesCard = document.createElement("div")
        salesCard.classList = "card"
        salesCard.innerHTML = `
      <img src="${salesproduct.image}" alt="${salesproduct.imgAlt}" class="photo">
      <i class="fa-solid fa-star icon"></i>
      <i class="fa-solid fa-star icon"></i>
      <i class="fa-solid fa-star icon"></i>
      <i class="fa-solid fa-star icon"></i>
      <i class="fa-solid fa-star icon"></i>
      <p class="cardText">${salesproduct.name}</p>
      <div class="card_price">
        <span class="cardPrice">$${salesproduct.cost}</span>
        <del class="cardPrice pricetxt">$${salesproduct.oldCost}</del>
      </div>
    `
        salesCards.appendChild(salesCard)
    })
}
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".modalOrabtur");
    const closeButton = document.querySelector(".close-button");
    function showModal() {
        modal.style.display = "block";
    }
    function closeModal() {
        modal.style.display = "none";
    }
    closeButton.addEventListener("click", closeModal);
    // setInterval(showModal, 30000);

});


document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-content").forEach(menu => {
        menu.style.display = "none";
    });
});




const SreachCards = document.querySelector(".sreachPageCards");

fetch("../data/product.json")
    .then((response) => response.json())
    .then((products) => SreachProducts(products))
    .catch((error) => console.error("Ma'lumot yuklashda xatolik:", error));

function SreachProducts(products) {
    products.forEach((product) => {
        const sreachCard = document.createElement("div");
        sreachCard.classList.add("sreachPageCard");
        sreachCard.innerHTML = `
            <img src="${product.photo}" class="sreachPageCardImg" alt="${product.imgalt}">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p class="sreachPageCardTitle">${product.title}</p>
            <span class="sreachPageCardCost">$${product.price}</span>
            <del class="sreachPageCardoldcost">$${product.oldprice}</del>
        `;
        SreachCards.appendChild(sreachCard);
    });
}
function initializeLayoutSwitcher() {
    const cardsContainer = document.querySelector('.sreachPageCards');
    const gridButton = document.querySelector('.fa-th');
    const threeColButton = document.querySelector('.fa-bars');
    const listButton = document.querySelector('.fa-list');

    function changeLayout(layoutType) {
        cardsContainer.classList.remove('grid-view', 'three-column-view', 'list-view');

        cardsContainer.classList.add(layoutType);

        gridButton.classList.remove('active');
        threeColButton.classList.remove('active');
        listButton.classList.remove('active');

        switch (layoutType) {
            case 'grid-view':
                gridButton.classList.add('active');
                break;
            case 'three-column-view':
                threeColButton.classList.add('active');
                break;
            case 'list-view':
                listButton.classList.add('active');
                break;
        }
    }

    gridButton.addEventListener('click', () => changeLayout('grid-view'));
    threeColButton.addEventListener('click', () => changeLayout('three-column-view'));
    listButton.addEventListener('click', () => changeLayout('list-view'));

    changeLayout('grid-view');
}

const styles = `
    .sreachPageCards {
        display: grid;
        gap: 20px;
        width: 80%;
        margin: 0 auto;
        transition: all 0.3s ease;
        row-gap: 450px;
    height: auto;
        
    }

   
    .grid-view {
        grid-template-columns: repeat(4, 1fr);
    }

    
    .three-column-view {
        grid-template-columns: repeat(3, 1fr);
    }

   
    .list-view {
        grid-template-columns: 1fr;
        row-gap: 420px;

    }

    .list-view .product-card {
        display: grid;
        grid-template-columns: 300px 1fr;
        gap: 20px;
        align-items: center;
    }

    
    .fa-th.active,
    .fa-bars.active,
    .fa-list.active {
        color: #000;
        opacity: 1;
    }

    .fa-th,
    .fa-bars,
    .fa-list {
        cursor: pointer;
        opacity: 0.5;
    }
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
document.addEventListener('DOMContentLoaded', function () {
    const categoryItems = document.querySelectorAll('.category-list li');
    const styleItems = document.querySelectorAll('.style-list li');

    categoryItems.forEach(item => {
        item.addEventListener('click', function () {
            categoryItems.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    styleItems.forEach(item => {
        item.addEventListener('click', function () {
            styleItems.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    const colorCircles = document.querySelectorAll('.color-circle');

    colorCircles.forEach(circle => {
        circle.addEventListener('click', function () {
            colorCircles.forEach(c => {
                c.style.boxShadow = 'none';
                c.style.position = '';
            });

            this.style.position = 'relative';
            this.style.boxShadow = `0 0 0 3px ${this.style.backgroundColor}, 0 0 0 4px #ddd`;
        });
    });

    const sizeButtons = document.querySelectorAll('.size-btn');

    sizeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
                this.style.backgroundColor = 'white';
                this.style.color = 'black';
            } else {
                this.classList.add('selected');
                this.style.backgroundColor = 'black';
                this.style.color = 'white';
            }
        });
    });

    const minPriceSlider = document.getElementById('min-price');
    const maxPriceSlider = document.getElementById('max-price');
    const priceRangeDisplay = document.querySelector('.price-range');

    function updatePriceRange() {
        const minPrice = parseInt(minPriceSlider.value);
        const maxPrice = parseInt(maxPriceSlider.value);

        if (minPrice > maxPrice) {
            minPriceSlider.value = maxPrice;
        }

        priceRangeDisplay.textContent = `$${minPriceSlider.value} - $${maxPriceSlider.value}`;
    }

    minPriceSlider.addEventListener('input', updatePriceRange);
    maxPriceSlider.addEventListener('input', updatePriceRange);

    const filterCont = document.querySelector('.filter-container')
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', function () {
        filterCont.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail")
    const mainImage = document.getElementById("main-product-image")

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", function () {
            thumbnails.forEach((t) => t.classList.remove("active"))
            this.classList.add("active")
        })
    })

    const colorOptions = document.querySelectorAll(".color-option")

    colorOptions.forEach((option) => {
        option.addEventListener("click", function () {
            colorOptions.forEach((o) => o.classList.remove("active"))
            this.classList.add("active")
        })
    })



    const minusBtn = document.querySelector(".minus")
    const plusBtn = document.querySelector(".plus")
    const quantityInput = document.querySelector(".quantity-input")



    const tabHeaders = document.querySelectorAll(".tab-header")
    const tabPanels = document.querySelectorAll(".tab-panel")

    tabHeaders.forEach((header) => {
        header.addEventListener("click", function () {
            const tabId = this.getAttribute("data-tab")
            tabHeaders.forEach((h) => h.classList.remove("active"))
            tabPanels.forEach((p) => p.classList.remove("active"))

            this.classList.add("active")
            document.getElementById(tabId).classList.add("active")
        })
    })

    const addToCartBtn = document.querySelector(".add-to-cart-btn")


})
// document.querySelectorAll(".dropdown-btn").forEach(button => {
//     button.addEventListener("click", function (event) {
//         event.stopPropagation(); // Boshqa eventlarni to‘xtatish

//         let allMenus = document.querySelectorAll(".dropdown-content");

//         allMenus.forEach(m => {
//             if (m !== menu) {
//                 m.style.display = "none";
//             }
//         });

//         menu.style.display = (menu.style.display === "block") ? "none" : "block";
//     });
// });

document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-content").forEach(menu => {
        menu.style.display = "none";
    });
});
window.addEventListener("click", function (event) {
    if (modal && event.target === modal) {
        modal.style.display = "none";
    }

    if (singinmodal && event.target === singinmodal) {
        singinmodal.style.display = "none";
    }
    if (nabar && event.target === nabar) {
        nabar.style.display = "none";
    }
    if (sidebar && event.target === sidebar) {
        sidebar.style.display = "sidebar"
    }
    document.querySelectorAll(".dropdown-content").forEach(menu => {
        if (!menu.contains(event.target) && !menu.previousElementSibling.contains(event.target)) {
            menu.style.display = "none";
        }
    });
});

const cartSidebar = document.querySelector(".cartsidebar")
const cartSidebarOpen = document.getElementById("Cartsidebaropen")
const cartSidebarClose = document.getElementById("Cartsidebarclose")
cartSidebarOpen.addEventListener("click", function () {
    cartSidebar.style.display = "flex"
})
cartSidebarClose.addEventListener("click", function () {
    cartSidebar.style.display = "none"
})
document.addEventListener('DOMContentLoaded', function () {
    const plusButtons = document.querySelectorAll('.quantity-btn.plus');
    const minusButtons = document.querySelectorAll('.quantity-btn.minus');
    const removeButtons = document.querySelectorAll('.remove-btn');
    const shippingOptions = document.querySelectorAll('input[name="shipping"]');

    plusButtons.forEach(button => {
        button.addEventListener('click', function () {
            const quantityInput = this.parentElement.querySelector('.quantity-input');
            const cartItem = this.closest('.cart-item');

            let quantity = parseInt(quantityInput.value);
            quantity++;
            quantityInput.value = quantity;

            updateItemSubtotal(cartItem, quantity);

            updateCartSummary();
        });
    });

    minusButtons.forEach(button => {
        button.addEventListener('click', function () {
            const quantityInput = this.parentElement.querySelector('.quantity-input');
            const cartItem = this.closest('.cart-item');

            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity;

                updateItemSubtotal(cartItem, quantity);

                updateCartSummary();
            }
        });
    });

    const quantityInputs = document.querySelectorAll('.quantity-input');
    quantityInputs.forEach(input => {
        input.addEventListener('change', function () {
            const cartItem = this.closest('.cart-item');
            let quantity = parseInt(this.value);

            if (isNaN(quantity) || quantity < 1) {
                quantity = 1;
                this.value = 1;
            }

            updateItemSubtotal(cartItem, quantity);

            updateCartSummary();
        });
    });

    removeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const cartItem = this.closest('.cart-item');
            cartItem.remove();

            updateCartSummary();
        });
    });

    shippingOptions.forEach(option => {
        option.addEventListener('change', function () {
            updateCartSummary();
        });
    });

    function updateItemSubtotal(cartItem, quantity) {
        const priceText = cartItem.querySelector('.price-col').textContent;
        const price = parseFloat(priceText.replace('$', ''));
        const subtotal = price * quantity;

        cartItem.querySelector('.subtotal-col').textContent = '$' + subtotal.toFixed(2);
    }

    function updateCartSummary() {
        const subtotalElements = document.querySelectorAll('.subtotal-col');
        let subtotal = 0;

        subtotalElements.forEach(element => {
            if (element.closest('.cart-item')) {
                subtotal += parseFloat(element.textContent.replace('$', ''));
            }
        });

        let shippingCost = 0;
        const selectedShipping = document.querySelector('input[name="shipping"]:checked');
        if (selectedShipping) {
            const shippingPriceText = selectedShipping.closest('.shipping-option').querySelector('.shipping-price').textContent;
            if (shippingPriceText.includes('+')) {
                shippingCost = parseFloat(shippingPriceText.replace('+$', ''));
            }
        }

        const total = subtotal + shippingCost;

        document.querySelector('.summary-row:not(.total) .summary-price').textContent = '$' + subtotal.toFixed(2);
        document.querySelector('.summary-row.total .summary-price').textContent = '$' + total.toFixed(2);
    }

    updateCartSummary();
});
document.addEventListener('DOMContentLoaded', function () {
    const validCoupons = {
        'SALOM10': 10,
        'SALOM20': 20,
        'SALOM30': 30,
        'SALOM40': 40,
        'SALOM50': 50
    };

    const couponInput = document.querySelector('.coupon-input');
    const applyButton = document.querySelector('.apply-btn');

    if (!couponInput || !applyButton) {
        console.error('Coupon elements not found');
        return;
    }

    console.log('Coupon elements found:', couponInput, applyButton);

    function applyCouponIsolated() {
        console.log('Apply coupon function called');

        const couponCode = couponInput.value.trim().toUpperCase();
        console.log('Coupon code entered:', couponCode);

        if (!couponCode) {
            alert('Please enter a coupon code');
            return;
        }

        const subtotalElement = document.querySelector('.summary-row:not(.total) .summary-price');
        if (!subtotalElement) {
            console.error('Subtotal element not found');
            return;
        }

        const totalElement = document.querySelector('.summary-row.total .summary-price');
        if (!totalElement) {
            console.error('Total element not found');
            return;
        }

        if (validCoupons[couponCode]) {
            const discountPercentage = validCoupons[couponCode];
            console.log('Valid coupon found:', couponCode, discountPercentage);

            const subtotal = parseFloat(subtotalElement.textContent.replace('$', ''));
            console.log('Subtotal:', subtotal);

            const discountAmount = (subtotal * discountPercentage) / 100;
            console.log('Discount amount:', discountAmount);

            let shippingCost = 0;
            const shippingOption = document.querySelector('input[name="shipping"]:checked');
            if (shippingOption) {
                const shippingLabel = shippingOption.closest('.shipping-option').querySelector('.shipping-price').textContent;
                shippingCost = shippingLabel.includes('+') ? 15 : 0;
            }
            console.log('Shipping cost:', shippingCost);

            const newTotal = subtotal - discountAmount + shippingCost;
            console.log('New total:', newTotal);

            totalElement.textContent = '$' + newTotal.toFixed(2);

            let discountRow = document.querySelector('.discount-row');
            if (!discountRow) {
                discountRow = document.createElement('div');
                discountRow.className = 'summary-row discount-row';

                const totalRow = document.querySelector('.summary-row.total');
                if (totalRow && totalRow.parentNode) {
                    totalRow.parentNode.insertBefore(discountRow, totalRow);
                } else {
                    console.error('Could not find total row');
                    return;
                }
            }

            discountRow.innerHTML = `
          <span>Discount (${couponCode})</span>
          <span class="discount-amount">-$${discountAmount.toFixed(2)}</span>
        `;


        } else {
            console.log('Invalid coupon:', couponCode);
            alert('Invalid coupon code. Please try again.');
        }
    }

    applyButton.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Apply button clicked');
        applyCouponIsolated();
    });

    couponInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log('Enter key pressed in coupon input');
            applyCouponIsolated();
        }
    });

    console.log('Isolated coupon functionality initialized');
});
// Accordion 
document.querySelectorAll('.nav-header').forEach(header => {
    header.addEventListener('click', () => {
        header.classList.toggle('active');

        const submenu = header.nextElementSibling;
        submenu.classList.toggle('active');

        document.querySelectorAll('.nav-header').forEach(otherHeader => {
            if (otherHeader !== header && otherHeader.classList.contains('active')) {
                otherHeader.classList.remove('active');
                otherHeader.nextElementSibling.classList.remove('active');
            }
        });
    });
});
const sidebarcloseBtn = document.querySelector(".Sidebarclose-btn")
const sidebar = document.querySelector(".orbteur")
const sidebarOpen = document.querySelector(".SidebarOpenBtn")
sidebarOpen.addEventListener('click', function () {
    sidebar.style.display = "block"
});
sidebarcloseBtn.addEventListener('click', function () {
    sidebar.style.display = "none"
});
const ChekoutPageOpen = document.getElementById("ChekoutPage__open")
const checkoutpage = document.getElementById("checkout")
const pagesPage = document.getElementById("pages")
ChekoutPageOpen.addEventListener("click", function () {
    checkoutpage.style.display = "block"
    pagesPage.style.display = "none"
    a
})