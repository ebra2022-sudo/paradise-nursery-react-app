import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>Unit Price: ${item.price.toFixed(2)}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrease}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
        <button onClick={handleRemove} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;