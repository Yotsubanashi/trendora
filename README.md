# Trendora - Fashion & Lifestyle E-Commerce Website

A modern, responsive, and interactive online shopping website interface built with pure HTML, CSS, and JavaScript.

## 🎨 Brand Identity

**Color Palette:**
- Primary (60%): Midnight Navy `#1F2A44` - Header, navigation, footer
- Secondary (30%): Soft Coral `#FF6F61` - Prices, discounts, highlights
- Accent (10%): Warm Peach `#FFD6C9` - CTA buttons, sale badges, hover states
- Background: Off-White `#FAFAFA` - Main background
- Text: Charcoal `#2B2B2B` - Product names and descriptions

**Typography:**
- Headings & Logo: Poppins (SemiBold/Bold)
- Body & Buttons: Inter (Regular/Medium)

## 📁 Project Structure

```
ETECH/
├── index.html              # Home page with product sections
├── category.html           # Category/collection page
├── product-details.html    # Individual product details page
├── cart.html              # Shopping cart page
├── login.html             # Login/signup page
├── styles.css             # Shared CSS styles
├── script.js              # Shared JavaScript functionality
└── README.md              # This file
```

## 🚀 Features

### 1. **Home Page (index.html)**
- Auto-rotating promotional banner carousel
- Horizontal scrolling category menu
- Flash Deals section with countdown timer
- Multiple product sections (Best Sellers, New Arrivals, Recommended, Trending)
- 30+ product cards with real images
- Product hover effects and animations
- Wishlist functionality
- Add to cart with live feedback

### 2. **Category Page (category.html)**
- Dynamic category hero section
- Price range filters
- Sort options (Featured, Price, Rating, Newest)
- Responsive product grid
- Pagination
- Category-based product display
- URL parameter support for different categories

### 3. **Product Details Page (product-details.html)**
- Image gallery with thumbnails
- Product information and pricing
- Size and color selection
- Quantity selector
- Customer reviews section
- Product features list
- Related products section
- Add to cart functionality

### 4. **Shopping Cart (cart.html)**
- Cart items with quantity controls
- Real-time price calculations
- Promo code functionality (Use: `TRENDORA10` for 10% off)
- Order summary with tax and shipping
- Remove items functionality
- Empty cart state
- Related products suggestions

### 5. **Login/Signup Page (login.html)**
- Toggle between login and signup forms
- Social login buttons (Google, Facebook)
- Form validation
- Remember me option
- Forgot password link
- User session management (localStorage)

## 🎯 Interactive Features

### Navigation
- Sticky navigation bar
- Clickable logo → Home page
- Clickable categories → Category pages
- Clickable products → Product details
- Cart icon → Shopping cart
- User icon → Login page
- Search bar (frontend UI)

### Shopping Cart
- LocalStorage-based cart system
- Add items from any page
- Update quantities
- Remove items
- Persistent cart across pages
- Live cart badge counter

### Wishlist
- LocalStorage-based wishlist
- Add/remove from wishlist
- Heart icon toggle animation
- Persistent across pages

### Product Interactions
- Hover effects on product cards
- Image zoom on product details
- Size and color selection
- Quantity controls
- Rating display
- Sale badges

## 💻 How to Use

1. **Open the website:**
   - Simply open `index.html` in any modern web browser
   - No server or installation required!

2. **Navigate through pages:**
   - Click the Trendora logo to return home
   - Click any category to view products
   - Click any product card to see details
   - Click cart icon to view shopping cart
   - Click user icon to login/signup

3. **Shopping Features:**
   - Add products to cart
   - Click heart icon to add to wishlist
   - Adjust quantities in cart
   - Use promo code `TRENDORA10` for discount
   - View order summary

4. **User Account:**
   - Create an account on login page
   - User data stored in browser localStorage
   - Session persists across page loads

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Desktop (1400px+) - 6 products per row
- Laptop (1200px) - 4 products per row
- Tablet (768px) - 3 products per row
- Mobile (480px) - 2 products per row

## 🎨 Design Highlights

- **Modern Shopee-inspired layout**
- **Product-dense design** - Maximum products visible without clutter
- **Smooth animations and transitions**
- **Rounded cards and buttons**
- **Subtle shadows for depth**
- **Clean, energetic color palette**
- **Professional typography**

## 🔧 Customization

### Adding New Products
Edit any HTML file and add product cards using this template:

```html
<div class="product-card" data-product-id="UNIQUE_ID">
    <div class="product-image">
        <img src="YOUR_IMAGE_URL" alt="Product Name">
        <span class="sale-badge">-XX%</span>
        <div class="wishlist-icon"><i class="far fa-heart"></i></div>
    </div>
    <div class="product-info">
        <div class="product-name">Your Product Name</div>
        <div class="product-price">
            <span class="current-price">$XX</span>
            <span class="original-price">$XX</span>
        </div>
        <div class="product-rating">
            <span class="stars">★★★★★</span>
            <span class="reviews">(XXX)</span>
        </div>
        <button class="add-to-cart-btn">Add to Cart</button>
    </div>
</div>
```

### Changing Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --midnight-navy: #1F2A44;
    --soft-coral: #FF6F61;
    --warm-peach: #FFD6C9;
    --off-white: #FAFAFA;
    --charcoal: #2B2B2B;
}
```

### Adding Categories
Update the category menu in each HTML file and create corresponding category pages.

## 🌟 Key Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid, Flexbox, animations
- **JavaScript (ES6)** - Interactive functionality
- **LocalStorage API** - Data persistence
- **Font Awesome** - Icons
- **Google Fonts** - Poppins & Inter typography
- **Unsplash** - Product images

## 📝 Notes

- This is a **frontend-only demo** with no backend functionality
- Cart and user data stored in browser's localStorage
- No real payment processing
- Product images from Unsplash
- Promo code: `TRENDORA10` gives 10% discount

## 🎓 Learning Features

This project demonstrates:
- Responsive web design
- CSS Grid and Flexbox layouts
- JavaScript DOM manipulation
- LocalStorage API usage
- Form handling
- Image galleries
- Shopping cart logic
- Dynamic content updates
- URL parameters
- Session management

## 📞 Support

For any questions or issues, refer to the inline code comments or modify the code to suit your needs.

---

**Trendora** - *"Where Style Meets Trendora"*

© 2026 Trendora. All rights reserved.
