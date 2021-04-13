import React from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';

function TrainerAlbumPage() {
    return (
        <section className="trainerSection">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <h1>Trainers Album</h1>
                    </Col>
                    <Col sm={4} md={3}>
                        <div className="trainerCol">
                            <a href="#" className="trainerAlbum">
                                <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                <span><i className="fa fa-expand"></i></span>
                            </a>
                        </div>
                    </Col>
                    <Col sm={4} md={3}>
                        <div className="trainerCol">
                            <a href="#" className="trainerAlbum">
                                <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                <span><i className="fa fa-expand"></i></span>
                            </a>
                        </div>
                    </Col>
                    <Col sm={4} md={3}>
                        <div className="trainerCol">
                            <a href="#" className="trainerAlbum">
                                <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                <span><i className="fa fa-expand"></i></span>
                            </a>
                        </div>
                    </Col>
                    <Col sm={4} md={3}>
                        <div className="trainerCol">
                            <a href="#" className="trainerAlbum">
                                <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                <span><i className="fa fa-expand"></i></span>
                            </a>
                        </div>
                    </Col>
                    <Col sm={4} md={3}>
                        <div className="trainerCol">
                            <a href="#" className="trainerAlbum">
                                <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                <span><i className="fa fa-expand"></i></span>
                            </a>
                        </div>
                    </Col>
                    <Col sm={4} md={3}>
                        <div className="trainerCol">
                            <a href="#" className="trainerAlbum">
                                <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                <span><i className="fa fa-expand"></i></span>
                            </a>
                        </div>
                    </Col>
                    <Col sm={4} md={3}>
                        <div className="trainerCol">
                            <a href="#" className="trainerAlbum">
                                <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                <span><i className="fa fa-expand"></i></span>
                            </a>
                        </div>
                    </Col>
                    <Col sm={4} md={3}>
                        <div className="trainerCol">
                            <a href="#" className="trainerAlbum">
                                <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                <span><i className="fa fa-expand"></i></span>
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

export default TrainerAlbumPage;