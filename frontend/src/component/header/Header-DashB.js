import React from 'react';
import {
    Navbar,
    Container,
    Nav,
    Form,
    Button,
    NavDropdown
} from 'react-bootstrap';
import style from '../../style/header-color.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import logo from '../../img/logo.png'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';





function HeaderDashB() {
    const navigate = useNavigate()
    const isLogin = Cookies.get("refreshToken");


    const Logout = async () => {

        try {
            await axios.delete('http://localhost:8000/logout')
            navigate('/')
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }

        }
    }



    return (
        <div>
            <Navbar className={style.header} variant="dark" expand="lg">
                <Container fluid>
                    <Nav.Link as={Link} to='/'>
                        <img
                            src={logo}
                            width="100%"

                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                        </Nav>
                        <Form className="d-flex" right="300" style={{ paddingRight: "20px" }}>

                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                style={{ width: "450px" }}
                            />

                            <Button variant="outline-success"><b>Search</b></Button>
                        </Form>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {isLogin ? (
                                <>
                                    <Nav.Link as={Link} to="/dashboard"><b>Home</b></Nav.Link>
                                    <Nav.Link as={Link} to="/products"><b>Products</b></Nav.Link>
                                    <NavDropdown title="More" id="navbarScrollingDropdown">
                                        <NavDropdown.Item as={Link} to="/profile"><b>Profile</b></NavDropdown.Item>
                                    </NavDropdown>
                                    <Button variant="outline-success" onClick={Logout}><b>Logout</b></Button>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={Link} to="/login">
                                        <Button variant="outline-success"><b>Login</b></Button>
                                        
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/register">
                                        <Button variant="outline-success"><b>Register</b></Button>
                                    </Nav.Link>
                                </>
                            )}




                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>
    )
}

export default HeaderDashB
