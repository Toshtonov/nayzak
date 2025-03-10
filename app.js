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
let singinbtn = document.getElementById("login");
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


navbaropen.onclick = function () {
    nabar.style.display = "block";
}
navbarno.onclick = function () {
    nabar.style.display = "none";
}
window.onclick = function (even) {
    if (even.target == nabar) {
        nabar.style.display = "none";
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
// seles card page
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
    setInterval(showModal, 30000);

});


// Sahifadagi boshqa joyga bosilsa, barcha menyular yopiladi
document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-content").forEach(menu => {
        menu.style.display = "none";
    });
});




const SreachCards = document.querySelector(".sreachPageCards");

fetch("../data/product.json")
    .then((response) => response.json()) // JSON formatga o'tkazish
    .then((products) => SreachProducts(products)) // Ma'lumotlarni chiqarish
    .catch((error) => console.error("Ma'lumot yuklashda xatolik:", error));

function SreachProducts(products) {
    products.forEach((product) => { // forEach() orqali har bir mahsulotni qo'shish
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
    // Get the container and all layout buttons
    const cardsContainer = document.querySelector('.sreachPageCards');
    const gridButton = document.querySelector('.fa-th');
    const threeColButton = document.querySelector('.fa-bars');
    const listButton = document.querySelector('.fa-list');

    // Function to handle layout changes
    function changeLayout(layoutType) {
        // Remove all possible layout classes first
        cardsContainer.classList.remove('grid-view', 'three-column-view', 'list-view');

        // Add the selected layout class
        cardsContainer.classList.add(layoutType);

        // Remove active state from all buttons
        gridButton.classList.remove('active');
        threeColButton.classList.remove('active');
        listButton.classList.remove('active');

        // Add active state to clicked button
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

    // Add click event listeners to buttons
    gridButton.addEventListener('click', () => changeLayout('grid-view'));
    threeColButton.addEventListener('click', () => changeLayout('three-column-view'));
    listButton.addEventListener('click', () => changeLayout('list-view'));

    // Set default view
    changeLayout('grid-view');
}

// Add the required CSS
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
    // Category and style selection
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

    // Color selection
    const colorCircles = document.querySelectorAll('.color-circle');

    colorCircles.forEach(circle => {
        circle.addEventListener('click', function () {
            colorCircles.forEach(c => {
                // Remove any existing after elements
                c.style.boxShadow = 'none';
                c.style.position = '';
            });

            // Add selection indicator
            this.style.position = 'relative';
            this.style.boxShadow = `0 0 0 3px ${this.style.backgroundColor}, 0 0 0 4px #ddd`;
        });
    });

    // Size selection
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

    // Price range slider
    const minPriceSlider = document.getElementById('min-price');
    const maxPriceSlider = document.getElementById('max-price');
    const priceRangeDisplay = document.querySelector('.price-range');

    function updatePriceRange() {
        const minPrice = parseInt(minPriceSlider.value);
        const maxPrice = parseInt(maxPriceSlider.value);

        if (minPrice > maxPrice) {
            // Prevent min from being greater than max
            minPriceSlider.value = maxPrice;
        }

        priceRangeDisplay.textContent = `$${minPriceSlider.value} - $${maxPriceSlider.value}`;
    }

    minPriceSlider.addEventListener('input', updatePriceRange);
    maxPriceSlider.addEventListener('input', updatePriceRange);

    const filterCont= document.querySelector('.filter-container')
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', function () {
        filterCont.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Thumbnail image click handler
    const thumbnails = document.querySelectorAll(".thumbnail")
    const mainImage = document.getElementById("main-product-image")

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", function () {
            // In a real implementation, we would change the src to the actual image
            // For this demo, we're just toggling the active class
            thumbnails.forEach((t) => t.classList.remove("active"))
            this.classList.add("active")
        })
    })

    // Color selection
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

   

    // Tab functionality
    const tabHeaders = document.querySelectorAll(".tab-header")
    const tabPanels = document.querySelectorAll(".tab-panel")

    tabHeaders.forEach((header) => {
        header.addEventListener("click", function () {
            const tabId = this.getAttribute("data-tab")

            // Remove active class from all headers and panels
            tabHeaders.forEach((h) => h.classList.remove("active"))
            tabPanels.forEach((p) => p.classList.remove("active"))

            // Add active class to clicked header and corresponding panel
            this.classList.add("active")
            document.getElementById(tabId).classList.add("active")
        })
    })

    const addToCartBtn = document.querySelector(".add-to-cart-btn")

  
})
document.querySelectorAll(".dropdown-btn").forEach(button => {
    button.addEventListener("click", function (event) {
        event.stopPropagation(); // Boshqa eventlarni to‘xtatish

        let menu = this.parentElement.querySelector(".dropdown-content"); // Tugma ichidagi menyuni olish
        let allMenus = document.querySelectorAll(".dropdown-content");

        // Barcha dropdownlarni yopish
        allMenus.forEach(m => {
            if (m !== menu) {
                m.style.display = "none";
            }
        });

        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });
});

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
    document.querySelectorAll(".dropdown-content").forEach(menu => {
        if (!menu.contains(event.target) && !menu.previousElementSibling.contains(event.target)) {
            menu.style.display = "none";
        }
    });
});
