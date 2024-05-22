import { useState } from 'react'
import PropTypes from 'prop-types'
import { useCart } from '../context/cartContext'
import { Link } from 'react-router-dom'

function ItemCount({stock, p}) {
    const {addToCart} = useCart()

    const [cantidad, setCantidad] = useState(1)
    const [added, setAdded] = useState(0)
    
    const suma = () => {
        if (cantidad < stock)
            setCantidad(cantidad + 1)
    }
    const resta = () => {
        if (cantidad > 1)
            setCantidad(cantidad - 1)
    }
    const prepareCart = (prod, q) => {
        const item = {prod, q}
        addToCart(item)
        setAdded(1)
    }

    if(added) {
        return (
            <div className="text-center">
                <h4>Agregado! ({cantidad} u.)</h4>
                <br />
                <Link to="/Cart" className="button">Ver carrito</Link>
            </div>
        )
    }
    else {
        return (
            <div className="text-center">
                <strong>Cantidad</strong>
                <br />
                <button onClick={resta}>-</button>
                {cantidad}
                <button onClick={suma}>+</button>
                <br />
                <button onClick={() => prepareCart(p, cantidad)}>Agregar al carrito</button>  
            </div>
        )
    }

}

ItemCount.propTypes = {
    stock: PropTypes.number,
    p:     PropTypes.object
}

export default ItemCount
