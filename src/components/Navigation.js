import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  

function Navigation() {
  return (  
    <Navbar bg="white" expand="md">  
    <Container>  
      <Navbar.Brand href="#home">CS1300 Portfolio</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <NavDropdown title="Direct Links to Work" id="basic-nav-dropdown">  
            <NavDropdown.Item href="https://funnybear681.github.io/ResponsiveRedesignSite/">Berkshire Hathaway Redesign</NavDropdown.Item>  
            <NavDropdown.Item href="https://csci1410-2022.vercel.app/">CS1410 Course Website</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.3">Jersey Store</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.3">Bakery</NavDropdown.Item> 
          </NavDropdown>  
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  
  );  
}

export default Navigation;