import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function CommunityPage() {
    return (
        <section className="trainerSection">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <ul className="socialMedia">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default CommunityPage;