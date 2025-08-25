
import CartIcon from "./CartIcon"
const Cart = (props) => {
    return (
        <div onClick={props.onClick}>
            <div className="cart">
                <CartIcon />
                <p>Your Cart</p>
                <div>10</div>
            </div>
        </div>
    )
}
export default Cart