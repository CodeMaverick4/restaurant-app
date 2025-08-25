import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  deleteItem: (id) => {},
});

const CartContextProvider = ({ children }) => {
  const addItem = (item) => {};
  const deleteItem = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 10,
    addItem,
    deleteItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
export { CartContext };
