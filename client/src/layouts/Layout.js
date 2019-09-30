import React from "react";
import { Container } from "reactstrap";

import './layout.scss';

const Layout = props => {
  return <Container className={'container-div'}>{props.children}</Container>;
};

export default Layout;
