import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        firstname: "",
        lastname: "",
        systemrole: "",
        organization: ""
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    systemrole: "",
    organization: ""
  });

  const { firstname, lastname, systemrole, organization } = contact;

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
      systemrole: "",
      organization: ""
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <h2 className="text-primary mx-5">Add User </h2>
        <input
          type="text"
          placeholder="FirstName"
          name="firstname"
          value={firstname}
          onChange={onChange}
          className="mx-1"
        />
        <input
          type="text"
          placeholder="LastName"
          name="lastname"
          value={lastname}
          onChange={onChange}
          className="mx-1"
        />
        <input
          type="text"
          placeholder="System Role"
          name="systemrole"
          value={systemrole}
          onChange={onChange}
          className="mx-1"
        />
        <input
          type="text"
          placeholder="Organization"
          name="organization"
          value={organization}
          onChange={onChange}
          className="mx-1"
        />
        <div>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
