import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function TrainerSingle() {
    return (
        <section className="trainerSection">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <h1>Cynthia</h1>
                    </Col>
                    <Col sm={8} md={8}>
                        <div className="trainerCol">
                            <video controls></video>
                        </div>
                    </Col>
                    <Col sm={4} md={4}>
                        <div className="trainerCol">
                            <a href="#" className="trainerAlbum">
                                <img src="/images/cynthiamain.jpg" alt="Trainer" />
                                <span><i className="fa fa-file-image-o"></i></span>
                            </a>
                        </div>
                    </Col>
                    <Col sm={8} md={8}>
                        <div className="trainerBio">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                        </div>
                    </Col>
                    <Col sm={4} md={4}>
                        <a href="#" className="followTrainer"><i className="fa fa-instagram"></i></a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default TrainerSingle;