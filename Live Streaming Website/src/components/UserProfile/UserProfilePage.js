import React from 'react';
import { Container, Row, Col, Button, Pagination } from 'react-bootstrap';

function ProfilePage() {
    return (
        <section className="trainerSection profilePages">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12} md={6}>
                        <div className="bg-white p-3 mb-3">
                            <div className="userInfo">
                                <img src="/images/cynthiamain.jpg" width="160px" height="160px" className="rounded-circle" alt="" />
                                <div className="userDesc">
                                    <h4>Jennith Williams <span><i className="fa fa-map-marker"></i> USA, New York</span></h4>
                                    <h5>About Me</h5>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <ul className="taskList">
                                <li><span>Friend Requests</span>123</li>
                                <li><span>Live Classes Completed</span>123</li>
                                <li><span>On-Demand Classes completed</span>123</li>
                                <li><span>Programs Completed</span>123</li>
                            </ul>
                            <div className="d-sm-flex justify-content-sm-between align-items-md-center">
                                <ul className="socialList d-flex align-items-center">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li className="mx-3"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                </ul>
                                <Button role="button" variant="primary"><i class="fa fa-user"></i> Add Friend</Button>                            
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="bg-white p-3 mb-3">
                            <div className="boxTitle"><h3><i className="fa fa-certificate"></i>Badges</h3><Button role="button" variant="secondary">View All</Button></div>
                            <ul className="badgeList">
                                <li>
                                    <span><img src="/images/badge.png" alt="Badge" /></span>
                                </li>
                                <li>
                                    <span><img src="/images/badge.png" alt="Badge" /></span>
                                </li>
                                <li>
                                    <span><img src="/images/badge.png" alt="Badge" /></span>
                                </li>
                                <li>
                                    <span><img src="/images/badge.png" alt="Badge" /></span>
                                </li>
                                <li>
                                    <span><img src="/images/badge.png" alt="Badge" /></span>
                                </li>
                                <li>
                                    <span><img src="/images/badge.png" alt="Badge" /></span>
                                </li>
                                <li>
                                    <span><img src="/images/badge.png" alt="Badge" /></span>
                                </li>
                                <li>
                                    <span><img src="/images/badge.png" alt="Badge" /></span>
                                </li>
                                <li>
                                    <span><img src="/images/badge.png" alt="Badge" /></span>
                                </li>
                                <li>
                                    <span><img src="/images/badge.png" alt="Badge" /></span>
                                </li>
                                <li>
                                    <span><img src="/images/badge.png" alt="Badge" /></span>
                                </li>
                                <li>
                                    <span><img src="/images/badge.png" alt="Badge" /></span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-3 mb-3">
                            <div className="boxTitle"><h3><i className="fa fa-users"></i>Friends</h3><Button role="button" variant="secondary">View All</Button></div>
                            <ul className="friendList">
                                <li>
                                    <span><i className="fa fa-user"></i></span>
                                </li>
                                <li>
                                    <span><i className="fa fa-user"></i></span>
                                </li>
                                <li>
                                    <span><i className="fa fa-user"></i></span>
                                </li>
                                <li>
                                    <span><i className="fa fa-user"></i></span>
                                </li>
                                <li>
                                    <span><i className="fa fa-user"></i></span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className="bg-white p-3 mb-3">
                            <div className="boxTitle"><h3><i className="fa fa-photo"></i>Photo Album</h3><Button role="button" variant="secondary">View All</Button></div>
                            <Row>
                                <Col sm={6} md={4} lg={2}>
                                    <div className="trainerCol p-0">
                                        <a href="#" className="trainerAlbum">
                                            <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                            <span><i className="fa fa-expand"></i></span>
                                        </a>
                                    </div>
                                </Col>
                                <Col sm={6} md={4} lg={2}>
                                    <div className="trainerCol p-0">
                                        <a href="#" className="trainerAlbum">
                                            <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                            <span><i className="fa fa-expand"></i></span>
                                        </a>
                                    </div>
                                </Col>
                                <Col sm={6} md={4} lg={2}>
                                    <div className="trainerCol p-0">
                                        <a href="#" className="trainerAlbum">
                                            <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                            <span><i className="fa fa-expand"></i></span>
                                        </a>
                                    </div>
                                </Col>
                                <Col sm={6} md={4} lg={2}>
                                    <div className="trainerCol p-0">
                                        <a href="#" className="trainerAlbum">
                                            <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                            <span><i className="fa fa-expand"></i></span>
                                        </a>
                                    </div>
                                </Col>
                                <Col sm={6} md={4} lg={2}>
                                    <div className="trainerCol p-0">
                                        <a href="#" className="trainerAlbum">
                                            <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                            <span><i className="fa fa-expand"></i></span>
                                        </a>
                                    </div>
                                </Col>
                                <Col sm={6} md={4} lg={2}>
                                    <div className="trainerCol p-0">
                                        <a href="#" className="trainerAlbum">
                                            <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                            <span><i className="fa fa-expand"></i></span>
                                        </a>
                                    </div>
                                </Col>
                                <Col sm={6} md={4} lg={2}>
                                    <div className="trainerCol p-0">
                                        <a href="#" className="trainerAlbum">
                                            <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                            <span><i className="fa fa-expand"></i></span>
                                        </a>
                                    </div>
                                </Col>
                                <Col sm={6} md={4} lg={2}>
                                    <div className="trainerCol p-0">
                                        <a href="#" className="trainerAlbum">
                                            <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                            <span><i className="fa fa-expand"></i></span>
                                        </a>
                                    </div>
                                </Col>
                                <Col sm={6} md={4} lg={2}>
                                    <div className="trainerCol p-0">
                                        <a href="#" className="trainerAlbum">
                                            <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                            <span><i className="fa fa-expand"></i></span>
                                        </a>
                                    </div>
                                </Col>
                                <Col sm={6} md={4} lg={2}>
                                    <div className="trainerCol p-0">
                                        <a href="#" className="trainerAlbum">
                                            <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                            <span><i className="fa fa-expand"></i></span>
                                        </a>
                                    </div>
                                </Col>
                                <Col sm={6} md={4} lg={2}>
                                    <div className="trainerCol p-0">
                                        <a href="#" className="trainerAlbum">
                                            <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                            <span><i className="fa fa-expand"></i></span>
                                        </a>
                                    </div>
                                </Col>
                                <Col sm={6} md={4} lg={2}>
                                    <div className="trainerCol p-0">
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ProfilePage;