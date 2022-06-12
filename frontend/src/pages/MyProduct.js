import React, { useState, useEffect } from 'react'
import { Container, Table, Button } from "react-bootstrap"
import axios from 'axios'

import AddProductModal from '../component/modal/add-product-modal'
import EditProductModal from '../component/modal/edit-product-modal'
import swal from 'sweetalert';
import { GetMyProducts, deleteProduct, deleteAllProduct } from '../service/service'


function MyProduct() {

    const [dataAllProducts, setDataAllProducts] = useState([]);
    const [dataEditProduct, setDataEditProduct] = useState({})
  
    const [refresh, setRefresh] = useState(false);
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false)

 
    const [token, setToken] = useState("");


   

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:8000/token');
            setToken(response.data.accessToken);
           
           
        } catch (error) {
            console.log(error);
        }
    }

    const fetchAllProducts = async (token) => {
   
        await GetMyProducts(token)
            .then((response) => setDataAllProducts(response.data))
            .catch((error) => console.log(error));
    
    };

  

    useEffect(() => {
        refreshToken()
            if (token) {
                fetchAllProducts(token)
            }
            
        
        
    }, [token, refresh]);
    
    
    const deleteProductById = (id) => {
        
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            
            if (willDelete) {
                await deleteProduct(id, token)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error));
                setRefresh(!refresh);
            }
        });
    };

    const deleteAllProducts = () => {
        
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            
            if (willDelete) {
                await deleteAllProduct(token)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error));
                setRefresh(!refresh);
            }
        });
    };




    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    return (
        <div className='Home-color' style={{ backgroundColor: "Home-color", paddingTop: "90px", paddingBottom: "90px" }}>
            <Container>
                <div>
                    <AddProductModal
                        show={show}
                        handleClose={handleClose}
                        setRefresh={setRefresh}
                        refresh={refresh}
                    />
                    <EditProductModal
                    showEdit={showEdit}
                    handleCloseEdit={handleCloseEdit}
                    setRefresh={setRefresh}
                    refresh={refresh}
                    dataEditProduct={dataEditProduct}
                />
                    <h1>My Products</h1>
                    <div className="d-flex justify-content-end">
                        <Button variant="dark" className="my-3" onClick={handleShow}>
                            Add Product
                        </Button>
                        <Button variant="dark" className="my-3" onClick={() => {
                            deleteAllProducts()
                        }}>
                            Delete All 
                        </Button>
                    </div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataAllProducts.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Button variant="warning" type="button" 
                                        onClick={() => {
                                            handleShowEdit()
                                            setDataEditProduct(item)
                                        }}>
                                            Edit
                                        </Button>
                                        <Button
                                            variant="danger"
                                            type="button"
                                            className="mx-2"
                                            onClick={() =>
                                                deleteProductById(item.id)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>

    )
}

export default MyProduct