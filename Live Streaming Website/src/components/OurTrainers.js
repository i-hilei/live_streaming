import React from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';

function MeetOurTrainersPage() {
    return (
        <section className="trainerSection">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <h1>Our Trainers</h1>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className="trainerCol">
                            <a href="#">
                                <img src="/images/trainer-1.jpg" alt="Trainer" />
                                <h3>Trainer Name</h3>
                            </a>
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className="trainerCol">
                            <a href="#">
                                <img src="/images/trainer-2.jpg" alt="Trainer" />
                                <h3>Trainer Name</h3>
                            </a>
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className="trainerCol">
                            <a href="#">
                                <img src="/images/trainer-3.jpg" alt="Trainer" />
                                <h3>Trainer Name</h3>
                            </a>
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className="trainerCol">
                            <a href="#">
                                <img src="/images/trainer-4.jpg" alt="Trainer" />
                                <h3>Trainer Name</h3>
                            </a>
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className="trainerCol">
                            <a href="#">
                                <img src="/images/trainer-5.jpg" alt="Trainer" />
                                <h3>Trainer Name</h3>
                            </a>
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className="trainerCol">
                            <a href="#">
                                <img src="/images/trainer-3.jpg" alt="Trainer" />
                                <h3>Trainer Name</h3>
                            </a>
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className="trainerCol">
                            <a href="#">
                                <img src="/images/trainer-1.jpg" alt="Trainer" />
                                <h3>Trainer Name</h3>
                            </a>
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className="trainerCol">
                            <a href="#">
                                <img src="/images/trainer-5.jpg" alt="Trainer" />
                                <h3>Trainer Name</h3>
                            </a>
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className="trainerCol">
                            <a href="#">
                                <img src="/images/trainer-2.jpg" alt="Trainer" />
                                <h3>Trainer Name</h3>
                            </a>
                        </div>
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

export default MeetOurTrainersPage;