import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Three33 from "./pages/Three33";
import Three45 from "./pages/Three45";
import AdHoc from "./pages/AdHoc";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";
import Layout from "./components/Layout";
import { Navigationbar } from "./components/NavigationBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Router>
        <Navigationbar />
        <Layout>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Three33" component={Three33} />
              <Route path="/Three45" component={Three45} />
              <Route path="/AdHoc" component={AdHoc} />
              <PageNotFound />
            </Switch>
          </div>
        </Layout>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
