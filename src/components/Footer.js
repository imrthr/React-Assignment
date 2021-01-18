import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer_container">
                <Container>
                <Row>
                    <Col sm={9}>
                        <h5 className="about_us">About Us</h5>
                        <p>The six degree of separation theory states that we are <br/>6 people away from one another.<br/>
                        We strive to implement this theory in the IT world.<br/>
                        We are dedicated to finding you, who you want.<br/>
                        <br />
                        Email: info@ITreferrals.com<br/>
                        Phone number: 613 620 3086</p>
                    </Col>
                    <Col sm={3} className="footer_right_section">
                        <h3>ITReferrals.ca</h3>
                        <small>All rights reserved. © 2019</small>
                    </Col>
                </Row>
                </Container>
            </div>
        </>
    )
}
export default Footer;