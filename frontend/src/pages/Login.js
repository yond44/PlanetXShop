import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { LogIn } from '../service/service'
import { Link } from 'react-router-dom'


function Login() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("")
    const navigate = useNavigate()


    const Login = async (e) => {
        e.preventDefault();
        try {
            await LogIn (username, password)
            navigate('/dashboard')
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error);
            }

        }
    }


    return (
        <div style={{ backgroundColor: "rgba(24, 23, 23, 0.774)", paddingTop: "50px", paddingBottom: "70px" }}>
            <div className="card-login">
                <div className="card-content">
                    <h1 className="styleHeader">Login</h1>
                    <p>{error}</p>
                    <Form onSubmit={Login} className="card-content">
                        <Form.Label htmlFor="username">Username</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            value={username}
                            placeholder='Input username'
                            onChange={(e) => setUserName(e.target.value)}
                            style={{ width: "80%" }}
                        />
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="password"
                            placeholder='Input password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: "80%" }}
                        />
                        <br />
                        <button className="submit-btn">
                            Login
                        </button>
                        <Link as={Link} to='/'> Home </Link>
                        <Link as={Link} to='/register'> Register here </Link>
                        
                    </Form>

                </div>
            </div>
        </div>

    )
}

export default Login