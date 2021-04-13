import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function BlogSectionContent() {
    return (
        <section className="blogSection">
            <Container>
                <Row className="justify-content-end">
                    <Col sm={12} md={11} className="px-sm-0">
                        <div className="blogBlocks">
                            <div className="blogCol">
                                <a href="#">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <img src="/images/blog-1.jpg" alt="Blog" />
                                </a>
                            </div>
                            <div className="blogCol midCol">
                                <a href="#">
                                    <img src="/images/blog-2.jpg" alt="Blog" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </a>
                            </div>
                            <div className="blogCol">
                                <a href="#">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <img src="/images/blog-3.jpg" alt="Blog" />
                                </a>
                            </div>                        
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className="blogTitle">
                            <h2>Lorem Ipsum is simply dummy text</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default BlogSectionContent;