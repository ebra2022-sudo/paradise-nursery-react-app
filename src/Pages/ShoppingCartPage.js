import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

function ShoppingCartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <main className="shopping-cart">
      <h2>Shopping Cart</h2>
      <p>Total Cart Amount: ${totalCost}</p>
      <p>Total Items: {totalItems}</p>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
      <div className="cart-actions">
        <Link to="/products" className="continue-shopping-btn">
          Continue Shopping
        </Link>
        <button className="checkout-btn">Checkout</button>
      </div>
    </main>
  );
}

export default ShoppingCartPage;