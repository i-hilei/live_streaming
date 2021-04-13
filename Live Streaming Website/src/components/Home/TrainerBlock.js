import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

function TrainerContent() {
    return (
        <section className="aboutSection pb-5">
            <Container fluid>
                <Row>
                    <Col sm={12} md={6} className="order-md-last pr-md-0">
                        <div className="trainerImage">
                            <img src="/images/Live_Home-Image_A1.jpg" alt="Trainer"/>
                        </div>
                    </Col>
                    <Col sm={12} md={6} className="order-md-first paddLeft">
                        <h2 className="mTop">Lorem Ipsum</h2>
                        <p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</strong></p>
                    </Col>
                </Row>    
                <Row>
                    <Col sm={12} md={7} className="order-md-last">
                        <ul className="featureList">
                            <li>
                                <p>
                                    <span><img src="/images/group-icon.png" alt="Icon" /></span>
                                    <strong>Lorem Ipsum Dolor Sit</strong>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span><img src="/images/heart-smile.png" alt="Icon" /></span>
                                    <strong>Lorem Ipsum Dolor Sit</strong>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span><img src="/images/people-heart.png" alt="Icon" /></span>
                                    <strong>Lorem Ipsum Dolor Sit</strong>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span><img src="/images/laptop-icon.png" alt="Icon" /></span>
                                    <strong>Lorem Ipsum Dolor Sit</strong>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={5} className="order-md-first px-md-0">
                        <div className="trainImage">
                            <img src="/images/trainer.jpg" alt="Trainer"/>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-end">
                    <Col sm={12} md={7} className="pl-md-0">
                        <div className="verticalDiv">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href="#" className="btn btn-primary"><span>Read More <i className="fa fa-long-arrow-right"></i></span></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default TrainerContent;