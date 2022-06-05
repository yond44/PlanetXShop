import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../service/service";
import ReactLoading from "react-loading";
import CardComponent from "../component/card/products-card";
import { Link } from "react-router-dom";
import { Button }from 'react-bootstrap'


const DetailProduct = () => {
    const [dataProduct, setDataProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();

    const fetchProductById = async () => {
        await setIsLoading(true);
        await getProductById(id)
            .then((response) => setDataProduct(response.data))
            .catch((error) => console.log(error));
        await setIsLoading(false);
    };

    useEffect(() => {
        fetchProductById();
    }, []);

    return (
        <div>
            {isLoading ? (
                <ReactLoading
                    type="spinningBubbles"
                    color="#0D6EFD"
                    className="m-auto mt-5"
                />
            ) : (

                <div className="Home-color" style={{ paddingTop: "50px", paddingBottom: "70px" }}>
                    <div className="card-login">
                        <div className="card-content">
                            <h1 className="styleHeader">Detail</h1>
                            <CardComponent
                                name={dataProduct.name}
                                quantity={dataProduct.quantity}
                                price={dataProduct.price}
                                image={dataProduct.image}
                            />
                            <Button as={Link} to="/">Back</Button>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    );
};

export default DetailProduct;