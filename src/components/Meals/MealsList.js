const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A German specialty!",
        price: 16.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
    {
        id: "m5",
        name: "Pasta Carbonara",
        description: "Classic Italian with creamy sauce",
        price: 14.75,
    },
];

const MealsList = (props) => {
    return (
        <div className="list-container">
            <ul>
                {DUMMY_MEALS.map(meal => (
                    <li key={meal.id}>
                        <p>{meal.name}</p>
                        <small><i>{meal.description}</i></small>
                        <p>${meal.price}</p>
                    </li>

                ))
            }
            </ul>
        </div>
    )
}
export default MealsList