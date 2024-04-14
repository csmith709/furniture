import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../../context/ShopContext';
import '../quantity/Quantitybtn.css';

const Quantitybtn = ({ itemId, minValue = 0, maxValue = 24 }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the count when the cartItems change
    setCount(cartItems[itemId] || minValue);
  }, [cartItems, itemId, minValue]);

  // function to handle incrementing the counter
  const handleIncCounter = () => {
    if (count < maxValue) {
      setCount(prevCount => prevCount + 1);
      addToCart(itemId);
    }
  };

  // function to handle the decrement counter
  const handleDecCounter = () => {
    if (count > minValue) {
      setCount(prevCount => prevCount - 1);
      removeFromCart(itemId);
    }
  };

  return (
    <div className="btn-group">
      <button className="decrement-btn" onClick={handleDecCounter}>
        <span className="material-symbols-outlined">remove</span>
      </button>

      <p className="pcount">{count}</p>

      <button className="increment-btn" onClick={handleIncCounter}>
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
};

export default Quantitybtn;
