import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from "reactstrap";

export const Navigationbar = () => (
  <Navbar className="navbar-dark bg-dark fixed-top mb-auto" expand="lg">
    <NavbarBrand className="text-success" href="/">
      Socium
    </NavbarBrand>
    <NavbarToggler aria-controls="basic-navbar-nav" />
    <Collapse id="basic-navbar-nav" navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink>
            <Link className="text-warning" to="/Register">
              Register
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link className="text-warning" to="/Login">
              Login
            </Link>
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
);
