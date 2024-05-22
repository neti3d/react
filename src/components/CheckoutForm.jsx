import { serverTimestamp } from 'firebase/firestore'
import { useCart } from '../context/cartContext'
import { createOrder } from '../firebase/db'
import { useState } from 'react'

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
        .then((res) => document.getElementById("demo").innerHTML = res)
        delCart()
    }

    if(comprado) {
        return (
            <div id="contenedor">
                <h1>Checkout</h1>
                <h3>Gracias por tu compra!</h3>
                <h4>El identificador de tu pedido es: <span id="demo">...cargando...</span></h4>
                
            </div>
        )
    } else {
        return (
            <div id="contenedor">
                <h1>Checkout</h1>
                <form onSubmit={handleForm}>
                    <input type='text' name='name' placeholder='Nombre' required />
                    <br />
                    <input type='email' name='email' placeholder='E-mail' />
                    <br />
                    <input type='text' name='phone' placeholder='Teléfono' required />
                    <br />
                    <button type='submit'>Comprar</button>
                </form>
            </div>
        )
    }
    
}

export default CheckoutForm