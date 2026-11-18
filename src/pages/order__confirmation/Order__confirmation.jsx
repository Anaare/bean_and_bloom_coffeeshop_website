import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useCart } from "../../context/useCart";
import "./Order__confirmation.css";

function Order__confirmation() {
  const {
    cartItems,
    cartCount,
    cartTotal,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  } = useCart();
  const [ordered, setOrdered] = useState(false);

  const handleOrder = () => {
    // later: send the order to a backend / email here
    clearCart();
    setOrdered(true);
  };

  if (ordered) {
    return (
      <section className="cart">
        <div className="container cart-empty">
          <h1 className="cart-title">Thank you!</h1>
          <p>Your order has been placed. We'll have it ready soon.</p>
          <Link to="/order__online" className="cart-btn">
            Order something else
          </Link>
        </div>
      </section>
    );
  }

  if (cartItems.length === 0) {
    return (
      <section className="cart">
        <div className="container cart-empty">
          <h1 className="cart-title">Your bag is empty</h1>
          <p>Looks like you haven't picked anything yet.</p>
          <Link to="/order__online" className="cart-btn">
            Browse the menu
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="cart">
      <div className="container">
        <h1 className="cart-title">Your order ({cartCount})</h1>

        <div className="cart-layout">
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">{item.price}€</p>

                  <div className="cart-qty">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      aria-label={`Decrease ${item.name}`}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      aria-label={`Increase ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  <X size={18} />
                </button>
              </li>
            ))}
          </ul>

          <aside className="cart-summary">
            <h2 className="cart-summary-title">Summary</h2>
            <div className="cart-summary-row">
              <span>Items</span>
              <span>{cartCount}</span>
            </div>
            <div className="cart-summary-row cart-summary-total">
              <span>Total</span>
              <span>{cartTotal.toFixed(2)}€</span>
            </div>
            <button className="cart-btn" onClick={handleOrder}>
              Place order
              <span className="cart-btn-arrow">→</span>
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Order__confirmation;
