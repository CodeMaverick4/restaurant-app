import Cart from "../Cart/Cart"

const Header = () => {
    return (
        <div className="header">
            <h1>ReactMeals</h1>
            {/* <div>Cart</div> */}<Cart/>
        </div>
    )
}
export default Header