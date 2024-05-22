/* eslint-disable react/prop-types */
import ItemCount from '../components/ItemCount'

function ItemDetail({producto}) {
    return (
        <>
            <h1 className="text-center">{producto.nombre}</h1>
            <h3 className="text-center">Tipo: {producto.categoria}</h3>
            <div className="col-gr">
                <img src={producto.imagen} alt={producto.id} title={producto.nombre} className="img" />
            </div>
            <div className="col-ch">
                <p>{producto.detalles}</p>
                <h4>Stock: {producto.stock} u.</h4>
                <h4>Precio: $ {producto.precio}</h4>
            </div>
            <ItemCount stock={producto.stock} p={producto} />
        </>
    )
}

export default ItemDetail
