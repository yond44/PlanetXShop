import React from 'react'
import logo from '../../img/logo.png'
import { Container } from 'react-bootstrap'


function Footer() {
    return (
        <div style={{ backgroundColor: "#0F1111", paddingBottom: "100px", paddingTop: "30px" }} >
            <Container fluid style={{ backgroundColor: "#0F1111", display: "flex", justifyContent: "space-around" }}>
                <div>
                    <img
                        src={logo}
                        width="75%"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <p style={{ paddingLeft: "15px", color: "white" }}>"Your Best Choice For Your Daily Necessity"</p>
                </div>
                <div style={{ fontSize: "12px", paddingRight: "80px", color: "white" }}>
                    <h2 > Contact Us</h2>
                    <p>Email    : planetX@gmail.com</p>
                    <p>Twitter  : @PlanetX</p>
                    <p>Facebook : PlanetX</p>
                    <p>Our Number : 0657854665</p>
                </div>
                <div style={{ fontSize: "12px", paddingRight: "80px", color: "white" }}>
                    <h2 > Our Service</h2>
                    <p>We provide a service for merchants to upload and sell their products in <br />our platform so that the 
                        costumer  can easily choice various variant of <br />products and prices from different merchants. 
                        our service can only be <br /> accesed by official merchants that sell only original products and we 
                        have <br />very strict mearusement to select merchants who want to join us. not only <br /> that, we also provide
                        for the costumer some services that can't you even find <br /> in other platform like, you can buy a planet if
                        there are some alliens who want to sell<br /> their planet or even you can buy spaceship or travel ticket to go
                        to outer space <br /> and you can also join some exploration program on our other website if you <br />interested in outer space
                        and universe in general. PlanetX is the only one <br /> who can provide both costumer and merchants the experience that 
                        you <br />never felt before. you can trust each other because we guarantee the security<br /> and our service wil sastify your
                        need to buy a product or sell even your planet.</p>

                </div>
            </Container >
        </div>


    )
}

export default Footer