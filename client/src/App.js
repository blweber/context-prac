import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Three33 from "./pages/Three33";
import Three45 from "./pages/Three45";
import AdHoc from "./pages/AdHoc";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";
import Layout from "../src/layouts/Layout";
import { Navigationbar } from "./layouts/NavigationBar";
import Footer from "./layouts/Footer";
import ContactForm from "./components/contacts/ContactForm";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Sidebar from "./layouts/Sidebar";
import ContactState from "./context/contact/ContactState";
import SystemRoles from "./pages/SystemRoles";
import CreateSystemRole from "./pages/CreateSystemRole";

const App = () => {
  return (
    <ContactState>
      <Fragment>
        <Router>
          <Navigationbar />
          <Sidebar />
          <Layout>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Three33" component={Three33} />
                <Route exact path="/Three45" component={Three45} />
                <Route exact path="/AdHoc" component={AdHoc} />
                <Route exact path="/SystemRoles" component={SystemRoles} />
                <Route exact path="/ContactForm" component={ContactForm} />
                <Route
                  exact
                  path="/CreateSystemRole"
                  component={CreateSystemRole}
                />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Register" component={Register} />
                <Route path="/" component={PageNotFound} />
              </Switch>
            </div>
          </Layout>
          <Footer />
        </Router>
      </Fragment>
    </ContactState>
  );
};

export default App;
