import React from 'react';
import { Container, Row, Col, Pagination, Nav, Button, Tab } from 'react-bootstrap';

function TrainerFriendRequest() {
    return (
        <section className="trainerSection">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <h1>Friend Requests</h1>
                    </Col>
                    <Col sm={12}>
                        <div className="bg-white requestPage p-3 pb-5">
                            <div className="boxTitle"><h3><i className="fa fa-user-plus"></i> Friend Requests</h3></div>
                            <Row className="mb-3">
                                <Col sm={12} md={12}>
                                    <div className="friendListing">
                                        <div className="messageBox friendsPage">
                                            <i className="fa fa-user"></i>
                                            <h4>Friend Name <span><i className="fa fa-check"></i><i className="fa fa-times"></i></span></h4>
                                            <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                                        </div>
                                    
                                        <div className="messageBox friendsPage">
                                            <i className="fa fa-user"></i>
                                            <h4>Friend Name <span><i className="fa fa-check"></i><i className="fa fa-times"></i></span></h4>
                                            <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                                        </div>
                                    
                                        <div className="messageBox friendsPage">
                                            <i className="fa fa-user"></i>
                                            <h4>Friend Name <span><i className="fa fa-check"></i><i className="fa fa-times"></i></span></h4>
                                            <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                                        </div>
                                    
                                        <div className="messageBox friendsPage">
                                            <i className="fa fa-user"></i>
                                            <h4>Friend Name <span><i className="fa fa-check"></i><i className="fa fa-times"></i></span></h4>
                                            <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                                        </div>
                                    
                                        <div className="messageBox friendsPage">
                                            <i className="fa fa-user"></i>
                                            <h4>Friend Name <span><i className="fa fa-check"></i><i className="fa fa-times"></i></span></h4>
                                            <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                                        </div>
                                    
                                        <div className="messageBox friendsPage">
                                            <i className="fa fa-user"></i>
                                            <h4>Friend Name <span><i className="fa fa-check"></i><i className="fa fa-times"></i></span></h4>
                                            <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                                        </div>
                                    
                                        <div className="messageBox friendsPage">
                                            <i className="fa fa-user"></i>
                                            <h4>Friend Name <span><i className="fa fa-check"></i><i className="fa fa-times"></i></span></h4>
                                            <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                                        </div>
                                    
                                        <div className="messageBox friendsPage">
                                            <i className="fa fa-user"></i>
                                            <h4>Friend Name <span><i className="fa fa-check"></i><i className="fa fa-times"></i></span></h4>
                                            <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                                        </div>
                                    
                                        <div className="messageBox friendsPage">
                                            <i className="fa fa-user"></i>
                                            <h4>Friend Name <span><i className="fa fa-check"></i><i className="fa fa-times"></i></span></h4>
                                            <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                                        </div>
                                        <div className="messageBox friendsPage">
                                            <i className="fa fa-user"></i>
                                            <h4>Friend Name <span><i className="fa fa-check"></i><i className="fa fa-times"></i></span></h4>
                                            <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                                        </div>
                                    
                                        <div className="messageBox friendsPage">
                                            <i className="fa fa-user"></i>
                                            <h4>Friend Name <span><i className="fa fa-check"></i><i className="fa fa-times"></i></span></h4>
                                            <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                                        </div>
                                    
                                        <div className="messageBox friendsPage">
                                            <i className="fa fa-user"></i>
                                            <h4>Friend Name <span><i className="fa fa-check"></i><i className="fa fa-times"></i></span></h4>
                                            <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                                        </div>
                                    
                                        <div className="messageBox friendsPage">
                                            <i className="fa fa-user"></i>
                                            <h4>Friend Name <span><i className="fa fa-check"></i><i className="fa fa-times"></i></span></h4>
                                            <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <hr className="hrLine" />
                            <Row>
                                <Col sm={12}>
                                    <Pagination>
                                        <Pagination.Prev />
                                        <Pagination.Item active>{1}</Pagination.Item>
                                        <Pagination.Item>{2}</Pagination.Item>
                                        <Pagination.Item>{3}</Pagination.Item>
                                        <Pagination.Ellipsis />
                                        <Pagination.Item>{10}</Pagination.Item>
                                        <Pagination.Next />
                                    </Pagination>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default TrainerFriendRequest;