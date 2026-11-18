import { useCart } from "../../context/useCart";
import "./Coffee__card.css";

const Coffee_card = ({ item }) => {
  const { addToCart } = useCart();
  return (
    <div className="coffee-card">
      <div className="coffee-card-media">
        <button
          className="coffee-card-add"
          aria-label={`Add ${item.name} to order`}
          onClick={() => addToCart(item)}
        >
          +
        </button>
        <img className="coffee-card-image" src={item.image} alt={item.name} />
      </div>

      <div className="coffee-card-body">
        <p className="coffee-card-price">{item.price}€</p>
        <p className="coffee-card-name">{item.name}</p>
      </div>
    </div>
  );
};

export default Coffee_card;
