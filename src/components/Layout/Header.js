import Cart from "../Cart/Cart"

const Header = (props) => {
    return (
        <>
            <div className="header">
                <h1>ReactMeals</h1>
                <Cart onClick={props.onClick}/>
            </div>
            <div className="body-image">
                <img src={'assets/meals.jpg'} alt='A table full of delicious food!' />
            </div>
        </>
    )
}
export default Header