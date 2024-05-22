import { Link } from 'react-router-dom'
import { useCart } from '../context/cartContext'
import CartItem from '../components/CartItem' 

function Cart() {
    const {cart, getTotal, delCart} = useCart()
    const total = getTotal()

    if(cart.length) {
        return (
            <div id="contenedor">
                <h1>Carrito de compras</h1>
                {cart.map(p => (
                    <CartItem producto={p} key={p.prod.id} />
                    ))
                }
                <br />
                <h3>Total pedido: ${total}</h3>  
                <br />
                <Link to="/" className='button'>Seguir comprando</Link>
                <Link to="/checkout" className='button'>Finalizar compra</Link>  
                <button className='button' onClick={delCart}>Vaciar carrito</button>  
            </div>
        )
    } else {
        return (
            <div id="contenedor">
                <h1>Carrito de compras vacío</h1>
                <Link to="/" className='button'>Ver todos los productos disponibles</Link>
            </div>
        )
    }

  }

export default Cart