import Cart from "../Cart/Cart"

const Header = () => {
    return (
        <>
            <div className="header">
                <h1>ReactMeals</h1>
                <Cart />
            </div>
            <div className="body-image">
                <img src={'assets/meals.jpg'} alt='A table full of delicious food!' />
            </div>
        </>
    )
}
export default Header