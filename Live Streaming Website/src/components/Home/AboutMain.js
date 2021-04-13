import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AboutContent() {
    return (
        <section className="aboutSection">
            <Container>
                <Row>
                    <Col sm={6}>
                        <h2>About Us</h2>
                        <h3>Ex Possim Epicurei</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Button role="button" variant="primary">Find Out More <i className="fa fa-long-arrow-right"></i></Button>
                    </Col>
                    <Col sm={6}>
                        <div className="trainerImage">
                            <img src="/images/Trainer_Cynthia.jpg" alt="Cynthia"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AboutContent;