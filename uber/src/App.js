import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Login from './components/LoginView';
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
  
  <BrowserRouter>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
      {' Uberambient '}
    </Navbar.Brand>
    </Container>
  </Navbar>
  <Login/>
        

  </BrowserRouter>


  );
}

export default App;