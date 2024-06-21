import React from 'react';
import Contacts from './Contacts';

function ContactList(props) {
  return (
    <div>
      {props.contacts.map((contact, index) => (
        <Contacts key={index} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;
