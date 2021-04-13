import React from 'react';
import { Container, Row, Col, Pagination, Nav, Button, Tab } from 'react-bootstrap';

function OurPrograms() {
    return (
        <section className="trainerSection">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <h1>Programs</h1>
                    </Col>
                    <Col sm={12}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="popular">
                            <Nav variant="pills" className="flex-row programTabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="popular">Most Popular</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="recent">Recents</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="favorite">My Favorites</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="strength">Strength</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="condition">Conditioning</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="equipment">Equipment Needed</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="trainer">Trainer</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="body">Body Part</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="duration">Duration</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="speciality">Speciality</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="popular">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="recent">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="favorite">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="strength">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="condition">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="equipment">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="trainer">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="body">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="duration">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="speciality">
                                    <TabContentColumns />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
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
            </Container>
        </section>
    );
}

function TabContentColumns() {
    return (
        <Row>
            <Col sm={12} md={6}>
                <div className="programCol">
                    <span className="heartIcon"><i className="fa fa-heart-o"></i></span>
                    <img src="/images/Live_Home-Image_A1.jpg" alt="Program" />
                    <h4>Program Name</h4>
                    <p>Lorem Ipsum is simply a dummy text. Lorem Ipsum is simply a dummy text. Lorem Ipsum is simply a dummy text. Lorem Ipsum is simply a dummy text.</p>
                    <div className="spaceCol">
                        <p><span><i className="fa fa-heart"></i>123</span><span><i className="fa fa-archive"></i>123</span></p>
                        <p><strong>Strength</strong></p>
                    </div>
                    <ul>
                        <li>Muscle Group</li>
                        <li>Equipment Needed</li>
                        <li>H:MM:SS</li>
                    </ul>
                    <Button role="button" variant="secondary">Watch</Button>
                </div>
            </Col>
            <Col sm={12} md={6}>
                <div className="programCol">
                    <span className="heartIcon"><i className="fa fa-heart-o"></i></span>
                    <img src="/images/Live_Home-Image_A1.jpg" alt="Program" />
                    <h4>Program Name</h4>
                    <p>Lorem Ipsum is simply a dummy text. Lorem Ipsum is simply a dummy text. Lorem Ipsum is simply a dummy text. Lorem Ipsum is simply a dummy text.</p>
                    <div className="spaceCol">
                        <p><span><i className="fa fa-heart"></i>123</span><span><i className="fa fa-archive"></i>123</span></p>
                        <p><strong>Strength</strong></p>
                    </div>
                    <ul>
                        <li>Muscle Group</li>
                        <li>Equipment Needed</li>
                        <li>H:MM:SS</li>
                    </ul>
                    <Button role="button" variant="secondary">Watch</Button>
                </div>
            </Col>
            <Col sm={12} md={6}>
                <div className="programCol">
                    <span className="heartIcon"><i className="fa fa-heart-o"></i></span>
                    <img src="/images/Live_Home-Image_A1.jpg" alt="Program" />
                    <h4>Program Name</h4>
                    <p>Lorem Ipsum is simply a dummy text. Lorem Ipsum is simply a dummy text. Lorem Ipsum is simply a dummy text. Lorem Ipsum is simply a dummy text.</p>
                    <div className="spaceCol">
                        <p><span><i className="fa fa-heart"></i>123</span><span><i className="fa fa-archive"></i>123</span></p>
                        <p><strong>Strength</strong></p>
                    </div>
                    <ul>
                        <li>Muscle Group</li>
                        <li>Equipment Needed</li>
                        <li>H:MM:SS</li>
                    </ul>
                    <Button role="button" variant="secondary">Watch</Button>
                </div>
            </Col>
            <Col sm={12} md={6}>
                <div className="programCol">
                    <span className="heartIcon"><i className="fa fa-heart-o"></i></span>
                    <img src="/images/Live_Home-Image_A1.jpg" alt="Program" />
                    <h4>Program Name</h4>
                    <p>Lorem Ipsum is simply a dummy text. Lorem Ipsum is simply a dummy text. Lorem Ipsum is simply a dummy text. Lorem Ipsum is simply a dummy text.</p>
                    <div className="spaceCol">
                        <p><span><i className="fa fa-heart"></i>123</span><span><i className="fa fa-archive"></i>123</span></p>
                        <p><strong>Strength</strong></p>
                    </div>
                    <ul>
                        <li>Muscle Group</li>
                        <li>Equipment Needed</li>
                        <li>H:MM:SS</li>
                    </ul>
                    <Button role="button" variant="secondary">Watch</Button>
                </div>
            </Col>
        </Row>
    );
}

export default OurPrograms;