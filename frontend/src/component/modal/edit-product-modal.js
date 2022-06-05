import React, { useState, useEffect } from 'react'
import { Modal, Form, Button } from "react-bootstrap";
import { updateProduct } from '../../service/service';

import axios from 'axios'
import jwt_decode from 'jwt-decode'

const EditProductModal = (props) => {
    const { showEdit, handleCloseEdit, setRefresh, refresh, dataEditProduct } =
        props;
    const [id, setId] = useState('')
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");


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


    const editProduct = async (e) => {
        e.preventDefault();
        await updateProduct(id, name, quantity, price, image, token)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        handleCloseEdit();
        setRefresh(!refresh);
    };

    useEffect(() => {
        setId(dataEditProduct.id)
        setName(dataEditProduct.name);
        setPrice(dataEditProduct.price);
        setQuantity(dataEditProduct.quantity);
        setImage(dataEditProduct.image);
    }, [dataEditProduct.id]);

    return (
        <Modal show={showEdit} onHide={handleCloseEdit}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={editProduct}>
                <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>id</Form.Label>
                        <Form.Control
                            value={id}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Input product name ..."
                            autoFocus
                            required
                            disabled='disabled'
                        />
                    </Form.Group>
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
                        <Button variant="secondary" onClick={handleCloseEdit}>
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

export default EditProductModal;