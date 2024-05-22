import { cartContext } from '../context/cartContext'
import { useState } from 'react'

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const addToCart = (product) => {
        // console.log(product)
        setCart([...cart, product])
    }
    const getTotal = () => {
        const precio = cart.map(p => p.prod.precio * p.q)
        const total = precio.reduce((acc, current) => acc + current, 0)
        return total
    }
    const delCart = () => {
        setCart([])
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, getTotal, delCart }}>
            {children}
        </cartContext.Provider>
    )
}
