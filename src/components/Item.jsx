/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

import {
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Image,
    Button,
    Label,
    Segment
  } from 'semantic-ui-react'

function Item({producto}) {
    return (
        <Card>
            <Image src={producto.imagen} alt={producto.nombre} title={producto.nombre} />
            <CardContent>
                <CardHeader>{producto.nombre}</CardHeader>
                <CardDescription>        
                    <Segment floated='left' basic>
                        <Label color='purple' circular>{producto.categoria}</Label>
                    </Segment>
                    <Segment floated='right' color='olive'>${producto.precio}</Segment> 
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <Button fluid color='yellow' size='small' as={Link} to={`/item/${producto.id}`}>+ info</Button>
            </CardContent>
        </Card>
    )
}

export default Item
