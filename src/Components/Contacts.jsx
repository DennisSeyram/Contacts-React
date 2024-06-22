import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function Contacts(props) {

const [show, setShow] = useState(false);
const [name, setName] = useState(props.contact.name);
  const [number, setNumber] = useState(props.contact.number);
  const [location, setLocation] = useState(props.contact.location);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

const handleModal =()=>{
  setShow(!show)
 }

const handleEdit = (e) =>{
  e.preventDefault()
  let newContact = {
    name:name,
    number:number,
    location:location
  }

  let mergedContact = { ...props.contact, ...newContact };
  props.editContact(props.contact.id, mergedContact);
  handleModal();
}


  return (
    <div>
      <h1>{props.contact.name}</h1>
      <h1>{props.contact.number}</h1>
      <h1>{props.contact.location}</h1>

      <Button onClick={handleModal} variant="primary">Edit</Button>
      <Button variant="danger"
      onClick={()=>props.deleteContact(props.contact.id)}
      >Delete</Button>


      <Modal show={show} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit="">
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

        <Button  ovariant="primary" type="submit"  onClick={handleEdit}>
          Save Changes
        </Button>
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    
    </div>
  );
}

export default Contacts;
