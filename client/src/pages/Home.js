import React from "react";
import { Card, CardBody } from 'reactstrap';
import { Icon, Grid } from "@material-ui/core";

import ContactFilter from "../components/contacts/ContactFilter";
import Contacts from "../components/contacts/Contacts";

const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <Card>
            <CardBody>
              <Grid container spacing={3}>
                <Grid item xs={2}>
                  <Icon>account_box</Icon>
                </Grid>
                <Grid item xs={10}>
                  <p>Have a new system role you need created?<br /><a>Create a new system role.</a></p>
                </Grid>
              </Grid>
            </CardBody>
          </Card>
        </div>
      </div>
      <br />
      <Card>
        <CardBody>
          <div className="grid-2">
            <div>
              <ContactFilter />
              <br />
              <Contacts />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
