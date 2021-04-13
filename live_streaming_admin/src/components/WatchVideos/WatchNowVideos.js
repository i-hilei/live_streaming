import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Red5proVideosServerPath} from '../../actions/fetchActions';
import {ReactFlvPlayer} from 'react-flv-player'


class WatchNowVideos extends Component {
    player = {}
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            red5prosdk: "",
            subscribed: false,
            streamName: props.match.params.stream_name,
            error: false,
            video: {
                src: `${Red5proVideosServerPath}/${props.match.params.stream_name}.flv`,
                // poster: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            }
        }
    }

    render() {
        return (
            <Container fluid>
                <Row className="justify-content-between align-items-center">
                    <Col>
                        <ReactFlvPlayer
                            url = {this.state.video.src}
                            height = "70%"
                            width = "70%"
                            isMuted={false}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default WatchNowVideos;