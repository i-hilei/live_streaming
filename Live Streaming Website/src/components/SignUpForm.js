import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function SignUpPage() {
    return (
        <section className="loginPage">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12} md={6}>
                        <Form>
                            <h2>Let's get started!</h2>
                            <p>Sign up to activate your free 14-day trial</p>
                            <Row>
                                <Col sm={12} md={6}>
                                    <Form.Group controlId="formBasicFName">
                                        <Form.Control type="text" placeholder="First Name" />
                                    </Form.Group>                                
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group controlId="formBasicLName">
                                        <Form.Control type="text" placeholder="Last Name" />
                                    </Form.Group>                                
                                </Col>
                                <Col sm={12} md={12}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>                                
                                </Col>
                                <Col sm={12} md={12}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Confirm Email" />
                                    </Form.Group>                                
                                </Col>
                                <Col sm={12} md={12}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>                                
                                </Col>
                                <Col sm={12} md={12}>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <input type="checkbox" /> Accept our <a href="#" className="text-style"><strong>Terms & Conditions</strong></a> and <a href="#" className="text-style"><strong>Privacy Policy</strong></a>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Link to="/subscription-plan">
                                <Button variant="primary" type="submit">Next</Button>
                            </Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SignUpPage;