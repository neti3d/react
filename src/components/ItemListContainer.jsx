import ItemList from '../components/ItemList'
import Loader from '../components/Loader'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getItemsAll, getItemsCat } from '../firebase/db'

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
            <div id="contenedor">
                <h2 className="text-center">Plantas encontradas</h2>
                <h4 className="text-center">{tipo}</h4>
                <ItemList productos={producto} />
            </div>
        )
    } else {
        return (
            <div id="contenedor">     
                <Loader />
            </div>
        )
    }
}

export default ItemListContainer
