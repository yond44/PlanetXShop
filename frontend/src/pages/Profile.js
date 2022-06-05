import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { updateProfile, deleteAccount } from '../service/service'
import swal from 'sweetalert'



function ProfileCard() {

    const [username, setUserName] = useState("");
    const [name, setName] = useState(`${username}`);
    const [address, setAddress] = useState(`${username}`);
    const [phone_number, setPhoneNumber] = useState(`${username}`);
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();




    const [token, setToken] = useState("");


    useEffect(() => {
        refreshToken();
    }, [])


    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:8000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setUserName(decoded.username);
            setName(decoded.name)
            setAddress(decoded.address)
            setPhoneNumber(decoded.phone_number)
        } catch (error) {
            console.log(error);
            
        }
    }



    const Update = async (e) => {
        e.preventDefault();
        try {
            await updateProfile(name, address, phone_number, username, token)
            .then ((response) => setSuccess(response.data.success))
            navigate('/profile')
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }

        }
    }


    const deleteACC = () => {
        
      swal({
          title: "Are you sure?",
          text: "your account and data will be all deleted from our system!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
      }).then(async (willDelete) => {
          
          if (willDelete) {
              await deleteAccount(username, token)
                  .then((response) => console.log(response.data))
                  .catch((error) => console.log(error));
              navigate('/login')
          }
      });
  };


    return (
        <div style={{ backgroundColor: "#162649", paddingTop: "50px", paddingBottom: "70px" }}>
            <div className="profile">
                <h1 className="profileHeader">Profile</h1>
                <Form className="profileContent">
                <p>{success}</p>
                    <Form.Label htmlFor="name"><p>Name :</p> </Form.Label>
                    <Form.Control
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ width: "30%" }}
                    />

                    <Form.Label htmlFor="phone_number" style={{ paddingTop: "10px" }}><p>Phone Number : </p></Form.Label>
                    <Form.Control
                        type="number"
                        id="phone_number"
                        value={phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        style={{ width: "30%" }}
                    />

                    <Form.Label htmlFor="address" style={{ paddingTop: "10px" }}><p>Address : </p></Form.Label>
                    <Form.Control
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        style={{ width: "70%" }}
                    />

                    <br />
                    <button className="profile-btn" onClick={Update}>
                        Edit Profile
                    </button>

                </Form>
                <div className="profileContent">
                    <br />

                    <Button className="profile-btn" href="http://localhost:3000/profile/password">
                        Change Password
                    </Button>
                    <br />

                    <Button className="profile-btn my-3" onClick={() => {
                            deleteACC()
                        }}>
                            Delete All 
                        </Button>
                </div>




            </div>
        </div>

    )
}

export default ProfileCard