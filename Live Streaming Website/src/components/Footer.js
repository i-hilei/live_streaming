import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

function Footer() {
    return (
        <footer>
            <Container fluid>
                <div className="footerBlock">
                    <Row>
                        <Col sm={12} md={6}>
                            <img src="/images/mainLine.jpg" alt="" />
                        </Col>
                        <Col sm={12} md={6}>
                            <div className="footerCol">
                                <h2>Lorem Ipsum is Dummy Text</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="/sign-up" className="btn btn-primary">Start Your Free Trial <i className="fa fa-angle-right"></i></a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container>
                <Row>
                    <Col sm={4} md={2}>
                        <a href="#" className="footLogo">
                            <img src="/images/footer_Logo.png" alt="Hardcore Fitness" />
                        </a>
                        <ul className="footSocial">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                        </ul>
                    </Col>
                    <Col md={4} sm={8}>
                        <p> &copy; 2020 Hardcore Fitness Franchise Group,LLC.<br/> All Right Reserved</p>
                    </Col>
                    <Col sm={12} md={6}>
                        <ul className="footLinks">
                            <li><a href="#">The Experience</a></li>
                            <li><a href="#">Programs</a></li>
                            <li><a href="#">Live Schedule</a></li>
                            <li><a href="#">On-Demand</a></li>
                            <li><a href="/our-trainers">Meet Our Trainers</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Faq</a></li>
                            <li><a href="#">Hardcore Fitness</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;