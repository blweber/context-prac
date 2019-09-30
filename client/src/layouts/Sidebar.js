import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav vertical>
        <NavItem className="sidebar-list">
          <NavLink href="#">
            <Link to="/">
              Dashboard
            </Link>
          </NavLink>
        </NavItem>
        <NavItem className="sidebar-list">
          <NavLink href="#">
            <Link to="/AdHoc">
              Activities
            </Link>
          </NavLink>
        </NavItem>
        <NavItem className="sidebar-list">
          <NavLink href="#">
            <Link to="/Register">
              Workflows
            </Link>
          </NavLink>
        </NavItem>
        <NavItem className="sidebar-list">
          <NavLink href="#">
            <Link to="/Login">
              Geospatial
            </Link>
          </NavLink>
        </NavItem>
        <NavItem className="sidebar-list">
          <NavLink href="#">
            <Link to="/Register">
              Configuration
            </Link>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Sidebar;
