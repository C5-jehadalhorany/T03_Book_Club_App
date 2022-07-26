import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TextLinkExample() {
    return (
        <>
            <Navbar className='color-nav ' variant="dark" >
                <Container fluid >
                    <Navbar.Brand >RoomOfBooks</Navbar.Brand>
                    <Nav className="me-left">
                        <Nav.Link >Room</Nav.Link>
                        <Nav.Link >Features</Nav.Link>
                        <Nav.Link > Signed in as: <a href="#login">Farhan</a></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default TextLinkExample;