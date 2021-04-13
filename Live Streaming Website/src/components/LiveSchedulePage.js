import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function LiveSchedule() {
    return (
        <section className="trainerSection">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <h1>Live Schedule</h1>
                        <div className="CalendarCol">
                            <div className="topMonth d-flex justify-content-between bg-white p-3 mb-2">
                                <p><i className="fa fa-long-arrow-left"></i></p>
                                <p><strong>Month</strong></p>
                                <p><i className="fa fa-long-arrow-right"></i></p>
                            </div>
                            <div className="topMonth dayWise d-flex justify-content-between bg-white mb-2">
                                <p className="active"><strong>1</strong>Saturday</p>
                                <p><strong>2</strong>Sunday</p>
                                <p><strong>3</strong>Monday</p>
                                <p><strong>4</strong>Tuesday</p>
                                <p><strong>5</strong>Wednesday</p>
                                <p><strong>6</strong>Thursday</p>
                                <p><strong>7</strong>Friday</p>
                                <p><strong>8</strong>Saturday</p>
                                <p><strong>9</strong>Sunday</p>
                                <p><strong>10</strong>Monday</p>
                            </div>
                            <div className="lastCol bg-white p-3">
                                <p className="borderBottom">Today, Month Date</p>
                                <ul>
                                    <li><i className="fa fa-user"></i> Live Class Name</li>
                                    <li><strong>Firstname</strong></li>
                                    <li><strong>00:00 AM PST</strong><span className="px-2">|</span><strong>00:00 AM EST</strong></li>
                                    <li>
                                        <Button role="button" variant="secondary">Watch</Button>
                                    </li>
                                    <li><strong>Equipment Needed <span>Class Type 000 Min</span> </strong></li>
                                </ul>
                                <ul>
                                    <li><i className="fa fa-user"></i> Live Class Name</li>
                                    <li><strong>Firstname</strong></li>
                                    <li><strong>00:00 AM PST</strong><span className="px-2">|</span><strong>00:00 AM EST</strong></li>
                                    <li>
                                        <Button role="button" variant="outline-secondary">Remind Me</Button>
                                    </li>
                                    <li><strong>Equipment Needed <span>Class Type 000 Min</span> </strong></li>
                                </ul>
                                <ul>
                                    <li><i className="fa fa-user"></i> Live Class Name</li>
                                    <li><strong>Firstname</strong></li>
                                    <li><strong>00:00 AM PST</strong><span className="px-2">|</span><strong>00:00 AM EST</strong></li>
                                    <li>
                                        <Button role="button" variant="outline-secondary">Remind Me</Button>
                                    </li>
                                    <li><strong>Equipment Needed <span>Class Type 000 Min</span> </strong></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default LiveSchedule;