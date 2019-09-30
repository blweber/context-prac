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

import './navigationBar.scss';
import Breadcrumbs from "../components/shared/Breadcrumbs";

export const Navigationbar = () => (
  <Navbar className="navbar fixed-top mb-auto" expand="lg">
    <NavbarBrand className="nav-logo" href="/">
      SOCIUM
    </NavbarBrand>
    <NavbarToggler aria-controls="basic-navbar-nav" />
    <NavItem className="breadcrumbs">
        <Breadcrumbs />
    </NavItem>
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
