import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo.png"
import "./NavigationBar.css"

function Profile_Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/dashboard">
        <img className="company-logo" src={logo} alt="company logo" />
        </Navbar.Brand>
        <Navbar.Brand href="/dashboard">
        <h5 >HealthChain </h5>
        <h6>Network</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"
          style={{textAlign:"center"}} >
            <Nav.Link href="/qrcode">QR</Nav.Link>
            <Nav.Link href="/qrscan">Scan</Nav.Link>
          </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="/profile">UserName</a>
          </Navbar.Text>
          <Navbar.Text>
          <button className="btn" onClick={()=>{window.location.replace("/signout")}}>Logout</button>
          </Navbar.Text>
        </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Profile_Header;
