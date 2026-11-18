# Bean & Bloom ☕

A responsive coffee shop website built with React. Visitors can browse the café, explore the menu, order online by adding drinks and pastries to a cart, and review their order before placing it.

---

## Features

✅ Responsive design for desktop, tablet and mobile  
✅ Mobile hamburger menu that collapses the navigation  
✅ Online ordering page with a product card grid  
✅ Add-to-cart button on every card, with a live item count on the cart icon  
✅ Cart page with quantity controls, item removal and an order total  
✅ Empty-cart and order-placed states  
✅ Consistent brand styling through a shared color palette and typography

---

## Demo

**Live demo:** [https://bean-and-bloom-coffeeshop-website-q.vercel.app/](https://bean-and-bloom-coffeeshop-website-q.vercel.app/)

---

## Tech Stack

- Frontend: React (functional components, hooks), built with Vite
- Routing: React Router
- State Management: React Context API (cart state shared between the navbar, order page and cart page)
- Icons: Lucide React
- Styling: Plain CSS with custom properties (design tokens for colors and fonts)
- Fonts: Playfair Display and DM Sans (Google Fonts)
- Deployment: Vercel

---

## Pages

| Route                  | Page                                                      |
| ---------------------- | --------------------------------------------------------- |
| `/`                    | Home                                                      |
| `/menu`                | Menu                                                      |
| `/about`               | About                                                     |
| `/contact`             | Contact                                                   |
| `/order__online`       | Order online: browse items and add them to the cart       |
| `/order__confirmation` | Cart: review items, change quantities and place the order |

---

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/bean-and-bloom.git
   cd bean-and-bloom
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm run dev
   ```
4. Open your browser at http://localhost:5173

To create a production build:

```bash
npm run build
npm run preview
```

No API keys or environment variables are needed.

---

## Usage

- Use the navigation bar (or the hamburger menu on mobile) to move between pages
- Open **Order** to see the full menu as cards
- Click the **+** button on a card to add it to your order. The cart icon in the navbar updates with the number of items
- Click the **cart icon** to open your order
- Use **−** and **+** to change quantities, or the **X** to remove an item
- Click **Place order** when you're ready

---

## Project Structure

```
src/
├── components/
│   ├── coffee__card/     # Menu item card with add-to-cart button
│   └── navbar/           # Responsive navbar with cart icon
├── context/
│   ├── CartContext.js    # Context object
│   ├── CartProvider.jsx  # Cart state and actions (add, remove, quantity, total)
│   └── useCart.js        # Hook for reading the cart
├── data/
│   └── menuData.js       # Menu items (id, name, price, image)
├── pages/                # One folder per page, each with its own CSS
├── Router.jsx            # Route definitions
└── index.css             # Global styles and design tokens
```

---

## Design System

The site uses a small set of CSS variables defined in `index.css`:

| Token              | Color     |
| ------------------ | --------- |
| `--color-cream`    | `#f5eee5` |
| `--color-espresso` | `#4b3428` |
| `--color-sage`     | `#78816a` |
| `--color-caramel`  | `#c99b72` |
| `--color-charcoal` | `#29251f` |

Headings use **Playfair Display** and body text uses **DM Sans**.

---

## Limitations & Future Improvements

- "Place order" currently only clears the cart and shows a confirmation message. There is no backend yet, so orders are not sent anywhere
- The cart lives in React state, so it resets when the page is refreshed

---
