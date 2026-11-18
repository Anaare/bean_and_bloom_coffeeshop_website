import { menu_items } from "../../data/menuData";
import "./Menu.css";
import coffee from "/images/coffee__beans.jpeg";

function Menu() {
  return (
    <section className="menu">
      <div className="container menu-container">
        <div className="menu-content">
          <p className="menu-label">Our Menu</p>
          <h1 className="menu-title">Coffee &amp; More</h1>

          <ul className="menu-list">
            {menu_items.map((item) => (
              <li key={item.name} className="menu-item">
                <span className="menu-item-name">{item.name}</span>
                <span className="menu-item-price">
                  {item.price.toFixed(2)} €
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="menu-image-wrapper">
          <img
            src={coffee}
            alt="Iced coffee with milk in a glass"
            className="menu-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Menu;
