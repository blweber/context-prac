import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import { Link } from "react-router-dom";
import { Input, Button, Icon } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const SystemFilter = () => {
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
        <Input type="text" placeholder="Search..." onChange={onChange} />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained">
          <Link to="/CreateSystemRole">Create System Role</Link>
        </Button>
      </Grid>
    </Grid>
  );
};

export default SystemFilter;
