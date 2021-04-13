import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function CreateProfile() {
    return (
        <section className="loginPage">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12} md={6}>
                        <Form className="profileForm">
                            <h2>Nice to meet you!</h2>
                            <p>Time to set up your profile, let's start with your picture.</p>
                            <Row>
                                <Col sm={12} md={12}>
                                    <div className="profilePic mb-3">
                                        <label for="uploadPic">
                                            <input type="file" name="Upload Photo" hidden id="uploadPic" />
                                            <i className="fa fa-user-circle fa-5x text-dark mb-3"></i>
                                            <Button role="button" variant="outline-secondary" className="m-auto w-auto">Upload Profile Picture</Button>
                                        </label>
                                    </div>
                                    <p>Tell us more about you below.</p>
                                    <Row>
                                        <Col sm={12} md={6}>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="First Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={12} md={6}>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Last Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={12} md={6}>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="City" />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={12} md={6}>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="State" />
                                                <i className="fa fa-angle-down"></i>
                                            </Form.Group>
                                        </Col>
                                        <Col sm={12} md={12}>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Country" />
                                                <i className="fa fa-angle-down"></i>
                                            </Form.Group>
                                        </Col>
                                        <Col sm={12} md={6}>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Birthday" />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={12} md={6}>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Nickname" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <p>Add your social profiles (Optional)</p>
                                    <Row>
                                        <Col sm={12} md={12}>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Facebook Name" />
                                                <i className="fa fa-facebook"></i>
                                            </Form.Group>
                                        </Col>
                                        <Col sm={12} md={12}>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Instagram Handle" />
                                                <i className="fa fa-instagram"></i>
                                            </Form.Group>
                                        </Col>
                                        <Col sm={12} md={12}>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Twitter Handle" />
                                                <i className="fa fa-twitter"></i>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <p>Tell us a bit more about your goals. (Optional)</p>
                                    <Row>
                                        <Col sm={12} md={6}>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Current Weight" />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={12} md={6}>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Goal Weight" />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={12} md={6}>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Current Body Fat %" />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={12} md={6}>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Goal Body Fat %" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <p>Tell us about yourself.</p>
                                    <Form.Group>
                                        <Form.Control as="textarea" rows="5" />
                                    </Form.Group>
                                </Col>
                            
                                <Col sm={12} className="text-right">
                                    <Button role="button" variant="primary">All Set!</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default CreateProfile;