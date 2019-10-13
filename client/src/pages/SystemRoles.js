import React from "react";
import { Card, CardBody } from "reactstrap";
import SystemFilter from "../components/systemroles/SystemFilter";
import { Icon, Grid } from "@material-ui/core";
import SystemTable from "../components/systemroles/SystemTable";

const SystemRoles = () => {
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
                  <p>
                    Have a new system role you need created?
                    <br />
                    <a>Create a new system role.</a>
                  </p>
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
            <h3>Manage System Roles</h3>
            <div>
              <SystemFilter href={"/CreateSystemRole"} />
            </div>
            <SystemTable />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SystemRoles;
