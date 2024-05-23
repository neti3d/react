import { Link } from 'react-router-dom'

import { Container, Header, Button } from 'semantic-ui-react'

function ErrorPage() {
    return (
        <Container textAlign='center'>
            <Header as='h2'>La página que buscás no existe!</Header>
            <Button as={Link} to="/" size='big' color='orange'>Volver al inicio</Button>
        </Container>
    )
}

export default ErrorPage
