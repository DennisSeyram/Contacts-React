import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';


function App() {
  const [contacts, setContacts] = useState([
    { name: 'millie', number: '18593674', location: 'Maryland' },
    { name: 'emefa', number: '2335478098', location: 'Kasoa' },
    { name: 'joe', number: '2332081689', location: 'Madina' },
    { name: 'osborn', number: '445634987', location: 'Leeds' }
  ]);

  const addNewContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ContactForm addNewContact={addNewContact} />
          </Col>
          <Col>
            <ContactList contacts={contacts} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
