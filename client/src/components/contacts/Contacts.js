import React, { useContext } from "react";
import { Table } from "reactstrap";

import ContactContext from "../../context/contact/contactContext";

import ContactTable from "./ContactTable";
import "./contacts.scss";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a User</h4>;
  }

  return (
    <div>
      <Table hover>
        <thead>
          <tr className="table-header">
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email Address</th>
            <th scope="col">Organization</th>
            <th scope="col">System Role</th>
            <th scope="col">Data Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered !== null
            ? filtered.map(contact => <ContactTable contact={contact} />)
            : contacts.map(contact => <ContactTable contact={contact} />)}
        </tbody>
      </Table>
    </div>
  );
};
export default Contacts;
