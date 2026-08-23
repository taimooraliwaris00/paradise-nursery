import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import PlantThumb from './components/PlantThumb';
import { decrementQuantity, incrementQuantity, removeItem, selectCartItems, selectTotalAmount } from './redux/CartSlice';
import './CartItem.css';

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const [checkoutMessage, setCheckoutMessage] = useState(false);

  const handleCheckout = () => setCheckoutMessage(true);

  return (
    <div className="cart-page">
      <Navbar />

      <header className="cart-page__intro">
        <p className="cart-page__eyebrow">Your Cart</p>
        <h1>Shopping Cart</h1>
      </header>

      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty right now.</p>
            <button className="cart-btn cart-btn--primary" onClick={() => navigate('/plants')}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li className="cart-item" key={item.id}>
                  <div className="cart-item__thumb">
                    <PlantThumb
                      leafType={item.leafType}
                      leafColor={item.leafColor}
                      potColor={item.potColor}
                      variant={item.variant}
                    />
                  </div>

                  <div className="cart-item__details">
                    <h3 className="cart-item__name">{item.name}</h3>
                    <p className="cart-item__unit-price">${item.price.toFixed(2)} each</p>
                  </div>

                  <div className="cart-item__quantity">
                    <button
                      type="button"
                      className="cart-item__qty-btn"
                      aria-label={`Decrease quantity of ${item.name}`}
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      &minus;
                    </button>
                    <span className="cart-item__qty-value">{item.quantity}</span>
                    <button
                      type="button"
                      className="cart-item__qty-btn"
                      aria-label={`Increase quantity of ${item.name}`}
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>

                  <p className="cart-item__subtotal">${(item.price * item.quantity).toFixed(2)}</p>

                  <button
                    type="button"
                    className="cart-item__delete"
                    aria-label={`Remove ${item.name} from cart`}
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-summary">
              <div className="cart-summary__total">
                <span>Total Amount</span>
                <strong>${totalAmount.toFixed(2)}</strong>
              </div>

              <div className="cart-summary__actions">
                <button className="cart-btn cart-btn--ghost" onClick={() => navigate('/plants')}>
                  Continue Shopping
                </button>
                <button className="cart-btn cart-btn--primary" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>

              {checkoutMessage && (
                <p className="cart-summary__notice" role="status">
                  Checkout is coming soon — we're still potting this feature up!
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
