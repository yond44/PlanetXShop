import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Registration } from '../service/service'



function Register() {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate();


  const Register = async (e) => {
    e.preventDefault();
    try {
      await Registration(username, password, name, address, phone_number);
      navigate('/login')
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      }

    }
  }

  return (
    <div style={{ backgroundColor: "#2c2504", paddingTop: "50px", paddingBottom: "70px" }}>
      <div className="card-register">
        <div className="card-content">
          <h1 className="styleHeader">Registration</h1>
          <p>{error}</p>
          <Form  className="card-content">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              id="name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              style={{ width: "80%" }}
            />
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "80%" }}
            />
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "80%" }}
              autoFocus
              required
            />
            <Form.Label htmlFor="address">Address</Form.Label>
            <Form.Control
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{ width: "80%" }}
              autoFocus
              required
            />
            <Form.Label htmlFor="phone_number">Phone Number</Form.Label>
            <Form.Control
              type="number"
              id="phone_number"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{ width: "80%" }}
              autoFocus
              requiredrequired
            />
            <br />
            <Button className="submit-btn" variant='primary' onClick={Register}>
              Register
            </Button>
            <Link as={Link} to='/'> Home </Link>
            <Link as={Link} to='/login'> Login </Link>
          </Form>

        </div>
      </div>
    </div>

  )
}

export default Register