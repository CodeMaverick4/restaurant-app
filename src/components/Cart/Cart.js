
import { useContext } from "react"
import CartIcon from "./CartIcon"
import { CartContext } from "../../store/cart-context"
const Cart = (props) => {
    const ctx = useContext(CartContext);

    return (
        <div onClick={props.onClick}>
            <div className="cart">
                <CartIcon />
                <p>Your Cart</p>
                <div>{ctx.totalAmount}</div>
            </div>
        </div>
    )
}
export default Cart