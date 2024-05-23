import ItemList from '../components/ItemList'
import Loader from '../components/Loader'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getItemsAll, getItemsCat } from '../firebase/db'

import { Container, Divider, Header, Label } from 'semantic-ui-react'

function ItemListContainer() {
    const[producto, setProducto] = useState([])
    const[load, setLoad] = useState(false)

    const {tipo} = useParams()

    useEffect(() => {
        setProducto([])
        setLoad(false)

        const getAndSet = async () => {
            const res =  tipo ? await getItemsCat(tipo) : await getItemsAll()
            setProducto(res)
            setLoad(true)
        }
        getAndSet()
    }, [tipo])

    if(load) {
        return (
            <Container textAlign='center'>
                <Header as='h2'>Plantas encontradas</Header>
                {tipo ? <Label size='large' color='purple' circular>{tipo}</Label> : ""}
                <Divider hidden />
                <ItemList productos={producto} />
            </Container>
        )
    } else {
        return (
            <Container textAlign='center'>     
                <Loader />
            </Container>
        )
    }
}

export default ItemListContainer
