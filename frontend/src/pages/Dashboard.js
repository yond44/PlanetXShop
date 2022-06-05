import React, { useState, useEffect } from 'react'
import {  Container } from 'react-bootstrap'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { GetAllProducts } from '../service/service'
import ReactLoading from 'react-loading'
import { Link } from "react-router-dom";
import CardComponent from '../component/card/products-card'
import Carousels from '../component/carousel/carousel'

function Products() {

  const [dataAllProducts, setDataAllProducts] = useState([]);
  const [refresh, setRefresh] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [token, setToken] = useState("");




  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:8000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
    } catch (error) {
      console.log(error);
    }
  }



  const fetchGetAllProducts = async () => {
    try {
      await GetAllProducts()
        .then((response) => setDataAllProducts(response.data));
        setRefresh()
        setIsLoading()
    } catch (error) {

    }
  }

  useEffect(() => {
    refreshToken()
    fetchGetAllProducts()
  }, [token, refresh]);


  return (
    <>
    <Carousels/>
    <div className="Home-color" style={{ color: 'dark', paddingTop: '50px', paddingBottom: '100px' }}>
      <Container>
        <h1><b>Welcome back {name} </b></h1>
        <br />
        {isLoading ? (
          <ReactLoading
            type="spinningBubbles"
            color="#0D6EFD"
            className="m-auto mt-5"
          />
        ) : (<div className="d-flex flex-wrap justify-content-around" >

          {dataAllProducts.map((item) => (
            <Link
              to={`/detail-product/${item.id}`}
              className="text-decoration-none"
            >
            
                <CardComponent
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                  image={item.image}
                />
            </Link>

          ))}
        </div>)}





      </Container>
    </div>
    </>
  );
}

export default Products