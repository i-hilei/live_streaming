import React from 'react';
import { Container, Row, Col, Media } from 'react-bootstrap';

function TrainerFeatureContent() {
    return (
        <section className="aboutSection secondBlock">
            <Container fluid>
                <Row className="justify-content-end">
                    <Col sm={12} md={4} className="order-md-last px-md-0">
                        <div className="trainerImage text-md-center">
                            <img src="/images/Trainer-2_Terry.jpg" alt="Terry" className="w-100" />
                            <a href="#" className="btn btn-primary">Find Out More <i className="fa fa-long-arrow-right"></i></a>
                        </div>
                    </Col>
                    <Col sm={12} md={8} className="order-md-first paddLeft pt-4 pr-md-0">
                        <h2 className="mTop">Lorem Ipsum</h2>
                        <p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</strong></p>
                        <Media>
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src="/images/heart-icon.png"
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Media Heading</h5>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo.</p>

                                <Media>
                                    <img
                                        width={64}
                                        height={64}
                                        className="mr-3"
                                        src="/images/dumbel-icon.png"
                                        alt="Generic placeholder"
                                    />
                                    <Media.Body>
                                        <h5>Media Heading</h5>
                                        <p>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                            scelerisque ante sollicitudin commodo.</p>
                                        <Media>
                                            <img
                                                width={64}
                                                height={64}
                                                className="mr-3"
                                                src="/images/clock-icon.png"
                                                alt="Generic placeholder"
                                            />
                                            <Media.Body>
                                                <h5>Media Heading</h5>
                                                <p>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                    scelerisque ante sollicitudin commodo.</p>
                                            </Media.Body>
                                        </Media>
                                    </Media.Body>
                                </Media>
                            </Media.Body>
                        </Media>
                        <div className="BGradientpara">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default TrainerFeatureContent;