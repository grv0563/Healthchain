import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo.png"
import "./NavigationBar.css"

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
        <img className="company-logo" src={logo} alt="company logo" />
        </Navbar.Brand>
        <Navbar.Brand href="/">
        <h5 >NextGen </h5>
        <h6>EHR</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"
          style={{textAlign:"center"}} >
            <Nav.Link href="/qrcode">QR</Nav.Link>
            <Nav.Link href="/qrscan">Scan</Nav.Link>
            <Nav.Link href="/learn">Learn</Nav.Link>
            <NavDropdown title="Company" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/mission">Mission</NavDropdown.Item>
              <NavDropdown.Item href="/vision">
                Vision
              </NavDropdown.Item>
              <NavDropdown.Item href="/roadmap">RoadMap</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/aboutus">
                About us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav style={{textAlign:"center"}}>
            <Nav.Link href="/login">
              <button className="btn">Login</button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="/signup">
              <button className="btn">register</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
