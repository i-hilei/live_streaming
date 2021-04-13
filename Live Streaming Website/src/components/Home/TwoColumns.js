import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function TwoBlockSection() {
    return (
        <section className="imageBlock">
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className="mainLine">
                            <img src="/images/mainLine.jpg" alt="Home Image"/>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Button role="button" variant="primary">Get Started <i className="fa fa-long-arrow-right"></i></Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default TwoBlockSection;