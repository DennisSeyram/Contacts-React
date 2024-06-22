import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactForm(props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '' || location.trim() === '') {
      
      return;
    }
    let newContact = {
      name: name,
      number: number,
      location: location
    };
    props.addNewContact(newContact);
    setName('');
    setNumber('');
    setLocation('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            onChange={handleNameChange}
            value={name}
            type="text"
            placeholder="Enter Full Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            onChange={handleNumberChange}
            value={number}
            type="tel"
            placeholder="Enter Phone Number"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            onChange={handleLocationChange}
            value={location}
            type="text"
            placeholder="Enter Location"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
