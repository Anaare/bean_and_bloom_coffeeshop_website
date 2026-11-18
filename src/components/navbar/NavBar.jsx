import { Link, NavLink, useLocation } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import "../../components/navbar/NavBar.css";
import { useCart } from "../../context/useCart";

export default function Navbar() {
  const { pathname } = useLocation();
  const { cartCount } = useCart();
  const isHome = pathname === "/";

  return (
    <header className={`navbar-header ${isHome ? "" : "navbar-header--solid"}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          {/* Note: Since logo is in public/images/, use string path directly */}
          <img
            src="/images/logo.avif"
            alt="Bean & Bloom Coffee Co. Logo"
            className="logo-img"
          />
          <div>
            <h3>Bean & Bloom</h3>
            <h3>coffee co.</h3>
          </div>
        </Link>

        <nav className="navbar-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/order__online"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Order
          </NavLink>
        </nav>

        <Link
          to="/order__confirmation"
          className="navbar-cart-btn"
          aria-label={`Cart, ${cartCount} items`}
        >
          <ShoppingBag size={20} strokeWidth={1.75} />
          {cartCount > 0 && (
            <span key={cartCount} className="cart-badge">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
