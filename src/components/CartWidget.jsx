import { Link } from 'react-router-dom'
import { useCart } from '../context/cartContext'
import icono from '../assets/cart-plant.png'

function CartWidget() {
    const {cart} = useCart()

    return (
        <li><Link to="/cart"><img height="auto" src={icono} /> ({cart.length})</Link></li>
    )
}

export default CartWidget