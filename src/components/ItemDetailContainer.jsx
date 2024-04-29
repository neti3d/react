import ItemDetail from '../components/ItemDetail'
import {getDatosById} from '../plantasAPI'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function ItemDetailContainer() {
    const[planta, setPlanta] = useState([{nombre:"cargando..."}])

    const {id} = useParams()

    useEffect(() => {
        getDatosById(id)
            .then(res => {
                setPlanta(res)
            })
    }, [id])

    return (
        <div id="contenedor">
            <ItemDetail producto={planta[0]} />
        </div>
    )
}

export default ItemDetailContainer
