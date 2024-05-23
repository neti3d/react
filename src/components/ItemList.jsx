/* eslint-disable react/prop-types */
import Item from '../components/Item'

import { CardGroup } from 'semantic-ui-react'

function ItemList({productos}) {
    return (
        <CardGroup itemsPerRow={4}>
            {productos.map(p => (
                <Item producto={p} key={p.id} />
            ))
            }
        </CardGroup>
    )
}

export default ItemList
