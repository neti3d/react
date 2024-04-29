import ItemList from '../components/ItemList'
import {getDatos} from '../plantasAPI'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function ItemListContainer() {
    const[producto, setProducto] = useState([])

    const {tipo} = useParams()

    useEffect(() => {
        getDatos(tipo)
            .then(res => {
                setProducto(res)
            })
    }, [tipo])

    return (
        <div id="contenedor">
            <h2 className="text-center">Plantas encontradas</h2>
            <h4 className="text-center">{tipo}</h4>
            <ItemList productos={producto} />
        </div>
    )
}

export default ItemListContainer
