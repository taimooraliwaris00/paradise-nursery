import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../redux/CartSlice';
import './Navbar.css';

export default function Navbar() {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path d="M12 2c-3 3-5 6-5 9a5 5 0 0 0 10 0c0-3-2-6-5-9z" fill="#E3A857" />
          </svg>
        </span>
        Paradise Nursery
      </div>
      <nav className="navbar__links" aria-label="Main navigation">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')}>
          Home
        </NavLink>
        <NavLink to="/plants" className={({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')}>
          Plants
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')}>
          <span className="navbar__cart">
            Cart
            <span className="navbar__cart-badge" aria-label={`${totalQuantity} items in cart`}>
              {totalQuantity}
            </span>
          </span>
        </NavLink>
      </nav>
    </header>
  );
}
