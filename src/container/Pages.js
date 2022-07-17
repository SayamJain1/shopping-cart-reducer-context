import axios from "axios";
import React, { useEffect, useReducer, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Products from "./Products";

export const ContextFlow = createContext();

const initialState = {
  products: {},
  cart: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Success":
      return { ...state, products: action.payload };

    case "Failed":
      return { ...state, products: {} };
    
    case 'Add':
      let productExist = state.cart.find(item => item.id === action.payload.id)
      if (productExist) {
        return {...state , cart : state.cart.map(item => item.id === action.payload.id ? {...productExist, quantity : productExist.quantity + 1} : item)}
      } else {
        return {...state, cart : [...state.cart, {...action.payload, quantity : 1}]}
      }

    case 'Remove':
      let productExistDec = state.cart.find(item => item.id === action.payload.id)
      if (productExistDec.quantity === 1) {
        return {...state, cart : state.cart.filter(item => item.id !== action.payload.id)}
      } else {
        return {...state , cart : state.cart.map(item => item.id === action.payload.id ? {...productExistDec, quantity : productExistDec.quantity - 1} : item)}
      }
    default:
      return state
  }
};

function Pages() {
  const [newState, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch({ type: "Success", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "Failed" });
      });
  }, []);

  return (
    <div>
      <ContextFlow.Provider value={{ newState: newState, dispatch: dispatch }}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ContextFlow.Provider>
    </div>
  );
}

export default Pages;
