
import { useContext } from "react"
import CartIcon from "./CartIcon"
import { CartContext } from "../../store/cart-context"
const Cart = (props) => {
    const ctx = useContext(CartContext);

    return (
        <div >
            <div className="cart" onClick={props.onClick}>
                <CartIcon />
                <p>Your Cart</p>
                <div>{ctx.items.length}</div>
            </div>
        </div>
    )
}
export default Cart