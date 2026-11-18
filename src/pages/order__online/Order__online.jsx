import Coffee_card from "../../components/coffee__card/Coffee__card";
import { menu_items } from "../../data/menuData";
import "./Order__online.css";

function Order__online() {
  return (
    <section className="order-online">
      <div className="container">
        <div className="order-grid">
          {menu_items.map((item) => (
            <Coffee_card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Order__online;
