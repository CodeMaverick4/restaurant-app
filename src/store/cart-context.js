import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  deleteItem: (id) => {},
});

const CartContextProvider = ({ children }) => {
  const [items,setItems] = useState([]);
  const [totalAmount,setTotalAmount]= useState(0);
  
  const addItem = (item) => {
    console.log(item)
    setTotalAmount(prev => (Number(prev) + Number(item.price)).toFixed(2))    
    setItems(prev=> [...prev,item])
  };
  const deleteItem = (id) => {
    const filteredItems = items.filter(item=>item.id !== id)
    setItems(filteredItems);
  };
 
  const subtractQuantity = (id) => {
    const updatedQuantity = items.map(item=>{
      if(item.id === id){        
        return {...item,quantity : item.quantity-1}
      }else{
        return item
      }
    })
    const filteredItems = updatedQuantity.filter(item=>item.quantity > 0)
      
    setItems(filteredItems);
  };
  
 const addQuantity = (id) => {
    const updatedQuantity = items.map(item=>{
      if(item.id === id){        
        return {...item,quantity : item.quantity+1}
      }else{
        return item
      }
    })
    // const filteredItems = updatedQuantity.filter(item=>item.quantity >= 0)
      
    setItems(updatedQuantity);
  };

  const cartContext = {
    items,
    totalAmount,
    addItem,
    deleteItem,
    subtractQuantity,
    addQuantity,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
export { CartContext };
