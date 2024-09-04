import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Layout() {
    return (
    <>
        <Navbar bg="success" data-bs-theme="dark" expand="lg">
            <Container>
            <Navbar.Brand href="#home">Fruit</Navbar.Brand>
            </Container>
        </Navbar>
    </>);
}

export default Layout;