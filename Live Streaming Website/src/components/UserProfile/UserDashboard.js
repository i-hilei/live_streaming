import React from 'react';
import { Container, Row, Col, Button, Pagination } from 'react-bootstrap';

function Dashboard() {
    return (
        <section className="trainerSection profilePages">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <div class="alert alert-dark alert-dismissible fade show" role="alert">
                            <p className="m-0"><i class="fa fa-check-circle"></i> User just reached her Calorie Burn goal, <a href="#">Click Here</a> to send a shout-out!
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>                                
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="bg-white p-3 mb-3">
                            <div className="boxTitle"><h3><i className="fa fa-user-circle"></i>My Profile</h3> <Button role="button" variant="secondary">Edit Profile</Button></div>
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
                            <ul className="socialList d-flex justify-content-center align-items-center">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li className="mx-3"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="bg-white p-3 mb-3">
                            <div className="boxTitle"><h3><i className="fa fa-calendar-check-o"></i>My List</h3></div>
                            <ul className="scheduleList">
                                <li>
                                    <span><i className="fa fa-user"></i></span>
                                    <span>Live class name</span>
                                    <span>Date<br />Time</span>
                                    <Button role="button" variant="primary">LIVE</Button>
                                </li>
                                <li>
                                    <span><i className="fa fa-user"></i></span>
                                    <span>Live class name</span>
                                    <span>Date<br />Time</span>
                                    <Button role="button" variant="secondary">Watch Now</Button>
                                </li>
                                <li>
                                    <span><i className="fa fa-user"></i></span>
                                    <span>Live class name</span>
                                    <span>Date<br />Time</span>
                                    <Button role="button" variant="secondary">Watch Now</Button>
                                </li>
                                <li>
                                    <span><i className="fa fa-user"></i></span>
                                    <span>Live class name</span>
                                    <span>Date<br />Time</span>
                                    <Button role="button" variant="outline-secondary">Set Alert</Button>
                                </li>
                                <li>
                                    <span><i className="fa fa-user"></i></span>
                                    <span>Live class name</span>
                                    <span>Date<br />Time</span>
                                    <Button role="button" variant="outline-secondary">Set Alert</Button>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={12}>
                        <div className="bg-white p-3 mb-3">
                            <div className="boxTitle"><h3><i className="fa fa-trophy"></i>Goal Tracker</h3> <Button role="button" variant="secondary">Update</Button></div>
                            <ul className="progressList">
                                <li>
                                    <p><strong>Weight Loss</strong><span>123 of 456</span></p>
                                    <p className="progressbar"><span className="percent">25%</span></p>
                                </li>
                                <li>
                                    <p><strong>Live Class Completions</strong><span>123 of 456</span></p>
                                    <p className="progressbar"><span className="percent">25%</span></p>
                                </li>
                                <li>
                                    <p><strong>Body Fat % Loss</strong><span>123 of 456</span></p>
                                    <p className="progressbar"><span className="percent">25%</span></p>
                                </li>
                                <li>
                                    <p><strong>On-Demand Completions</strong><span>123 of 456</span></p>
                                    <p className="progressbar"><span className="percent">25%</span></p>
                                </li>
                                <li>
                                    <p><strong>Burning Zone</strong><span>123 of 456</span></p>
                                    <p className="progressbar"><span className="percent">25%</span></p>
                                </li>
                                <li>
                                    <p><strong>Program Completions</strong><span>123 of 456</span></p>
                                    <p className="progressbar"><span className="percent">25%</span></p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="bg-white p-3 mb-3">
                            <div className="boxTitle"><h3><i className="fa fa-comment"></i>Messages</h3></div>
                            <div className="messageBox">
                                <i className="fa fa-user"></i>
                                <p>Username <span>11:00 PM</span></p>
                                <h4>Message Title</h4>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <ul>
                                    <li><span><i className="fa fa-heart"></i> 123</span><span><i className="fa fa-archive"></i> 123</span></li>
                                    <li><a href="#">Reply</a></li>
                                </ul>
                            </div>
                            <div className="messageBox">
                                <i className="fa fa-user"></i>
                                <p>Username <span>11:00 PM</span></p>
                                <h4>Message Title</h4>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <ul>
                                    <li><span><i className="fa fa-heart"></i> 123</span><span><i className="fa fa-archive"></i> 123</span></li>
                                    <li><a href="#">Reply</a></li>
                                </ul>
                            </div>
                            <div className="messageBox">
                                <i className="fa fa-user"></i>
                                <p>Username <span>11:00 PM</span></p>
                                <h4>Message Title</h4>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <ul>
                                    <li><span><i className="fa fa-heart"></i> 123</span><span><i className="fa fa-archive"></i> 123</span></li>
                                    <li><a href="#">Reply</a></li>
                                </ul>
                            </div>
                            <div className="messageBox">
                                <i className="fa fa-user"></i>
                                <p>Username <span>11:00 PM</span></p>
                                <h4>Message Title</h4>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <ul>
                                    <li><span><i className="fa fa-heart"></i> 123</span><span><i className="fa fa-archive"></i> 123</span></li>
                                    <li><a href="#">Reply</a></li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <Button role="button" variant="outline-secondary">View Community</Button>
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
                                <li>
                                    <span><i className="fa fa-user"></i></span>
                                </li>
                                <li>
                                    <span><i className="fa fa-user"></i></span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-3 mb-3">
                            <div className="boxTitle"><h3><i className="fa fa-photo"></i>Album</h3><Button role="button" variant="secondary">View All</Button></div>
                            <Row>
                                <Col sm={6} md={6} lg={4}>
                                    <div className="trainerCol p-0">
                                        <a href="#" className="trainerAlbum">
                                            <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                            <span><i className="fa fa-expand"></i></span>
                                        </a>
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={4}>
                                    <div className="trainerCol p-0">
                                        <a href="#" className="trainerAlbum">
                                            <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                            <span><i className="fa fa-expand"></i></span>
                                        </a>
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={4}>
                                    <div className="trainerCol p-0">
                                        <a href="#" className="trainerAlbum">
                                            <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                            <span><i className="fa fa-expand"></i></span>
                                        </a>
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={4}>
                                    <div className="trainerCol p-0">
                                        <a href="#" className="trainerAlbum">
                                            <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                            <span><i className="fa fa-expand"></i></span>
                                        </a>
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={4}>
                                    <div className="trainerCol p-0">
                                        <a href="#" className="trainerAlbum">
                                            <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                            <span><i className="fa fa-expand"></i></span>
                                        </a>
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={4}>
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

export default Dashboard;