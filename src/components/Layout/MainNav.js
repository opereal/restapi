
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import styles from "./MainNav.module.css";

const MainNav = () => {
 
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="fixed-top">
      <Container>
        <Navbar.Brand href="#home">GoMyCode Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink className={styles.nav_links} to="/">
              Home
            </NavLink>
            <NavLink className={styles.nav_links} to="/about-us">
              About Us
            </NavLink>
            <NavLink className={styles.nav_links} to="/blogs">
              Blogs
            </NavLink>

            <NavLink className={styles.nav_links} to="/get-started/sign-up">
              Get Started
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
