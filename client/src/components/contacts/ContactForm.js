import React, { useState, useContext, useEffect } from "react";
import { Grid, FormControl, InputLabel, Input, TextField } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Fab from '@material-ui/core/Fab';

import ContactContext from "../../context/contact/contactContext";
import "./contactForm.scss"

const ContactForm = props => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        firstname: "",
        lastname: "",
        systemrole: "",
        organization: "",
        email: ""
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    systemrole: "",
    organization: "",
    email: ""
  });

  const { firstname, lastname, systemrole, organization, email } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    setContact({
      firstname: "",
      lastname: "",
      email: "",
      organization: "",
      employeetype: "",
      systemrole: "",
    });
    props.history.push("/");
  };

  return (
 
    <div>
      <form onSubmit={onSubmit}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Grid container alignItems="flex-start" justify="flex-end">
                <Grid item xs={6}>
                  <Fab
                    variant="extended"
                    size="small"
                    aria-label="cancel"
                    className={{ label: 'cancel-btn' }}
                    style={{width: '200px'}}
                  >
                    Cancel
                  </Fab>
                </Grid>
                <Grid item xs={6}>
                  <Fab
                    variant="extended"
                    size="small"
                    aria-label="save"
                    className={'save-btn'}
                    style={{width: '200px', float: 'right'}} //TODO: remove inline styling
                    type="submit"
                  >
                    Save and Finish
                  </Fab>
                </Grid>
            </Grid>
          </Grid>   
            <Grid item xs={6} sm={4}>
              <Card className='add-user-card'>
                  <CardHeader
                    title="First Name"
                  />
                  <FormControl>
                    <InputLabel className={{ root: 'card-font'}}>
                      First Name
                    </InputLabel>
                    <Input 
                      type="text"
                      placeholder="FirstName"
                      name="firstname"
                      value={firstname}
                      onChange={onChange}
                      // className="mx-1"
                    />
                  </FormControl>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Card className='add-user-card'>
                <CardHeader
                  title="Last Name"
                />
                <FormControl>
                  <InputLabel>
                    First Name
                  </InputLabel>
                  <Input 
                    type="text"
                    placeholder="LastName"
                    name="lastname"
                    value={lastname}
                    onChange={onChange}
                    // className="mx-1"
                  />
                </FormControl>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Card className='add-user-card'>
                <CardHeader
                  title="Email Address"
                />
                <FormControl>
                  <InputLabel>
                    Email Address
                  </InputLabel>
                  <Input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className="mx-1"
                  />
                </FormControl>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Card className='add-user-card'>
                  <CardHeader
                    title="Organization"
                  />
                  <FormControl>
                    <InputLabel>
                      Organization
                    </InputLabel>
                    <Input 
                      type="text"
                      placeholder="Organization"
                      name="organization"
                      value={organization}
                      onChange={onChange}
                      // className="mx-1"
                    />
                  </FormControl>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Card className='add-user-card'>
                <CardHeader
                  title="Employee Type"
                />
                <FormControl>
                  <InputLabel>
                  Employee Type
                  </InputLabel>
                  <Input 
                    type="text"
                    placeholder="EmployeeType"
                    // name="employeetype"
                    // value={employeetype}
                    // onChange={onChange}
                    // className="mx-1"
                  />
                </FormControl>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card className='add-user-card'>
                <CardHeader
                  title="System Role"
                />
                <FormControl>
                  <InputLabel>
                    System Role
                  </InputLabel>
                  <Input 
                    type="text"
                    placeholder="SystemRole"
                    name="systemrole"
                    value={systemrole}
                    onChange={onChange}
                    // className="mx-1"
                  />
                </FormControl>
              </Card>
            </Grid>
          </Grid>
        </form>
      </div>
  );
};

export default ContactForm;