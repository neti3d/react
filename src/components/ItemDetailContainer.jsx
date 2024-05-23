import ItemDetail from '../components/ItemDetail'
import Loader from '../components/Loader'
import { getItem } from '../firebase/db'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Container } from 'semantic-ui-react'

function ItemDetailContainer() {
    const[planta, setPlanta] = useState([])
    const[load, setLoad] = useState(false)

    const {id} = useParams()

    useEffect(() => {
        const getAndSet = async () => {
            const res = await getItem(id)
            setPlanta(res)
            setLoad(true)
        }
        getAndSet()
    }, [id])

    if(load) {
        return (
            <Container textAlign='center'>
                <ItemDetail producto={planta} />
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

export default ItemDetailContainer
