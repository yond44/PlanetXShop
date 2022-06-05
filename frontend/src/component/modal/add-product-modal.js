
import { Modal, Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { AddProduct } from "../../service/service";

const AddProductModal = (props) => {
    const { show, handleClose, setRefresh, refresh } = props;
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate()

    const [username, setUserName] = useState("");
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
        } catch (error) {
            console.log(error);
        }
    }

  
    

    const Input = async (e) => {
        e.preventDefault();

        await AddProduct(name, quantity, price, image, token)
        setRefresh(!refresh);
        handleClose();

    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={Input}>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Input product name ..."
                            autoFocus
                            required
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            type="number"
                            placeholder="Input product quantity ..."
                            autoFocus
                            required
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="number"
                            placeholder="Input product price ..."
                            autoFocus
                            required
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            type="text"
                            placeholder="Input product image url ..."
                            autoFocus
                            required
                        />
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddProductModal;