import { Link } from 'react-router-dom'
import { useCart } from '../context/cartContext'
import CartItem from '../components/CartItem' 

import { Button, Container, Header, Divider, ItemGroup } from 'semantic-ui-react'

function Cart() {
    const {cart, getTotal, delCart} = useCart()
    const total = getTotal()

    if(cart.length) {
        return (
            <Container>
                <Header as='h1'>Carrito de compras</Header>
                <ItemGroup divided>
                    {cart.map(p => (
                        <CartItem producto={p} key={p.prod.id} />
                        ))
                    }
                </ItemGroup>
                <Header as='h3'>Total pedido: ${total}</Header>
                <Divider />
                <Button basic color='teal' as={Link} to="/">Seguir comprando</Button>
                <Button color='green' size='large' as={Link} to="/checkout">Finalizar compra</Button>  
                <Button basic color='orange' onClick={delCart}>Vaciar carrito</Button>  
            </Container>
        )
    } else {
        return (
            <Container>
                <Header as='h1'>Carrito de compras vacío</Header>
                <Button basic color='teal' as={Link} to="/">Ver todos los productos disponibles</Button>
            </Container>
        )
    }

  }

export default Cart