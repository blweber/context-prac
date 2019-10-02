import React, { useContext, useState } from "react";

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

import ContactContext from "../../context/contact/contactContext";

import './contactTable.scss';

const ContactTable = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { deleteContact } = contactContext;

  const { id, firstname, lastname, systemrole, organization, email } = contact;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onDelete = () => {
    deleteContact(id);
  };

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td>{organization}</td>
      <td>{systemrole}</td>
      <Grid container justify="center">
        <IconButton onClick={handleClick} className={'icon-button'} aria-controls="action-menu" aria-haspopup="true">
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="action-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Disable</MenuItem>
            <MenuItem onClick={handleClose}>Update</MenuItem>
            <MenuItem onClick={onDelete}>Delete</MenuItem>
        </Menu> 
      </Grid>
    </tr>
  );
};

export default ContactTable;