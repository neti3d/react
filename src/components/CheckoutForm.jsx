import { serverTimestamp } from 'firebase/firestore'
import { useCart } from '../context/cartContext'
import { createOrder } from '../firebase/db'
import { useState } from 'react'

import {
    Container,
    Header,
    Button,
    Form,
    FormField,
    Segment,
    Label,
    Icon
} from 'semantic-ui-react'

function CheckoutForm() {
    const {cart, getTotal, delCart} = useCart()
    const [comprado, setComprado] = useState(0)

    const handleForm = (e) => {
        e.preventDefault()
        const [name, email, phone] = e.target
        const order = {
            buyer: {
                name: name.value,
                email: email.value,
                phone: phone.value
            },
            total: getTotal(),
            items: cart,
            date: serverTimestamp()
        }
        
        setComprado(1)
        createOrder(order)
            .then((res) => document.getElementById("pedido").innerHTML = res)
        delCart()
    }

    if(comprado) {
        return (
            <Container>
                <Header as='h1'>Finalizar compra</Header>
                <Header as='h3'>Gracias por tu compra!</Header>
                <Header as='h3'>El identificador de tu pedido es: <Label size='huge' id='pedido'><Icon loading name='spinner' /></Label></Header>
            </Container>
        )
    } else {
        return (
            <Container>
                <Header as='h1'>Finalizar compra</Header>
                <Segment padded raised>
                    <Form onSubmit={handleForm}>
                        <FormField required>
                            <label>Nombre</label>
                            <input type='text' name='name' placeholder='Nombre' maxLength='40' required />
                        </FormField>
                        <FormField>
                            <label>E-mail</label>
                            <input type='email' name='email' placeholder='E-mail' maxLength='40' />
                        </FormField>
                        <FormField required>
                        <label>Teléfono</label>
                            <input type='text' name='phone' placeholder='Teléfono' maxLength='20' required />
                        </FormField>
                        <Button type='submit' color="teal">Confirmar</Button>
                    </Form>
                </Segment>
            </Container>
        )
    }
    
}

export default CheckoutForm