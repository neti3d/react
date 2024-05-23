import PropTypes from 'prop-types'
import { useState } from 'react'
import { useCart } from '../context/cartContext'
import { Link } from 'react-router-dom'

import { Button, Segment, Header, Label } from 'semantic-ui-react'

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
            <Segment padded color='teal'>
                <Header as='h4'>Agregado! ({cantidad} u.)</Header>
                <Button as={Link} to="/Cart" color='teal' size='large'>Ver carrito</Button>
            </Segment>
        )
    }
    else {
        return (
            <Segment basic padded>
                <strong>Cantidad</strong>
                <br />
                <Button circular icon='minus' color='olive' size='small' onClick={resta} />
                <Label color='black' size='big'> {cantidad} </Label>
                <Button circular icon='plus' color='olive' size='small' onClick={suma} />
                <br /><br />
                <Button color='yellow' onClick={() => prepareCart(p, cantidad)}>Agregar al carrito</Button>  
            </Segment>
        )
    }

}

ItemCount.propTypes = {
    stock: PropTypes.number,
    p:     PropTypes.object
}

export default ItemCount
