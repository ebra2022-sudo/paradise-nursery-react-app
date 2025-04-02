import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Don't show header on landing page
  if (location.pathname === '/') return null;

  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="Paradise Nursery Logo" />
        <span>Paradise Nursery</span>
        <span className="tagline">Where Green Meets Serenity</span>
      </div>
      <nav>
        {location.pathname === '/products' ? (
          <Link to="/cart">Cart</Link>
        ) : (
          <Link to="/products">Plants</Link>
        )}
        <div className="cart-icon">
          <span>🛒</span>
          <span className="cart-count">{totalItems}</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;