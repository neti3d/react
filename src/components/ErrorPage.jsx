import {Link} from 'react-router-dom'

function ErrorPage() {
    return (
        <div id="contenedor">
            <h1>404</h1>
            <Link to="/">Volver</Link>
        </div>
    )
}

export default ErrorPage
