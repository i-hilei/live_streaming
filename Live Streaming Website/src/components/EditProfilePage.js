import React from 'react';
import { Container, Row, Col, Form, Nav, Button, Tab } from 'react-bootstrap';

function EditProfile() {
    return (
        <section className="trainerSection">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <h1>Edit Profile</h1>
                    </Col>
                    <Col sm={12}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="myprofile">
                            <Nav variant="pills" className="flex-row programTabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="myprofile">My Profile</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="goalTracker">Goal Tracker</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="myprofile">
                                    <ProfileContent />
                                </Tab.Pane>
                                <Tab.Pane eventKey="goalTracker">
                                    <GoalTrackerData />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

function ProfileContent() {
    return (
        <div className="bg-white p-3 mb-3">
            <Form className="profileForm">
                <div className="boxTitle"><h3><i className="fa fa-user-circle"></i> Public Profile</h3></div>
                <Row>
                    <Col sm={12} md={3}>
                        <div className="profilePic">
                            <label for="uploadPic">
                                <input type="file" name="Upload Photo" hidden id="uploadPic" />
                                <img src="/images/cynthiamain.jpg" alt="Profile Picture" width="150px" height="150px" className="rounded-circle mb-3" />
                                <Button role="button" variant="outline-secondary">Change Profile Picture</Button>
                            </label>
                        </div>
                    </Col>
                    <Col sm={12} md={9}>
                        <Row>
                            <Col sm={12} md={6}>
                                <p>Update your profile information</p>
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="First Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Last Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="City" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="State" />
                                            <i className="fa fa-angle-down"></i>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} md={12}>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Country" />
                                            <i className="fa fa-angle-down"></i>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Birthday" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Nickname" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={12} md={6}>
                                <p>Update your social profiles</p>
                                <Row>
                                    <Col sm={12} md={12}>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Facebook Name" />
                                            <i className="fa fa-facebook"></i>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} md={12}>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Instagram Handle" />
                                            <i className="fa fa-instagram"></i>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} md={12}>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Twitter Handle" />
                                            <i className="fa fa-twitter"></i>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={12} md={12}>
                                <p>Update your 'About Me'</p>
                                <Form.Group>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col sm={12} md={3}>
                        <div className="boxTitle"><h3 className="p-0 m-0 border-0"><i className="fa fa-shield"></i> Privacy</h3></div>
                    </Col>
                    <Col sm={12} md={9}>
                        <p>Message Settings</p>
                        <ul className="d-sm-flex align-items-center">
                            <li><Form.Check type="checkbox" label="Accept from Everybody" /></li>
                            <li><Form.Check type="checkbox" label="Accept from Friends Only" /></li>
                            <li><Form.Check type="checkbox" label="Deactivate all messages" /></li>
                        </ul>
                        <hr />
                        <p>Photo Album</p>
                        <ul className="d-sm-flex align-items-center">
                            <li><Form.Check type="checkbox" label="Everybody can view" /></li>
                            <li><Form.Check type="checkbox" label="Only Friends can view" /></li>
                            <li><Form.Check type="checkbox" label="Deactivate photo album" /></li>
                        </ul>
                        <hr />
                        <p>Personal Achievements</p>
                        <ul className="d-sm-flex align-items-center">
                            <li><Form.Check type="checkbox" label="Share with All Friends" /></li>
                            <li><Form.Check type="checkbox" label="Share with Besties Only" /></li>
                            <li><Form.Check type="checkbox" label="Do Not Share" /></li>
                        </ul>
                    </Col>
                    <Col sm={12}><hr /></Col>
                    <Col sm={12} md={3}>
                        <div className="boxTitle"><h3 className="p-0 m-0 border-0"><i className="fa fa-sliders"></i> Activity History</h3></div>
                    </Col>
                    <Col sm={12} md={9}>
                        <p>View Completion History</p>
                        <ul className="d-sm-flex align-items-center">
                            <li><Button role="button" variant="secondary">All</Button></li>
                            <li><Button role="button" variant="secondary">Live</Button></li>
                            <li><Button role="button" variant="secondary">Boot Camp</Button></li>
                            <li><Button role="button" variant="secondary">Fight Camp</Button></li>
                            <li><Button role="button" variant="secondary">On-Demand</Button></li>
                            <li><Button role="button" variant="secondary">Programs</Button></li>
                        </ul>
                    </Col>
                    <Col sm={12}><hr /></Col>
                    <Col sm={12} md={3}>
                        <div className="boxTitle"><h3 className="p-0 m-0 border-0"><i className="fa fa-lock"></i> Change Password</h3></div>
                    </Col>
                    <Col sm={12} md={9}>
                        <Row>
                            <Col sm={12} md={9}>
                                <Form.Group>
                                    <Form.Control type="password" placeholder="Current Password" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="password" placeholder="New Password" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="password" placeholder="Confirm New Password" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr />
                    </Col>
                    <Col sm={12} className="text-right">
                        <Button role="button" variant="primary">Save Changes</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

function GoalTrackerData() {
    return (
        <Col sm={12} md={12}>
            <div className="bg-white p-3 mb-3">
                <div className="boxTitle"><h3>Current <span>Last Updated: 01/06/2020</span></h3></div>
                <ul className="progressList">
                    <li>
                        <p><strong>Weight Loss</strong><span>123 of 456</span></p>
                        <p className="progressbar"><span className="percent">25%</span></p>
                    </li>
                    <li>
                        <p><strong>Body Fat % Loss</strong><span>123 of 456</span></p>
                        <p className="progressbar"><span className="percent">25%</span></p>
                    </li>
                </ul>
                <div className="boxTitle mt-3"><h3>Update Targets</h3></div>
                <Form className="profileForm p-4">
                    <Row className="align-items-center">
                        <Col sm={12}>
                            <div className="boxTitle"><h3>Weight Loss <span>Last Updated: 01/06/2020 &nbsp; 11:00 PM</span></h3></div>
                        </Col>
                        <Col sm={4} md={3}>
                            <Form.Group className="mb-sm-0">
                                <Form.Control type="text" placeholder="Current Weight" />
                            </Form.Group>
                        </Col>
                        <Col sm={4} md={4}>
                            <Form.Group className="mb-sm-0">
                                <Form.Control type="text" placeholder="Date" />
                                <i className="fa fa-angle-down"></i>
                            </Form.Group>
                        </Col>
                        <Col sm={4} md={3}>
                            <Form.Group className="mb-sm-0">
                                <Form.Control type="text" placeholder="Target Weight" />
                                <i className="fa fa-lock fa-2x"></i>
                            </Form.Group>
                        </Col>
                        <Col sm={12} md={2}>
                            <Button role="button" variant="secondary">Update</Button>
                        </Col>
                        <hr/>
                        <Col sm={12}>
                            <div className="boxTitle mt-4"><h3>Body Fat % Loss <span>Last Updated: 01/06/2020 &nbsp; 11:00 PM</span></h3></div>
                        </Col>
                        <Col sm={4} md={3}>
                            <Form.Group className="mb-sm-0">
                                <Form.Control type="text" placeholder="Current BF %" />
                            </Form.Group>
                        </Col>
                        <Col sm={4} md={4}>
                            <Form.Group className="mb-sm-0">
                                <Form.Control type="text" placeholder="Date" />
                                <i className="fa fa-angle-down"></i>
                            </Form.Group>
                        </Col>
                        <Col sm={4} md={3}>
                            <Form.Group className="mb-sm-0">
                                <Form.Control type="text" placeholder="Target BF %" />
                                <i className="fa fa-lock fa-2x"></i>
                            </Form.Group>
                        </Col>
                        <Col sm={12} md={2}>
                            <Button role="button" variant="secondary">Update</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Col>
    );
}
export default EditProfile;