import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Logo"
              src="https://i.pinimg.com/originals/d5/ec/9c/d5ec9c42cade6c696ef244cc33efedd3.gif"
              width="60"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Restaurant Listing
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
