import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import { Input, Button, Icon } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';

import "./contactFilter.scss"

const ContactFilter = () => {
  const contactContext = useContext(ContactContext); //app level state

  const { filterContacts, clearFilter } = contactContext;

  const onChange = event => {
    let inputFiltering = event.target.value;
    if (inputFiltering !== "") {
      //if there is filtering contact
      filterContacts(inputFiltering);
    } else {
      clearFilter();
    }
  };

  return (
    <Grid container spacing={3}>
        <Grid item xs={10}>
        <Icon>search</Icon>
        <Input
          type="text"
          placeholder="Search..."
          onChange={onChange}
        />
        </Grid>
        <Grid item xs={2}>
        <Fab
          href="/ContactForm"
          variant="extended"
          size="small"
          aria-label="save"
          className={'add-user-btn'}
          style={{width: '200px', float: 'right'}} //TODO: remove inline styling
          type="button"
        >
          Add User
        </Fab>
      </Grid>
    </Grid>
  );
};

export default ContactFilter;
