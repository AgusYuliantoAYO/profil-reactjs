import {Navbar, Container, Nav, Col} from "react-bootstrap"

const NavBar = () => {
    return(
        
    <div className="nav col-12">
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    [AYo]
                </Navbar.Brand>
                <Nav className="text-right">
                <Nav.Link href="#tentang">Tentang</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#porto">Porto</Nav.Link>
                <Nav.Link href="#sosmed">Sosmed</Nav.Link>
                </Nav>
                
            </Container>
        </Navbar>
     </div>
    )
} 

export default NavBar; 