import React, { useEffect, useState } from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './Navbar.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
// import Darkmode from 'darkmode-js';

import { Animated } from "react-animated-css"
const NavbarMain = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (<>

        <Navbar fixed="top" id="mainNav" expand="lg" className={colorChange ? 'scroll' : ''}>
            <Navbar.Brand id="navlogo" href="/">
                <img id="logo" src="https://cdn.discordapp.com/attachments/820318378823909417/822940069399625759/s.png" alt=""></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link className="navss" href="/furniture" >Furniture</Nav.Link>
                    <Nav.Link className="navss" href="/homedecor">
                        Home Decor
                </Nav.Link>
                    <Nav.Link className="navss" href="/walldecor">
                        Wall Decor
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Row>

            <Col className="headerContainer col-md-6">
                <div id="div1"><h1 id="header1">
                    <span className="c11">G</span>
                    <span className="c22">a</span>
                    <span className="c11">l</span>
                    <span className="c22">l</span>
                    <span className="c11">e</span>
                    <span className="c22">r</span>
                    <span className="c11">i</span>
                    <span className="c22">a</span>
                </h1>
                </div>
                {/* <p id="p2">Chival up your homes !</p> */}
                <p id="p1">We provide a personalized experience through <span>Augmented Reality</span> which eases your task of finding the perfect furniture/Decor for your homes.</p>
            </Col>
            <Col className="imagegif col-md-6"></Col>
        </Row>

    </>)
}
export default NavbarMain;