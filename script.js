// Trendora E-Commerce Website - Shared JavaScript

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('trendoraCart')) || [];

// Update cart badge
function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = totalItems;
    }
}

// Add item to cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem('trendoraCart', JSON.stringify(cart));
    updateCartBadge();

    // Show notification
    showNotification('Added to cart!');
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('trendoraCart', JSON.stringify(cart));
    updateCartBadge();
}

// Update cart item quantity
function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('trendoraCart', JSON.stringify(cart));
            updateCartBadge();
        }
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #FF6F61;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Banner Carousel functionality
function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    if (!slides.length) return;

    let currentSlide = 0;

    function showSlide(index) {
        const slidesContainer = document.querySelector('.carousel-slides');
        if (slidesContainer) {
            slidesContainer.style.transform = `translateX(-${index * 100}%)`;

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Auto-advance carousel
    setInterval(nextSlide, 5000);

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
}

// Category menu active state
function initCategoryMenu() {
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // If it's a link, navigate after animation
            if (item.tagName === 'A') {
                setTimeout(() => {
                    window.location.href = item.href;
                }, 200);
            }
        });
    });
}

// Wishlist functionality
function initWishlist() {
    const wishlistIcons = document.querySelectorAll('.wishlist-icon');
    let wishlist = JSON.parse(localStorage.getItem('trendoraWishlist')) || [];

    wishlistIcons.forEach(icon => {
        const productCard = icon.closest('.product-card');
        const productId = productCard?.dataset.productId;

        // Check if already in wishlist
        if (productId && wishlist.includes(productId)) {
            const heart = icon.querySelector('i');
            heart.classList.remove('far');
            heart.classList.add('fas');
            icon.style.color = 'var(--soft-coral)';
        }

        icon.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const heart = icon.querySelector('i');

            if (heart.classList.contains('far')) {
                heart.classList.remove('far');
                heart.classList.add('fas');
                icon.style.color = 'var(--soft-coral)';

                if (productId) {
                    wishlist.push(productId);
                    showNotification('Added to wishlist!');
                }
            } else {
                heart.classList.remove('fas');
                heart.classList.add('far');
                icon.style.color = '';

                if (productId) {
                    wishlist = wishlist.filter(id => id !== productId);
                    showNotification('Removed from wishlist');
                }
            }

            localStorage.setItem('trendoraWishlist', JSON.stringify(wishlist));
        });
    });
}

// Flash timer countdown
function initFlashTimer() {
    const timerDigits = document.querySelectorAll('.timer-digit');

    if (!timerDigits.length) return;

    function updateTimer() {
        let hours = parseInt(timerDigits[0].textContent);
        let minutes = parseInt(timerDigits[1].textContent);
        let seconds = parseInt(timerDigits[2].textContent);

        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 23;
                }
            }
        }

        timerDigits[0].textContent = hours.toString().padStart(2, '0');
        timerDigits[1].textContent = minutes.toString().padStart(2, '0');
        timerDigits[2].textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateTimer, 1000);
}

// Add to cart button functionality
function initAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const productCard = button.closest('.product-card');
            const productId = productCard?.dataset.productId;
            const productName = productCard?.querySelector('.product-name')?.textContent;
            const productPrice = productCard?.querySelector('.current-price')?.textContent;
            const productImage = productCard?.querySelector('.product-image img')?.src;

            if (productId && productName && productPrice) {
                addToCart({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    image: productImage || ''
                });

                // Button animation
                const originalText = button.textContent;
                button.textContent = 'Added!';
                button.style.backgroundColor = 'var(--soft-coral)';
                button.style.color = 'white';

                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = '';
                    button.style.color = '';
                }, 1500);
            }
        });
    });
}

// Product card click handler
function initProductCards() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.add-to-cart-btn') &&
                !e.target.closest('.wishlist-icon')) {
                const productId = card.dataset.productId;
                if (productId) {
                    window.location.href = `product-details.html?id=${productId}`;
                }
            }
        });
    });
}

// Smooth scroll for category menu
function initCategoryScroll() {
    const categoryScroll = document.querySelector('.category-scroll');

    if (!categoryScroll) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    categoryScroll.addEventListener('mousedown', (e) => {
        isDown = true;
        categoryScroll.style.cursor = 'grabbing';
        startX = e.pageX - categoryScroll.offsetLeft;
        scrollLeft = categoryScroll.scrollLeft;
    });

    categoryScroll.addEventListener('mouseleave', () => {
        isDown = false;
        categoryScroll.style.cursor = 'grab';
    });

    categoryScroll.addEventListener('mouseup', () => {
        isDown = false;
        categoryScroll.style.cursor = 'grab';
    });

    categoryScroll.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - categoryScroll.offsetLeft;
        const walk = (x - startX) * 2;
        categoryScroll.scrollLeft = scrollLeft - walk;
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    initCarousel();
    initCategoryMenu();
    initWishlist();
    initFlashTimer();
    initAddToCartButtons();
    initProductCards();
    initCategoryScroll();
});
