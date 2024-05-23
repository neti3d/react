/* eslint-disable react/prop-types */
import {
    Item as ItemUI,
    ItemImage,
    ItemContent,
    ItemHeader,
    ItemMeta,
    ItemDescription
} from 'semantic-ui-react'

function Item({producto}) {
    const subtotal = producto.prod.precio * producto.q

    return (
        <ItemUI>
            <ItemImage src={producto.prod.imagen} alt={producto.prod.nombre} title={producto.prod.nombre} size='small' />
            <ItemContent>
                <ItemHeader>{producto.prod.nombre}</ItemHeader>
                <ItemMeta>
                    Cantidad: {producto.q}
                </ItemMeta>
                <ItemDescription>
                    Subtotal: ${subtotal}
                </ItemDescription>
            </ItemContent>
        </ItemUI>
    )
}

export default Item
