import React from 'react';
import { Container, Row, Col, Pagination, Tab, Button, Nav } from 'react-bootstrap';

function AlbumPage() {
    return (
        <section className="trainerSection">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <h1>My Album</h1>
                    </Col>
                    <Col sm={12}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="photos">
                            <Nav variant="pills" className="flex-row programTabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="photos">Photos</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Progress">Progress Pics</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="photos">
                                    <MyAlbumPics />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Progress">
                                    <MyProgressPics />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>

                    <Col sm={3}>
                        <Button role="button" variant="secondary">Upload</Button>
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

export function MyProgressPics() {
    return (
        <Row>
            <Col sm={4} md={3}>
                <div className="trainerCol albumCol">
                    <a href="#" className="trainerAlbum">
                        <img src="/images/cynthiamain.jpg" alt="Trainer" />
                        <ul><li>01/06/2020</li><li>Weight &nbsp; BF%</li></ul>
                        <span><i className="fa fa-check"></i></span>
                    </a>
                </div>
            </Col>
            <Col sm={4} md={3}>
                <div className="trainerCol albumCol">
                    <a href="#" className="trainerAlbum">
                        <img src="/images/cynthiamain.jpg" alt="Trainer" />
                        <ul><li>01/06/2020</li><li>Weight &nbsp; BF%</li></ul>
                        <span><i className="fa fa-check"></i></span>
                    </a>
                </div>
            </Col>
            <Col sm={4} md={3}>
                <div className="trainerCol albumCol">
                    <a href="#" className="trainerAlbum">
                        <img src="/images/cynthiamain.jpg" alt="Trainer" />
                        <ul><li>01/06/2020</li><li>Weight &nbsp; BF%</li></ul>
                        <span><i className="fa fa-check"></i></span>
                    </a>
                </div>
            </Col>
            <Col sm={4} md={3}>
                <div className="trainerCol albumCol">
                    <a href="#" className="trainerAlbum">
                        <img src="/images/cynthiamain.jpg" alt="Trainer" />
                        <ul><li>01/06/2020</li><li>Weight &nbsp; BF%</li></ul>
                        <span><i className="fa fa-check"></i></span>
                    </a>
                </div>
            </Col>
            <Col sm={4} md={3}>
                <div className="trainerCol albumCol">
                    <a href="#" className="trainerAlbum">
                        <img src="/images/cynthiamain.jpg" alt="Trainer" />
                        <ul><li>01/06/2020</li><li>Weight &nbsp; BF%</li></ul>
                        <span><i className="fa fa-check"></i></span>
                    </a>
                </div>
            </Col>
            <Col sm={4} md={3}>
                <div className="trainerCol albumCol">
                    <a href="#" className="trainerAlbum">
                        <img src="/images/cynthiamain.jpg" alt="Trainer" />
                        <ul><li>01/06/2020</li><li>Weight &nbsp; BF%</li></ul>
                        <span><i className="fa fa-check"></i></span>
                    </a>
                </div>
            </Col>
            <Col sm={4} md={3}>
                <div className="trainerCol albumCol">
                    <a href="#" className="trainerAlbum">
                        <img src="/images/cynthiamain.jpg" alt="Trainer" />
                        <ul><li>01/06/2020</li><li>Weight &nbsp; BF%</li></ul>
                        <span><i className="fa fa-check"></i></span>
                    </a>
                </div>
            </Col>
            <Col sm={4} md={3}>
                <div className="trainerCol albumCol">
                    <a href="#" className="trainerAlbum">
                        <img src="/images/cynthiamain.jpg" alt="Trainer" />
                        <ul><li>01/06/2020</li><li>Weight &nbsp; BF%</li></ul>
                        <span><i className="fa fa-check"></i></span>
                    </a>
                </div>
            </Col>
        </Row>
    );
}

export function MyAlbumPics() {
    return (
        <Row>
            <Col sm={4} md={3}>
                <div className="trainerCol albumCol">
                    <a href="#" className="trainerAlbum">
                        <img src="/images/cynthiamain.jpg" alt="Trainer" />
                        <span className="selected"><i className="fa fa-check"></i></span>
                    </a>
                </div>
            </Col>
            <Col sm={4} md={3}>
                <div className="trainerCol albumCol">
                    <a href="#" className="trainerAlbum">
                        <img src="/images/cynthiamain.jpg" alt="Trainer" />
                        <span><i className="fa fa-check"></i></span>
                    </a>
                </div>
            </Col>
            <Col sm={4} md={3}>
                <div className="trainerCol albumCol">
                    <a href="#" className="trainerAlbum">
                        <img src="/images/cynthiamain.jpg" alt="Trainer" />
                        <span><i className="fa fa-check"></i></span>
                    </a>
                </div>
            </Col>
            <Col sm={4} md={3}>
                <div className="trainerCol albumCol">
                    <a href="#" className="trainerAlbum">
                        <img src="/images/cynthiamain.jpg" alt="Trainer" />
                        <span><i className="fa fa-check"></i></span>
                    </a>
                </div>
            </Col>
            <Col sm={4} md={3}>
                <div className="trainerCol albumCol">
                    <a href="#" className="trainerAlbum">
                        <img src="/images/cynthiamain.jpg" alt="Trainer" />
                        <span><i className="fa fa-check"></i></span>
                    </a>
                </div>
            </Col>
            <Col sm={4} md={3}>
                <div className="trainerCol albumCol">
                    <a href="#" className="trainerAlbum">
                        <img src="/images/cynthiamain.jpg" alt="Trainer" />
                        <span><i className="fa fa-check"></i></span>
                    </a>
                </div>
            </Col>
            <Col sm={4} md={3}>
                <div className="trainerCol albumCol">
                    <a href="#" className="trainerAlbum">
                        <img src="/images/cynthiamain.jpg" alt="Trainer" />
                        <span><i className="fa fa-check"></i></span>
                    </a>
                </div>
            </Col>
            <Col sm={4} md={3}>
                <div className="trainerCol albumCol">
                    <a href="#" className="trainerAlbum">
                        <img src="/images/cynthiamain.jpg" alt="Trainer" />
                        <span><i className="fa fa-check"></i></span>
                    </a>
                </div>
            </Col>
        </Row>
    );
}

export default AlbumPage;