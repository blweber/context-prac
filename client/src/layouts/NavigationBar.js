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
  </Navbar>
);
