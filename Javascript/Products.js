let currentPage = 1;
const productsPerPage = 9;
const allProducts = document.querySelectorAll('.product-card');

function displayProducts() {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    allProducts.forEach((product, index) => {
        if (index >= startIndex && index < endIndex) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function changePage(direction) {
    if (direction === 'next') {
        currentPage++;
        if (currentPage > Math.ceil(allProducts.length / productsPerPage)) {
            currentPage = 1;
        }
    } else if (direction === 'prev') {
        currentPage--;
        if (currentPage < 1) {
            currentPage = Math.ceil(allProducts.length / productsPerPage);
        }
    }
    displayProducts();
}

function searchProducts() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    allProducts.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

document.getElementById('category-filter').addEventListener('change', filterProducts);
document.getElementById('price-sort').addEventListener('change', sortProducts);

function filterProducts() {
    const category = document.getElementById('category-filter').value;
    allProducts.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function sortProducts() {
    const sortOption = document.getElementById('price-sort').value;
    const sortedProducts = Array.from(allProducts).sort((a, b) => {
        const priceA = parseFloat(a.querySelector('p').textContent.replace('$', ''));
        const priceB = parseFloat(b.querySelector('p').textContent.replace('$', ''));
        
        if (sortOption === 'low-high') {
            return priceA - priceB;
        } else if (sortOption === 'high-low') {
            return priceB - priceA;
        }
        return 0;
    });
    
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    sortedProducts.forEach(product => {
        grid.appendChild(product);
    });
}

function quickView(name, price) {
    alert(`Quick view for ${name}, priced at $${price}`);
}

function addToCart(name, price) {
    alert(`${name} has been added to your cart!`);
}

// Initialize the first page of products
displayProducts();
