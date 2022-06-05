import React from 'react';
import { Carousel, Container, CarouselItem } from 'react-bootstrap';
import bs from '../../img/Bigsale.webp'
import cb from '../../img/cashback.jpg'
import discount from '../../img/Discount.jpg'

function Carousels() {
    return (
        <div className="Home-color">
            <Container>
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <img style={{ maxWidth: '100%', minWidth: '100%', maxHeight: '350px', minHeight: "350px" }}
                            className="d-block w-100"
                            src={bs}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img style={{ maxWidth: '100%', minWidth: '100%', maxHeight: '350px', minHeight: "350px" }}
                            className="d-block w-100"
                            src={discount}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img style={{ maxWidth: '100%', minWidth: '100%', maxHeight: '350px', minHeight: "350px" }}
                            className="d-block w-100"
                            src={cb}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>

    )
}

export default Carousels