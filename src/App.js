import Header from "./components/Layout/Header";
import "./App.css"
import MealsSummary from "./components/Meals/MealSummary";
import MealsList from "./components/Meals/MealsList";
import Modal from "./components/UI/Modal";
function App() {
  return (
    <div>
      <Header />
      <MealsSummary />
      <MealsList />

      <Modal  >
        <ul>
          <li>Sushi</li>
        </ul>

        <div>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>

        <div>
          <button className="btn btn-secondary " >Close</button>
          <button className="btn  btn-primary">Order</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
