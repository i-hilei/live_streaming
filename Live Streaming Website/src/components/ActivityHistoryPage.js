import React from 'react';
import { Container, Row, Col, Pagination, Nav, Tab, Form } from 'react-bootstrap';

function ActivityHistory() {
    return (
        <section className="trainerSection">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <h1>Activity History</h1>
                    </Col>
                    <Col sm={12}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="all">
                            <Nav variant="pills" className="flex-row programTabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="all">All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="live">Live</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="bootCamp">Boot Camp</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fightCamp">Fight Camp</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="onDemand">On-Demand</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="programs">Programs</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="all">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="live">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="bootCamp">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="fightCamp">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="onDemand">
                                    <TabContentColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="programs">
                                    <TabContentColumns />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

function TabContentColumns() {
    return (

        <div className="bg-white p-3 mb-4">
            <div className="boardTitle"><i className="fa fa-bar-chart"></i> All Activity
                <Form.Group>
                    <Form.Control as="select">
                        <option>Last 15 Days</option>
                        <option>Last 30 Days</option>
                        <option>Last 2 months</option>
                    </Form.Control>
                </Form.Group>
            </div>
            <div className="halfList fullList">
                <ul>
                    <li>
                        <span>06/01/2020</span>
                        <span>0:00 PM</span>
                        <span><i className="fa fa-user"></i> Classname or Program</span>
                    </li>
                    <li>
                        <p className="btn btn-secondary">Ranking</p><p className="btn btn-secondary">Total Time</p>
                        <p className="btn btn-secondary">Avr Hr</p><p className="btn btn-secondary">Calories</p>
                    </li>
                    <li>
                        <img src="/images/badge.png" alt="Badge" />
                    </li>
                    <li>
                        <span className="btn btn-success">Points</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>06/01/2020</span>
                        <span>0:00 PM</span>
                        <span><i className="fa fa-user"></i> Classname or Program</span>
                    </li>
                    <li>
                        <p className="btn btn-secondary">Ranking</p><p className="btn btn-secondary">Total Time</p>
                        <p className="btn btn-secondary">Avr Hr</p><p className="btn btn-secondary">Calories</p>
                    </li>
                    <li>
                        <img src="/images/badge.png" alt="Badge" />
                    </li>
                    <li>
                        <span className="btn btn-success">Points</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>06/01/2020</span>
                        <span>0:00 PM</span>
                        <span><i className="fa fa-user"></i> Classname or Program</span>
                    </li>
                    <li>
                        <p className="btn btn-secondary">Ranking</p><p className="btn btn-secondary">Total Time</p>
                        <p className="btn btn-secondary">Avr Hr</p><p className="btn btn-secondary">Calories</p>
                    </li>
                    <li>
                        <img src="/images/badge.png" alt="Badge" />
                    </li>
                    <li>
                        <span className="btn btn-success">Points</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>06/01/2020</span>
                        <span>0:00 PM</span>
                        <span><i className="fa fa-user"></i> Classname or Program</span>
                    </li>
                    <li>
                        <p className="btn btn-secondary">Ranking</p><p className="btn btn-secondary">Total Time</p>
                        <p className="btn btn-secondary">Avr Hr</p><p className="btn btn-secondary">Calories</p>
                    </li>
                    <li>
                        <img src="/images/badge.png" alt="Badge" />
                    </li>
                    <li>
                        <span className="btn btn-success">Points</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>06/01/2020</span>
                        <span>0:00 PM</span>
                        <span><i className="fa fa-user"></i> Classname or Program</span>
                    </li>
                    <li>
                        <p className="btn btn-secondary">Ranking</p><p className="btn btn-secondary">Total Time</p>
                        <p className="btn btn-secondary">Avr Hr</p><p className="btn btn-secondary">Calories</p>
                    </li>
                    <li>
                        <img src="/images/badge.png" alt="Badge" />
                    </li>
                    <li>
                        <span className="btn btn-success">Points</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>06/01/2020</span>
                        <span>0:00 PM</span>
                        <span><i className="fa fa-user"></i> Classname or Program</span>
                    </li>
                    <li>
                        <p className="btn btn-secondary">Ranking</p><p className="btn btn-secondary">Total Time</p>
                        <p className="btn btn-secondary">Avr Hr</p><p className="btn btn-secondary">Calories</p>
                    </li>
                    <li>
                        <img src="/images/badge.png" alt="Badge" />
                    </li>
                    <li>
                        <span className="btn btn-success">Points</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>06/01/2020</span>
                        <span>0:00 PM</span>
                        <span><i className="fa fa-user"></i> Classname or Program</span>
                    </li>
                    <li>
                        <p className="btn btn-secondary">Ranking</p><p className="btn btn-secondary">Total Time</p>
                        <p className="btn btn-secondary">Avr Hr</p><p className="btn btn-secondary">Calories</p>
                    </li>
                    <li>
                        <img src="/images/badge.png" alt="Badge" />
                    </li>
                    <li>
                        <span className="btn btn-success">Points</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>06/01/2020</span>
                        <span>0:00 PM</span>
                        <span><i className="fa fa-user"></i> Classname or Program</span>
                    </li>
                    <li>
                        <p className="btn btn-secondary">Ranking</p><p className="btn btn-secondary">Total Time</p>
                        <p className="btn btn-secondary">Avr Hr</p><p className="btn btn-secondary">Calories</p>
                    </li>
                    <li>
                        <img src="/images/badge.png" alt="Badge" />
                    </li>
                    <li>
                        <span className="btn btn-success">Points</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>06/01/2020</span>
                        <span>0:00 PM</span>
                        <span><i className="fa fa-user"></i> Classname or Program</span>
                    </li>
                    <li>
                        <p className="btn btn-secondary">Ranking</p><p className="btn btn-secondary">Total Time</p>
                        <p className="btn btn-secondary">Avr Hr</p><p className="btn btn-secondary">Calories</p>
                    </li>
                    <li>
                        <img src="/images/badge.png" alt="Badge" />
                    </li>
                    <li>
                        <span className="btn btn-success">Points</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>06/01/2020</span>
                        <span>0:00 PM</span>
                        <span><i className="fa fa-user"></i> Classname or Program</span>
                    </li>
                    <li>
                        <p className="btn btn-secondary">Ranking</p><p className="btn btn-secondary">Total Time</p>
                        <p className="btn btn-secondary">Avr Hr</p><p className="btn btn-secondary">Calories</p>
                    </li>
                    <li>
                        <img src="/images/badge.png" alt="Badge" />
                    </li>
                    <li>
                        <span className="btn btn-success">Points</span>
                    </li>
                </ul>
            </div>

            <Pagination className="my-5">
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </div>
    );
}

export default ActivityHistory;