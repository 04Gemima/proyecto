import { Navbar, Nav, Container } from "react-bootstrap";

import { Outlet, Link } from "react-router-dom";

const NavBarExample = () => {
  return (
    <>
      <Navbar className="navBg" variant="dark" expand="">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Cotacto
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                Acerca de:
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};
export default NavBarExample;
