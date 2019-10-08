import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        firstname: "Jared ",
        lastname: "Plotkin",
        systemrole: "Edit",
        organization: "DSCA",
        email: "jp@dsca.com"
      },
      {
        id: 2,
        firstname: "Michael ",
        lastname: "Jordan",
        systemrole: "Configure",
        organization: "DSCA",
        email: "mj@dsca.com"
      },
      {
        id: 3,
        firstname: "Bridget",
        lastname: "Omo-Ekpadi",
        systemrole: "Edit",
        organization: "DSCA",
        email: "bo@dsca.com"
      },
      {
        id: 4,
        firstname: "Alex",
        lastname: "Jones",
        systemrole: "Edit",
        organization: "AC",
        email: "aj@dsca.com"
      },
      {
        id: 5,
        firstname: "Jacob",
        lastname: "Fraher",
        systemrole: "Configure",
        organization: "EC",
        email: "jf@dsca.com"
      },
      {
        id: 6,
        firstname: "James",
        lastname: "Hildebrand",
        systemrole: "View",
        organization: "MILDEP",
        email: "jh@dsca.com"
      },
      {
        id: 7,
        firstname: "Eva",
        lastname: "Sachar",
        systemrole: "Edit",
        organization: "EC",
        email: "es@dsca.com"
      },
      {
        id: 8,
        firstname: "Marie",
        lastname: "Edozie",
        systemrole: "Administrator",
        organization: "DSCA",
        email: "me@dsca.com"
      },
      {
        id: 9,
        firstname: "Adrian",
        lastname: "Meyers",
        systemrole: "Edit",
        organization: "MILDEP",
        email: "am@dsca.com"
      },
      {
        id: 10,
        firstname: "Steve",
        lastname: "Porter",
        systemrole: "Configure",
        organization: "DSCA",
        email: "sp@dsca.com"
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  // ADD_CONTACT
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //DELETE_CONTACT
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //SET_CURRENT
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //CLEAR_CURRENT
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //UPDATE_CONTACT
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //FILTER_CONTACTS
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  //CLEAR_FILTER
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      { props.children }
    </contactContext.Provider>
  );
};

export default ContactState;
