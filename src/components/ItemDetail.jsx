/* eslint-disable react/prop-types */
import ItemCount from '../components/ItemCount'

import {
    Item as ItemUI,
    ItemImage,
    ItemContent,
    ItemHeader,
    ItemMeta,
    ItemDescription,
    ItemGroup,
    Label,
    Header,
    Segment
} from 'semantic-ui-react'

function ItemDetail({producto}) {
    return (
        <ItemGroup>
            <ItemUI>
                <ItemImage src={producto.imagen} alt={producto.id} title={producto.nombre} size='large' circular />
                <ItemContent>
                    <ItemHeader as='h1'>{producto.nombre}</ItemHeader>
                    <ItemMeta>
                        <Label size='large' color='purple'> {producto.categoria} </Label>
                    </ItemMeta>
                    <ItemDescription>
                        <Segment color='green' piled padded>{producto.detalles}</Segment>     
                        <Header as='h4'>Stock: {producto.stock} u.</Header>
                        <Header as='h4'>Precio: $ {producto.precio}</Header>
                    </ItemDescription>
                    <ItemCount stock={producto.stock} p={producto} />
                </ItemContent>
            </ItemUI>  
        </ItemGroup>   
    )
}

export default ItemDetail
