import { Link } from 'react-router-dom'
import { useCart } from '../context/cartContext'

import { Icon, Button } from 'semantic-ui-react'

function CartWidget() {
    const {cart} = useCart()

    return (
        <Button as={Link} to="/cart" color='green'>
            <Icon name='cart' size='large' /> ({cart.length})
        </Button>
    )
}

export default CartWidget