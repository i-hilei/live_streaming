import React from 'react';
import { Container, Row, Col, Pagination, Nav, Button, Tab } from 'react-bootstrap';

function TrainerBadgesList() {
    return (
        <section className="trainerSection">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <h1>Badges</h1>
                    </Col>
                    <Col sm={12}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="oldest">
                            <Nav variant="pills" className="flex-row programTabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="newest">Newest</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="oldest">Oldest</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="live">Live</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="onDemand">On-Demand</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="programs">Programs</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="community">Community</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="leaderboard">Leaderboard</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="newest">
                                    <BadgesColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="oldest">
                                    <BadgesColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="live">
                                    <BadgesColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="onDemand">
                                    <BadgesColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="programs">
                                    <BadgesColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="community">
                                    <BadgesColumns />
                                </Tab.Pane>
                                <Tab.Pane eventKey="leaderboard">
                                    <BadgesColumns />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

function BadgesColumns() {
    return (
                <div className="bg-white p-3 mb-3">
                    <div className="boxTitle"><h3>Oldest</h3></div>
                    <Row>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={3} md={3} lg={2}>
                            <div className="badgeIcon">
                                <span><img src="/images/badge.png" alt="Badge" /></span>
                                <h5>Date Earned</h5>
                            </div>
                        </Col>
                        <Col sm={12} className="mb-3">
                            <hr className="hrLine" />
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
    );
}

export default TrainerBadgesList;