/* eslint-disable react/prop-types */
import Item from '../components/Item'

function ItemList({productos}) {
    return (
        <>
        {productos.map(p => (
            <Item producto={p} key={p.id} />
        ))
        }
        </>
    )
}

export default ItemList
