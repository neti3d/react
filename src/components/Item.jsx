import {Link} from 'react-router-dom'

function Item({producto}) {
    return (
        <div className="item">
            <h3>{producto.nombre}</h3>
            <div className="badge">{producto.categoria}</div>
            <img src={producto.imagen} alt={producto.nombre} title={producto.nombre} className="img" />
            <br />
            <Link to={`/item/${producto.id}`} className="button">+ info</Link>
        </div>
    )
}

export default Item
