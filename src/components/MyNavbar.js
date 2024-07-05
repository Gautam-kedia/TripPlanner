import React from 'react'
import { Navbar,Nav,Container} from 'react-bootstrap';
function MyNavbar() {
  return (
        <>
          <Navbar bg="dark" data-bs-theme="dark" >
            <Container>
              <Navbar.Brand  className="text-warning" href="#home">TRIP</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link className="text-warning" href="#home">Home</Nav.Link>
                <Nav.Link className="text-warning"href="#Hotels">Hotels</Nav.Link>
                <Nav.Link className="text-warning" href="#Restauramts">Restaurants</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
    }
export default MyNavbar
