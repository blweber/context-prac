import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer mt-auto py-3 fixed-bottom navbar-dark bg-dark expand=lg">
          <div className="container">
            <span className="text-success">
              <strong>SOCIUM</strong> - Managing the Global Theater Security
              Cooperation Enterprise for the Defense Security Cooperation
              Agency.
            </span>
          </div>
        </footer>
      </div>
    );
  }
}
