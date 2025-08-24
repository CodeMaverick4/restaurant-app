import Header from "./components/Layout/Header";
import "./App.css"
import MealsSummary from "./components/Meals/MealSummary";
import MealsList from "./components/Meals/MealsList";
function App() {
  return (
    <div>
      <Header />
      <MealsSummary/>
      <MealsList/>
    </div>
  );
}

export default App;
