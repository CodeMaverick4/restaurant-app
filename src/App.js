import Header from "./components/Layout/Header";
import "./App.css"
import MealsSummary from "./components/Meals/MealSummary";
import MealsList from "./components/Meals/MealsList";
import Modal from "./components/UI/Modal";
import { useContext, useState } from "react";
import CartContextProvider, { CartContext } from "./store/cart-context";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const ctx = useContext(CartContext)
  return (
    <CartContextProvider >
      <Header onClick={() => setIsOpen(true)} />
      <MealsSummary />
      <MealsList />

      <Modal onClose={() => { }} onClick={() => setIsOpen(true)} isOpen={isOpen}>
        <ul>{ctx.items.map(item => (
          <li>{item.name}</li>
        ))}
        </ul>
        <div>
          <span>Total Amount</span>
          <span>{ctx.totalAmount}</span>
        </div>
        <div>
          <button className="btn btn-secondary" onClick={() => setIsOpen(false)} >Close</button>
          <button className="btn  btn-primary">Order</button>
        </div>
      </Modal>
    </CartContextProvider>
  );
}

export default App;
