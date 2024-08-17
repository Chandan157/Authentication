import React, { useState } from "react";
import {
  Collapse,
  Navbar as BootstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <BootstrapNavbar {...args}>
        <NavbarBrand href="/">My Navbar</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/login/">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup/">
                Sign up
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </BootstrapNavbar>
    </div>
  );
}

export default CustomNavbar;
