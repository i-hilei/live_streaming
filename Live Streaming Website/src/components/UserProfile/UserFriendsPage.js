import React from 'react';
import { Container, Row, Col, Pagination, Nav, Button, Tab } from 'react-bootstrap';

function UserFriendList() {
    return (
        <section className="trainerSection">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <h1>User Friends</h1>
                    </Col>
                    <Col sm={12}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="atoz">
                            <Nav variant="pills" className="flex-row programTabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="atoz">A-Z</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="ztoa">Z-A</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="mutual">Mutual Friends Only</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="atoz">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="ztoa">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="mutual">
                                    <TabContentColumns />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                    <Col sm={3}>
                        <Button role="button" variant="secondary">Select</Button>
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
            </Container>
        </section>
    );
}

function TabContentColumns() {
    return (
        <Row>
            <Col sm={12}>
                <div className="bg-white p-3 mb-3">
                    <div className="boxTitle"><h3><i className="fa fa-users"></i>Mutual Friends</h3></div>
                    <Row>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col sm={12}>
                <div className="bg-white p-3 mb-3">
                    <div className="boxTitle"><h3><i className="fa fa-user-plus"></i>Friends</h3></div>
                    <Row>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-plus-circle"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-plus-circle"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-plus-circle"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-plus-circle"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-plus-circle"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-plus-circle"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-plus-circle"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="messageBox friendsPage">
                                <i className="fa fa-plus-circle"></i>
                                <i className="fa fa-user"></i>
                                <h4>Friend Name</h4>
                                <p><span><i className="fa fa-map-marker"></i> USA, New York</span></p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}

export default UserFriendList;