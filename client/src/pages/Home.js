import React from "react";
import ContactFilter from "../components/contacts/ContactFilter";
import Contacts from "../components/contacts/Contacts";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
