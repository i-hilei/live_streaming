import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function GoLive() {
    return (
        <>
            <section className="newHeader">
                <Container fluid>
                    <Row className="justify-content-between align-items-center">
                        <Col sm={3}>
                            <a href="#"><img src="/images/footer_Logo.png" alt="Logo" /></a>
                        </Col>
                        <Col sm={5}>
                            <ul className="userStatus d-flex justify-content-between align-items-center">
                                <li><span>00:00 PM</span><span className="bgColor">Live</span></li>
                                <li><span className="userName">Cynthia</span></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>        
            </section>
            <section className="livePage p-3">
                <Container fluid>
                    <Row>
                        <Col sm={12} md={8}>
                            <div className="bg-black">
                                <div className="liveScreen"></div>
                            </div>
                            <Row>
                                <Col sm={12} md={8}>
                                    <div className="bg-black p-3 mb-3">
                                        <div className="boxTitle"><h3><i className="fa fa-users"></i> Active Friends</h3></div>
                                        <ul className="friendList">
                                            <li><span><i className="fa fa-user"></i></span></li>
                                            <li><span><i className="fa fa-user"></i></span></li>
                                            <li><span><i className="fa fa-user"></i></span></li>
                                            <li><span><i className="fa fa-user"></i></span></li>
                                            <li><span><i className="fa fa-user"></i></span></li>
                                            <li><span><i className="fa fa-user"></i></span></li>
                                            <li><span><i className="fa fa-user"></i></span></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className="bg-black p-3 mb-3">
                                <div className="boxTitle"><h3><i className="fa fa-sticky-note"></i> Live Chat</h3><Button role="button" variant="secondary">Hide Chat <i className="fa fa-angle-up"></i></Button></div>
                                <div className="scrollerDiv">
                                    <div className="messageBox">
                                        <i className="fa fa-user"></i>
                                        <p><i className="fa fa-map-marker"></i> USA, Manhattan <span>11:00 PM</span></p>
                                        <h4>John Cornor</h4>
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        <ul>
                                            <li><span><i className="fa fa-heart"></i> 123</span></li>
                                            <li><a href="#">Reply</a></li>
                                        </ul>
                                    </div>
                                    <div className="messageBox">
                                        <i className="fa fa-user"></i>
                                        <p><i className="fa fa-map-marker"></i> USA, Manhattan <span>11:00 PM</span></p>
                                        <h4>John Cornor</h4>
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        <ul>
                                            <li><span><i className="fa fa-heart"></i> 123</span></li>
                                            <li><a href="#">Reply</a></li>
                                        </ul>
                                    </div>
                                    <div className="messageBox">
                                        <i className="fa fa-user"></i>
                                        <p><i className="fa fa-map-marker"></i> USA, Manhattan <span>11:00 PM</span></p>
                                        <h4>John Cornor</h4>
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        <ul>
                                            <li><span><i className="fa fa-heart"></i> 123</span></li>
                                            <li><a href="#">Reply</a></li>
                                        </ul>
                                    </div>
                                    <div className="messageBox">
                                        <i className="fa fa-user"></i>
                                        <p><i className="fa fa-map-marker"></i> USA, Manhattan <span>11:00 PM</span></p>
                                        <h4>John Cornor</h4>
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        <ul>
                                            <li><span><i className="fa fa-heart"></i> 123</span></li>
                                            <li><a href="#">Reply</a></li>
                                        </ul>
                                    </div>
                                    <div className="messageBox">
                                        <i className="fa fa-user"></i>
                                        <p><i className="fa fa-map-marker"></i> USA, Manhattan <span>11:00 PM</span></p>
                                        <h4>John Cornor</h4>
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        <ul>
                                            <li><span><i className="fa fa-heart"></i> 123</span></li>
                                            <li><a href="#">Reply</a></li>
                                        </ul>
                                    </div>
                                    <div className="messageBox">
                                        <i className="fa fa-user"></i>
                                        <p><i className="fa fa-map-marker"></i> USA, Manhattan <span>11:00 PM</span></p>
                                        <h4>John Cornor</h4>
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        <ul>
                                            <li><span><i className="fa fa-heart"></i> 123</span></li>
                                            <li><a href="#">Reply</a></li>
                                        </ul>
                                    </div>                              
                                </div>
                                <div className="replyBox">
                                    <Form>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Type a message..." />
                                            <Button role="button" variant="primary">Send</Button>                            
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>        
        </>
    );
}

export default GoLive;