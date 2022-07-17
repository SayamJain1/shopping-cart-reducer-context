import React, { useContext } from "react";
import { ContextFlow } from "./Pages";

function Cart() {
  const {
    newState: { cart },
    dispatch,
  } = useContext(ContextFlow);

  const totalPrice = cart.reduce(
      (price, currVal) => price + currVal.price * currVal.quantity,
      0
    );
    console.log(totalPrice)

  return (
    <div className="w-full h-full flex justify-center items-start bg-blue-50">
      <div>
        {cart.map((item) => {
          return (
            <div
              className="flex flex-wrap justify-between items-center md:w-full h-1/2 p-10 bg-white m-10 rounded-md shadow-lg"
              key={item.id}
            >
              <div>
                <img
                  className="w-auto h-24"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div>
                <h1 className="text-center w-24">{item.title}</h1>
              </div>
            
              <div className="flex justify-between w-16">
                <button
                  className="font-bold ring-1 rounded-sm bg-purple-600 p-1"
                  onClick={() => dispatch({ type: "Add", payload: item })}
                >
                  +
                </button>
                <button
                  className="font-bold ring-1 rounded-sm bg-purple-600 p-1 w-5"
                  onClick={() => dispatch({ type: "Remove", payload: item })}
                >
                  -
                </button>
              </div>
              <div>
                <h1>
                  {item.quantity} x ${item.price}
                </h1>
              </div>
            </div>
          );
        })}
        <div className="flex justify-between items-center md:w-full h-1/3 p-7 bg-white m-10 rounded-md shadow-lg">
          Total Price
          <div>${Math.floor(totalPrice)}</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
