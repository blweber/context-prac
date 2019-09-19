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
            <Link className="text-warning" to="/">
              Home
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link className="text-warning" to="/Three33">
              333
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link className="text-warning" to="/Three45">
              345
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link className="text-warning" to="/AdHoc">
              Ad Hoc
            </Link>
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
);
