import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Three33 from "./pages/Three33";
import Three45 from "./pages/Three45";
import AdHoc from "./pages/AdHoc";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";

import { Navigationbar } from "./components/layouts/NavigationBar";
import Footer from "./components/layouts/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Sidebar from "./components/layouts/Sidebar";
import Layout from "./components/layouts/Layout";

const App = () => {
  return (
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
              <Route exact path="/Register" component={Register} />
              <Route exact path="/Login" component={Login} />
              <Route path="/" component={PageNotFound} />
            </Switch>
          </div>
        </Layout>
        <Footer />
      </Router>
    </Fragment>
  );
};

export default App;
