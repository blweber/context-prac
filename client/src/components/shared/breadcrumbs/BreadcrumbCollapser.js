import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const BreadcrumbCollapser = props => (
  <li className="breadcrumb-collapser" {...props}>
    <MoreHorizIcon />
  </li>
);

export default BreadcrumbCollapser;
