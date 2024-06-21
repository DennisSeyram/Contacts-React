import React from 'react';

function Contacts(props) {
  return (
    <div>
      <h1>{props.contact.name}</h1>
      <h1>{props.contact.number}</h1>
      <h1>{props.contact.location}</h1>
    </div>
  );
}

export default Contacts;
