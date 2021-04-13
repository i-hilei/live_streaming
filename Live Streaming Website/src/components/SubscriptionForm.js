import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function SubscriptionFormPage() {
    return (
        <section className="loginPage">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12} md={6}>
                        <Form>
                            <h2>Your Subscription Plan</h2>
                            <p>Almost there! You won't be charged during your 14-day trial, plus cancel at any time.</p>
                            <Row>
                                <Col sm={12}>
                                    <h3 className="billTag text-center">$ 19.99 billed monthly</h3>
                                </Col>
                                <Col sm={12}>
                                    <Form.Group controlId="formBasicCreditcard">
                                        <Form.Control type="text" placeholder="Credit Card Number" />
                                    </Form.Group>                                
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group controlId="formBasicExpiry">
                                        <Form.Control type="text" placeholder="Expiration Date" />
                                    </Form.Group>                                
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="number" placeholder="CVV" />
                                    </Form.Group>                                
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group controlId="formBasicZip">
                                        <Form.Control type="text" placeholder="Billing Zip Code" />
                                    </Form.Group>                                
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group controlId="formBasicCode">
                                        <Form.Control type="password" placeholder="Promo Code" />
                                    </Form.Group>                                
                                </Col>
                                <Col sm={12} md={12}>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <input type="checkbox" /> By clicking this box, you acknowledge that you understand and agree to these terms.
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="primary" type="submit">Start my free trial</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SubscriptionFormPage;