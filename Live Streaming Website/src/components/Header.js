import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
// import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className="App-header">
            <Container>
                <Row className="align-items-center">
                    <Col sm={3}>
                        <div className="logoName">
                            <a href="/"><img src="/images/Hardcore-LIVE_Logo.png" alt="Hardcore Fitness" /></a>
                        </div>
                    </Col>
                    <Col sm={9}>
                        <Navbar expand="md">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link href="#">The Experience</Nav.Link>
                                    <Nav.Link href="/our-programs">Programs</Nav.Link>
                                    <Nav.Link href="/live-schedule">Live Schedule</Nav.Link>
                                    <Nav.Link href="/on-demand">On-Demand</Nav.Link>
                                    <Nav.Link href="/our-trainers">Meet Our Trainers</Nav.Link>
                                    <Nav.Link href="#">Shop</Nav.Link>
                                    <Nav.Link href="/sign-in">Sign In</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
