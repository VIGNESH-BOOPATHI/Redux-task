// Import necessary dependencies and icons
import React, { useState } from 'react';
import { IoCartSharp } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux'; // Import Redux Hooks
import { removeFromCart, increaseQuantity, decreaseQuantity } from './cartSlice'; // Import Redux actions

// Navbar component
function Navbar() {
  // State and dispatch functions
  const cartItems = useSelector(state => state.cart.cartItems); // Access cartItems from Redux store
  const dispatch = useDispatch(); // Get the dispatch function
  const [showLinks, setShowLinks] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for cart popup

  // Toggle links visibility
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Handle cart icon click
  const handleCartClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Close cart popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Return JSX for navbar
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-xl">
        <a className="navbar-brand" href="#!">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleLinks}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            showLinks ? 'show' : ''
          }`}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#!">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                About
              </a>
            </li>
            <li className={`nav-item dropdown ${showDropdown ? 'show' : ''}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                onClick={toggleDropdown}
              >
                Shop
              </a>
              <ul
                className={`dropdown-menu ${showDropdown ? 'show' : ''}`}
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#!">
                    All Products
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Popular Items
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className={`d-flex ${showLinks ? 'show' : ''}`}>
            <button className="btn btn-outline-dark" type="button" onClick={handleCartClick}>
              <IoCartSharp size={25} />
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {cartItems.length}
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Render the popup if isPopupOpen is true */}
      {isPopupOpen && (
        <div className="cart-popup-overlay">
          <div className="cart-popup-container">
            <h1>Cart</h1>
            <hr />
            {cartItems.length === 0 ? (
              <div><h3>No Items in Cart</h3></div>
            ) : (
              <>
               {cartItems.map((item) => (
  <div key={item.id} className="cart-item">
    <div>{item.title}</div>
    <div>
      <button onClick={() => dispatch(increaseQuantity(item.id))} className="btn btn-outline-danger">+</button>
      <span>{item.quantity}</span>
      <button onClick={() => dispatch(decreaseQuantity(item.id))} className="btn btn-outline-danger">-</button>
    </div>
    <div>${item.price * item.quantity}</div>
    <button onClick={() => dispatch(removeFromCart(item.id))} className="btn btn-outline-danger">Remove</button>
  </div>
))}

                <h4>
                  Total Quantity: {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </h4>
                <h1>
                  Total Amount: ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}
                </h1>
              </>
            )}
            <button onClick={closePopup} className="btn btn-outline-dark mt-3" id='CartX'>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
}

// Export Navbar component
export default Navbar;
