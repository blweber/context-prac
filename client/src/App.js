import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Layout from "../src/layouts/Layout";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import ContactForm from "./components/contacts/ContactForm";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Sidebar from "./layouts/Sidebar";
import ContactState from "./context/contact/ContactState";
import ActivityState from "./context/activities/ActivityState";
import SystemRoles from "./pages/SystemRoles";
import CreateSystemRole from "./pages/CreateSystemRole";
import ActivityTable from "./components/activities/ActivityTable";

import "./App.scss";

import { StylesProvider } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
    <StylesProvider injectFirst>
      <ContactState>
        <ActivityState>
          <Fragment>
            <Router>
              <NavBar />
              <Grid container>
                <Sidebar />
                <Layout>
                  <div>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/SystemRoles" component={SystemRoles} />
                      <Route exact path="/ContactForm" component={ContactForm} />
                      <Route exact path="/CreateSystemRole" component={CreateSystemRole} />
                      <Route exact path="/Login" component={Login} />
                      <Route exact path="/Register" component={Register} />
                      <Route exact path="/Activities" component={ActivityTable} />
                      <Route path="/" component={PageNotFound} />
                    </Switch>
                  </div>
                </Layout>
              </Grid>
              <Footer />
            </Router>
          </Fragment>
        </ActivityState>
      </ContactState>
    </StylesProvider>
  );
};

export default App;
