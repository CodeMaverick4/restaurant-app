import Header from "./components/Layout/Header";
import "./App.css"
import MealsSummary from "./components/Meals/MealSummary";
import MealsList from "./components/Meals/MealsList";
import Modal from "./components/UI/Modal";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header onClick={()=>setIsOpen(true)} />
      <MealsSummary />
      <MealsList />

      <Modal onClose={()=>{}} onClick={()=>setIsOpen(true)} isOpen={isOpen}>
        <ul>
          <li>Sushi</li>
        </ul>
        <div>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div>
          <button className="btn btn-secondary" onClick={()=>setIsOpen(false)} >Close</button>
          <button className="btn  btn-primary">Order</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
