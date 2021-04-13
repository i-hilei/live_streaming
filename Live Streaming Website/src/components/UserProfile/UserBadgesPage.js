import React from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';

function UserBadges() {
    return (
        <section className="trainerSection">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <h1>User Badges</h1>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
                        </div>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
                        </div>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
                        </div>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
                        </div>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
                        </div>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
                        </div>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
                        </div>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
                        </div>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
                        </div>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
                        </div>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
                        </div>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
                        </div>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
                        </div>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
                        </div>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
                        </div>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
                        </div>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
                        </div>
                    </Col>
                    <Col sm={3} md={3} lg={2}>
                        <div className="badgeIcon">
                            <span><img src="/images/badge.png" alt="Badge" /></span>                        
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
            </Container>
        </section>
    );
}

export default UserBadges;