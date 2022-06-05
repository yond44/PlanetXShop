import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import style from '../../style/header-color.css'
import logo from '../../img/logo.png'




const HeaderLogReg = () => {
  return (
    <Navbar className={style.header} variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="http://localhost:3000">
          <img
            src={logo}
            width="70%"

            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

      </Container>
    </Navbar>
  )
}

export default HeaderLogReg