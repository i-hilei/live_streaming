import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function LoginPage() {
    return (
        <section className="loginPage">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12} md={6}>
                        <Form>
                            <h2>Hey there!</h2>
                            <p>Welcome back, let's sign in</p>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                           <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Sign In</Button>
                            <a  className="text-center" href="#">Forgot your password</a>
                            <div className="newUserCol text-center">
                                <p>First time here?</p>
                                <Link to="/sign-up">
                                    <Button role="button" variant="secondary">Start your free 14-day trial</Button>
                                </Link>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default LoginPage;