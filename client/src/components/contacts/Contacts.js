import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

import ContactTable from "./ContactTable";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a Contact</h4>;
  }

  return (
    <div className="table-view">
      <table className=" table-striped ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">System Role</th>
            <th scope="col">Organization</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered !== null
            ? filtered.map(contact => <ContactTable contact={contact} />)
            : contacts.map(contact => <ContactTable contact={contact} />)}
        </tbody>
      </table>
    </div>
  );
};
export default Contacts;
