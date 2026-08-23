# Paradise Nursery

Paradise Nursery is a dynamic shopping cart web application for an online houseplant shop. It lets visitors browse plants by category, view details such as thumbnail, name, description, and price, add plants to a shopping cart, and manage cart items — adjusting quantities, removing items, and seeing the total cost update in real time.

## Features

- **Landing page** with the Paradise Nursery brand, a styled background, and a "Get Started" button that leads into the catalog.
- **About Us** section describing the company.
- **Product listing page** with plants grouped into three categories (Air-Purifying, Aromatic Fragrant, and Low-Maintenance Plants), each with a thumbnail, name, price, and an "Add to Cart" button that disables once the plant is in the cart.
- **Persistent navbar** on every page with links to Home, Plants, and Cart, plus a live item-count badge on the Cart link.
- **Shopping cart page** showing each item's thumbnail, name, unit price, and line subtotal, with buttons to increase/decrease quantity, a delete button per item, a running total, a "Checkout" button (shows a "coming soon" message), and a "Continue Shopping" button back to the catalog.

## Tech stack

- [React](https://react.dev/) (Vite)
- [Redux Toolkit](https://redux-toolkit.js.org/) for cart state management
- [React Router](https://reactrouter.com/) for navigation between the landing, product listing, and cart pages

## Project structure

```
src/
├── App.jsx / App.css          # Landing page (hero + background image)
├── AboutUs.jsx / AboutUs.css  # About Us section
├── ProductList.jsx / .css     # Product listing page
├── CartItem.jsx / .css        # Shopping cart page
├── components/
│   ├── Navbar.jsx / .css      # Shared navbar with cart count
│   └── PlantThumb.jsx / .css  # Illustrated plant thumbnail
├── data/
│   └── plants.js              # Plant catalog data, grouped by category
├── redux/
│   ├── CartSlice.jsx          # Redux slice for the shopping cart
│   └── store.js                # Redux store configuration
└── main.jsx                    # App entry point, Router + Redux Provider
```

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build

```bash
npm run build
```
