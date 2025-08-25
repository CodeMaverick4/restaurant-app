import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        quantity:5,
        price: 22.99,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A German specialty!",
        quantity:5,
        price: 16.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        quantity:5,
        price: 12.99,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        quantity:5,
        price: 18.99,
    },
    {
        id: "m5",
        name: "Pasta Carbonara",
        description: "Classic Italian with creamy sauce",
        quantity:5,
        price: 14.75,
    },
];

const MealsList = (props) => {
    const ctx = useContext(CartContext);
    return (
        <div className="list-container">
            <ul>
                {DUMMY_MEALS.map(meal => (
                    <li key={meal.id}>
                        <div>
                            <p>{meal.name}</p>
                            <small><i>{meal.description}</i></small>
                            <p>${meal.price}</p>
                        </div>
                        <div className="list-quantity">
                            <div >
                                <label htmlFor="">Amount </label>
                                <input type="number" min={0}/>
                            </div>
                            <div>
                                <button className="btn btn-primary"><img src={'assets/plus.png'} height={20} alt="" onClick={()=>ctx.addItem(meal)} />Add</button>
                            </div>
                        </div>
                    </li>

                ))
                }
            </ul>
        </div>
    )
}
export default MealsList