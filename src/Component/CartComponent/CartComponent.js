import React from 'react';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  

  return (
    <div className="container mt-5">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="row border rounded shadow-md p-4 align-items-center">
              {/* Image */}
              <div className="col-md-3">
                <img
                  className="img-fluid rounded"
                  src={item.image}
                  alt={item.name}
                  style={{ maxHeight: '150px', width: 'auto' }}
                />
              </div>

              {/* Item Details */}
              <div className="col-md-6">
                <h5 className="font-semibold text-lg">{item.name}</h5>
                <p className="text-gray-500 text-sm">{item.description}</p>

                {/* Quantity Controls */}
                <div className="d-flex align-items-center mt-2">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price and Actions */}
              <div className="col-md-3 text-end">
                <p className="text-gray-900 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Subtotal & Checkout */}
          <div className="d-flex justify-content-between align-items-center border-top pt-4 mt-4">
            <h3 className="text-xl font-semibold">Subtotal: ${subtotal.toFixed(2)}</h3>
            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;