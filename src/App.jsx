import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import { v4 as uuid} from 'uuid'


function App() {
  const [contacts, setContacts] = useState([
    { name: 'millie', number: '+18593674', location: 'Maryland', id:uuid ()},
    { name: 'emefa', number: '+2335478098', location: 'Kasoa', id:uuid () },
    { name: 'joe', number: '+2332081689', location: 'Madina', id:uuid () },
    { name: 'osborn', number: '+445634987', location: 'Leeds', id:uuid () }
  ]);

  const addNewContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };


  const editContact = (id, editedContact) => {
    let contactArray = contacts.map((contact) => {
      if(contact.id ===id){
        return editedContact
      }else {
        return contact
      }
    })
    setContacts(contactArray);
  }

  const deleteContact = (id)=>{
    let filteredContact = contacts.filter((contact) => {
      if (contact.id !==id)
        return contact
    })
    setContacts(filteredContact)

  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ContactForm addNewContact={addNewContact} />
          </Col>
          <Col>
            <ContactList
            deleteContact ={deleteContact}
            editContact = {editContact}
            contacts={contacts} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
