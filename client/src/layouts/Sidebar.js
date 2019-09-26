import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar my-5 py-1">
      <Nav vertical>
        <NavItem>
          <NavLink href="#">
            <Link to="/">
              <i class="fas fa-home"> Dashboard</i>
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link to="/Three33">
              <i class="fas fa-globe-americas"> 333</i>
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link to="/Three45">
              <i class="fas fa-clipboard-list"> 345</i>
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link to="/AdHoc">
              <i class="fas fa-project-diagram"> Ad Hoc</i>
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link to="/Register">
              <i class="fas fa-address-card"> Map View </i>
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link to="/Login">
              <i class="fas fa-address-card"> Reports </i>
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link to="/Register">
              <i class="fas fa-address-card"> Workflow </i>
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link to="/Register">
              <i class="fas fa-address-card"> Test </i>
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            <i class="fas fa-address-card"> Disabled </i>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Sidebar;
