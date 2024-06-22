import React from 'react';
import Contacts from './Contacts';

function ContactList(props) {
  return (
    <div>
      {props.contacts.map((contact, index) => (
        <Contacts key={index} contact={contact}
        editContact = {props.editContact}
        deleteContact ={props.deleteContact}
        
        />
      ))}
    </div>
  );
}

export default ContactList;
