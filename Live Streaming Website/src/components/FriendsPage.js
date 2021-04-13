import React from 'react';
import { Container, Row, Col, Pagination, Nav, Button, Tab } from 'react-bootstrap';

function TrainerFriendList() {
    return (
        <section className="trainerSection">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <h1>Friends</h1>
                    </Col>
                    <Col sm={12}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="atoz">
                            <Nav variant="pills" className="flex-row programTabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="besties">Besties</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="atoz">A-Z</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="ztoa">Z-A</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="closest">Closest</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="recent">Most Recent</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="wayback">We Go Way Back</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="besties">
                                    <FriendListColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="atoz">
                                    <FriendListColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="ztoa">
                                    <FriendListColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="closest">
                                    <FriendListColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="recent">
                                    <FriendListColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="wayback">
                                    <FriendListColumns />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    );
}

function FriendListColumns() {
    return (
        
                <div className="bg-white p-3 pb-5">
                    <div className="boxTitle"><h3>A-Z <span><i className="fa fa-map-marker"></i> USA, Manhattan</span></h3></div>
                    <Row className="mb-3">
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-check fontColor selected"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name <i className="fa fa-heart"></i></h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-check fontColor"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-check fontColor"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-check fontColor"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-check fontColor"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-check fontColor"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-check fontColor"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-check fontColor"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-check fontColor"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-check fontColor"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-check fontColor"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-check fontColor"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-check fontColor"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-check fontColor"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-check fontColor"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-check fontColor"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                    </Row>
                    <hr className="hrLine"/>
                    <Row>
                        <Col sm={3}>
                            <Button role="button" variant="secondary">Select All</Button>
                        </Col>
                        <Col sm={6}>
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
                        <Col sm={3} className="text-right">
                            <Button role="button" variant="primary">Remove Selected</Button>
                        </Col>
                    </Row>
                </div>
           
    );
}

export default TrainerFriendList;