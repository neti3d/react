import aiLogo from '../assets/logo-ai.png'
import CartWidget from '../components/CartWidget'
import { Link } from 'react-router-dom'

import { Menu, MenuItem, Image, Segment, Button, ButtonGroup } from 'semantic-ui-react'

function NavBar() {
    return (
        <Segment raised clearing>
            <Menu secondary>
                <Link to="/"><Image src={aiLogo} /></Link>
                <MenuItem position='right'>
                    <ButtonGroup size='large'>
                        <Button as={Link} to="/" content='TODAS' icon='leaf' labelPosition='left' color='green' />
                        <Button as={Link} to="/category/interior" color='olive'>De interior</Button>
                        <Button as={Link} to="/category/exterior" color='olive'>De exterior</Button>
                        <Button as={Link} to="/category/comestible" color='olive'>Comestibles</Button>
                        <CartWidget />
                    </ButtonGroup>
                </MenuItem>
            </Menu>
        </Segment>
    )
}

export default NavBar
