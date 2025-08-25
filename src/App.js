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
    <>
      <Header onClick={() => setIsOpen(true)} />
      <MealsSummary />
      <MealsList />

      <Modal onClose={() => { }} onClick={() => setIsOpen(true)} isOpen={isOpen}>
        <ul>{ctx.items.map((item, index) => (
          <li className="modal-content" key={index}>
            <div className="modal-content-li-content">
              <span>{item.name}</span>
              <div >
                <span>${item.price}</span>
                <span>x{item.quantity}</span>
              </div>
            </div>
            <div>
              <div className="modal-content-li-button">
                <button onClick={()=>ctx.subtractQuantity(item.id)}>-</button>
                <button onClick={()=>ctx.addQuantity(item.id)}>+</button>
              </div>
            </div>

          </li>
        ))}
        </ul>
        <div className="modal-content-footer">
          <div>
            <span>Total Amount</span>
            <span>${ctx.totalAmount}</span>
          </div>
          <div>
            <button className="btn btn-secondary" onClick={() => setIsOpen(false)} >Close</button>
            <button className="btn  btn-primary">Order</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default App;
