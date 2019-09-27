import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown
} from "reactstrap";

const ContactTable = ({ contact }) => {
  const { id, firstname, lastname, systemrole, organization } = contact;

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{systemrole}</td>
      <td>{organization}</td>
      <UncontrolledButtonDropdown className="dropdown m-1">
        <DropdownToggle caret>Action</DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header>Trigger</DropdownItem>
          <DropdownItem disabled>Feedback</DropdownItem>
          <DropdownItem>Rules</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </tr>
  );
};

export default ContactTable;
