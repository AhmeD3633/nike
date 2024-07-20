import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import nikeLogo from "../../assets/images/nike  logo.jpg";
import { CiSearch } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch((prevShowSearch) => !prevShowSearch);
  };

  return (
    <section className="header">
      <Navbar expand="lg" className="p-0">
        <Container fluid className="navbar-container">
          <Navbar.Brand href="#home" className="brand">
            <img src={nikeLogo} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="header-links me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">New & Featured</Nav.Link>
              <Nav.Link href="#action2">Men</Nav.Link>
              <Nav.Link href="#action2">Women</Nav.Link>
              <Nav.Link href="#action2">Kids</Nav.Link>
              <Nav.Link href="#action2">Jordan</Nav.Link>
              <Nav.Link href="#action2">More</Nav.Link>
            </Nav>

            <div className="icons">
              <OutsideClickHandler
                onOutsideClick={() => {
                  setShowSearch(false);
                }}
              >
                <Form className="d-flex align-items-center justify-content-center">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className={`me-2 search-input ${showSearch ? "show" : ""}`}
                    aria-label="Search"
                  />

                  <Button variant="outline-success" onClick={handleSearchClick}>
                    <CiSearch />
                  </Button>
                </Form>
              </OutsideClickHandler>
              <div className="social-icons">
                <FaFacebook />
                <FaInstagramSquare />
                <FaPhoneAlt />
                <FaLocationDot />
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
