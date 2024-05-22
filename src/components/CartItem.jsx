/* eslint-disable react/prop-types */

function Item({producto}) {
    const subtotal = producto.prod.precio * producto.q
    return (
        <div className="itemcart">
            <img src={producto.prod.imagen} alt={producto.prod.nombre} title={producto.prod.nombre} className="imgcart" />
            <br />
            <h3>{producto.prod.nombre}</h3>
            <h4>Cantidad: {producto.q}</h4>
            <h4>Subtotal: ${subtotal}</h4>
        </div>
    )
}

export default Item
