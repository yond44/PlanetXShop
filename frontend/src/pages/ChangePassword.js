import React, { useState, useEffect } from 'react'
import { Form, Button, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { changePassword } from '../service/service'
import { Link } from 'react-router-dom'



function ChangePassword() {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate()
    const [msg, setMsg] = useState('')
    const [token, setToken] = useState("");


    useEffect(() => {
        refreshToken();
    }, [])


    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:8000/token');
            setToken(response.data.accessToken);
        } catch (error) {
            console.log(error);
        }
    }


    const ChangePassword = async (e) => {
        e.preventDefault();
        try {
            await changePassword (oldPassword, newPassword, token)
            navigate('/login')
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }

        }
    }


    return (
        <div style={{ backgroundColor: "#021605", paddingTop: "50px", paddingBottom: "70px" }}>
            <div className="card-login">
                <div className="card-content">
                    <h1 className="styleHeader">Change Password</h1>
                    <p>{msg}</p>
                    <Form  className="card-content">
                        <Form.Label htmlFor="username">Old Password</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            value={oldPassword}
                            placeholder='Input username'
                            onChange={(e) => setOldPassword(e.target.value)}
                            style={{ width: "80%" }}
                        />
                        <Form.Label htmlFor="password">New Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="password"
                            placeholder='Input password'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            style={{ width: "80%" }}
                        />
                        <br />
                        <Button className="submit-btn" onClick={ChangePassword}>
                            Change
                        </Button>
                        <Nav.Link as={Link} to="/profile"> Back </Nav.Link>
                    </Form>

                </div>
            </div>
        </div>

    )
}

export default ChangePassword