import React, { createContext, useEffect, useReducer } from "react";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const sumItems = (items) => {
  let itemsCounter = items.reduce((acc, current) => acc + current.quantity , 0)
  let total = items.reduce((acc, current) => acc + current.price * current.quantity, 0).toFixed(2)

  return {itemsCounter, total}
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        checkout: false,
        ...sumItems(state.selectedItems)
      };

    case "REMOVE_ITEM":
      const newSelectedItem = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItem],
        ...sumItems(newSelectedItem)

      };

    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItems)

      };

    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItems)

      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState , 
    (initial) => JSON.parse(localStorage.getItem("products") || initial)
    );

    useEffect(() => {
        localStorage.setItem("products" , JSON.stringify(state))
    } , [state])
    
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
