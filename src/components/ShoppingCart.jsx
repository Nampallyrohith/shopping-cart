import React, { useState } from "react";
import { PRODUCTS } from "../Modals/staticData";
import { FREE_GIFT, THRESHOLD } from "../App";
const True = true;

const ShoppingCart = () => {
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: {
        ...product,
        quantity: (prevCart[product.id]?.quantity || 0) + 1,
      },
    }));
  };

  const updateCart = (id, change) => {
    setCart((prevCart) => {
      if (!prevCart[id]) return prevCart;

      const updatedQuantity = prevCart[id].quantity + change;
      if (updatedQuantity <= 0) {
        const newCart = { ...prevCart };
        delete newCart[id];
        return newCart;
      }
      return {
        ...prevCart,
        [id]: { ...prevCart[id], quantity: updatedQuantity },
      };
    });
  };

  const Subtotal = Object.values(cart).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const progressPercentage = (Subtotal / THRESHOLD) * 100;
  console.log(progressPercentage);

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center">Shopping Cart</h1>

      {/* products */}
      <div className="w-3/4 self-center my-5">
        <h1 className="text-xl font-bold text-gray-700 my-1">Products</h1>
        <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg mt-4 p-3 w-full shadow-lg"
            >
              <p className="font-semibold text-base">{item.name}</p>
              <p className="font-bold text-gray-700 my-1"> ₹ {item.price}</p>
              <button
                type="button"
                className="text-white w-full text-sm font-semibold mt-3 bg-blue-500 rounded-lg py-2"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* cart summary */}

      <div className="w-3/4 self-center my-5">
        <h1 className="text-xl font-bold text-gray-700 my-1">Cart Summary</h1>

        <div className="w-full bg-white my-3 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <p className="text-gray-800 font-semibold">Subtotal: </p>
            <p className="text-gray-800 font-bold text-lg">₹ {Subtotal || 0}</p>
          </div>
          <hr className="my-3" />

          {Subtotal >= 1000 ? (
            <p>You got a free {FREE_GIFT.name}!</p>
          ) : (
            <div className="bg-blue-50 rounded-lg text-gray-700 w-full py-4 px-2">
              <p className="mb-2">
                Add ₹ 1000 more to get a FREE Wireless Mouse!
              </p>
              <div
                className={`bg-gray-400 rounded-full w-full h-2.5`}
                style={{
                  width: `${Math.min(progressPercentage, 100)}%`,
                  backgroundColor: "blue",
                }}
              ></div>
            </div>
          )}
        </div>

        {/* cart items */}
        <div className="w-full my-8 ">
          <h1 className="text-xl font-bold text-gray-700 my-4">Cart Items</h1>

          {Object.values(cart).length === 0 ? (
            <div className="text-center bg-white rounded-lg shadow-lg p-4  text-gray-600">
              <p className="text-lg font-semibold my-1">Your cart is empty.</p>
              <p>Add some products to see them here!</p>
            </div>
          ) : (
            Object.values(cart).map((item) => (
              <div
                key={item.id}
                className="flex mb-3 p-4  bg-white rounded-lg shadow-lg justify-between items-center"
              >
                <div>
                  <p className="text-sm md:text-base">{item.name}</p>
                  <p className="text-sm md:text-base">
                    ₹{item.price} x {item.quantity} = ₹
                    {item.price * item.quantity}
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <button
                    type="button"
                    onClick={() => updateCart(item.id, -1)}
                    className="bg-red-500 px-2 md:px-3 cursor-pointer text-white font-semibold md:text-2xl py-0.5 pb-1 rounded-lg"
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    type="button"
                    onClick={() => updateCart(item.id, +1)}
                    className="bg-green-500 px-2 md:px-3 cursor-pointer text-white font-semibold md:text-2xl py-0.5 pb-1 rounded-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
          {/*free gift  */}
          {Subtotal >= 1000 && (
            <div
              key={FREE_GIFT.id}
              className="flex mb-3 p-4  bg-white rounded-lg shadow-lg justify-between items-center"
            >
              <div>
                <p className="text-sm md:text-base">{FREE_GIFT.name}</p>
                <p className="text-sm md:text-base">₹0 x 1 = ₹0</p>
              </div>
              <p className="bg-green-200 text-green-500 px-3 rounded-full text-xs font-semibold tracking-wider py-1">
                FREE GIFT
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
