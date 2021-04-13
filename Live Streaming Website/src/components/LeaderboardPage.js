import React from 'react';
import { Container, Row, Col, Pagination, Nav, Button, Tab } from 'react-bootstrap';

function LeaderBoard() {
    return (
        <section className="trainerSection">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <h1>Leaderboard</h1>
                    </Col>
                    <Col sm={12}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="overall">
                            <Nav variant="pills" className="flex-row programTabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="overall">Overall Points</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="bootcamp">Boot Camp</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="punchPower">Punch Power</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="calorie">Calorie Club</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="movers">Movers & Shakers</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="overall">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="bootcamp">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="punchPower">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="calorie">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="movers">
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
            <Col sm={12}>
                <div className="bg-white p-3 mb-4">
                    <div className="boardTitle"><i className="fa fa-photo"></i> Overall Points</div>
                    <div className="halfList">
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>
                                    <span>0:00</span>
                                    <span><i className="fa fa-user"></i> Firstname Lastname <small><i class="fa fa-map-marker"></i>USA, New York</small></span>
                                </p>
                                <p>
                                    <Button role="button" variant="outline-secondary">123456</Button>
                                    <Button role="button" variant="success">+ 1234</Button>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default LeaderBoard;