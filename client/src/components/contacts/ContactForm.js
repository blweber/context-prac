import React, { useState, useContext, useEffect } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  NativeSelect
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Fab from "@material-ui/core/Fab";
import ContactContext from "../../context/contact/contactContext";
import "./contactForm.scss";
import { Link } from "react-router-dom";

const ContactForm = props => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, current, clearCurrent } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        firstname: "",
        lastname: "",
        systemrole: "",
        organization: "",
        datarole: "",
        email: ""
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    systemrole: "",
    organization: "",
    datarole: "",
    email: ""
  });

  const {
    firstname,
    lastname,
    systemrole,
    datarole,
    organization,
    email
  } = contact;

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
      datarole: "",
      systemrole: ""
    });
    props.history.push("/");
  };

  const clearAll = () => {
    clearCurrent();
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
                  className={{ label: "cancel-btn" }}
                  style={{ width: "200px" }}
                  onClick={clearAll}
                  component={Link}
                  to="/"
                >
                  Cancel
                </Fab>
              </Grid>
              <Grid item xs={6}>
                <Fab
                  variant="extended"
                  size="small"
                  aria-label="save"
                  className={"save-btn"}
                  style={{ width: "200px", float: "right" }} //TODO: remove inline styling
                  type="submit"
                >
                  {current ? "Edit User" : "Save"}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card className="add-user-card">
              <CardHeader title="First Name" />
              <FormControl>
                <InputLabel className={{ root: "card-font" }}>
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
            <Card className="add-user-card">
              <CardHeader title="Last Name" />
              <FormControl>
                <InputLabel>Last Name</InputLabel>
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
            <Card className="add-user-card">
              <CardHeader title="Email Address" />
              <FormControl>
                <InputLabel>Email Address</InputLabel>
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
            <Card className="add-user-card">
              <CardHeader title="Organization" />
              <FormControl>
                <InputLabel>Organization</InputLabel>
                <NativeSelect
                  value={organization}
                  onChange={onChange}
                  name="organization"
                >
                  <option value="" />

                  <optgroup label="Organizations">
                    <option value="AC">AC</option>
                    <option value="DSCA">DSCA</option>
                    <option value="EC">EC</option>
                    <option value="MILDEP">MILDEP</option>
                  </optgroup>
                </NativeSelect>
              </FormControl>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card className="add-user-card">
              <CardHeader title="Employee Type" />
              <FormControl>
                <InputLabel>Employee Type</InputLabel>
                <NativeSelect
                  // value={organization}
                  onChange={onChange}
                  name="employeetype"
                >
                  <option value="" />
                  <optgroup label="Employee Type">
                    <option value="CONT">CONT</option>
                    <option value="GS">GS</option>
                    <option value="MILITARY">MILITARY</option>
                  </optgroup>
                </NativeSelect>
              </FormControl>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className="add-user-card">
              <CardHeader title="System Role" />
              <FormControl>
                <InputLabel>System Role</InputLabel>
                <NativeSelect
                  value={systemrole}
                  onChange={onChange}
                  name="systemrole"
                >
                  <option value="" />

                  <optgroup label="System Role">
                    <option value="Administrator">Administrator</option>
                    <option value="Edit">Edit</option>
                    <option value="Configure">Configure</option>
                    <option value="View">View</option>
                    <option value="No Access">No Access</option>
                  </optgroup>
                </NativeSelect>
              </FormControl>
            </Card>
          </Grid>
          {/* <Grid item xs={4}>
            <Card className="add-user-card">
              <CardHeader title="Data Role" />
              <FormControl>
                <InputLabel>Data Role</InputLabel>
                <Input
                  type="text"
                  placeholder="DataRole"
                  name="datarole"
                  value={datarole}
                  onChange={onChange}
                  // className="mx-1"
                />
              </FormControl>
            </Card>
          </Grid> */}
        </Grid>
      </form>
    </div>
  );
};

export default ContactForm;
