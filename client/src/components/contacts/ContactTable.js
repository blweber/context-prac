import React, { useContext } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown
} from "reactstrap";
import ContactContext from "../../context/contact/contactContext";

const ContactTable = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { id, firstname, lastname, systemrole, organization, email } = contact;

  const [anchorEl, setAnchorEl] = React.useState(null);

  console.log('CONTACT: ', contact);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const { id, firstname, lastname, systemrole, organization } = contact;

  const onDelete = () => {
    deleteContact(id);
  };

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{systemrole}</td>
      <td>{organization}</td>
      <UncontrolledButtonDropdown className="dropdown m-2">
        <DropdownToggle caret>Action</DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Disable</DropdownItem>
          <DropdownItem>Update</DropdownItem>
          <DropdownItem onClick={onDelete}>Delete</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </tr>
  );
};

export default ContactTable;
