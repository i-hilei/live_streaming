import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

function BannerMainVideo() {
    return (
        <section className="bannerVideo">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/Live_Home-Image_A2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>First slide label</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button role="button" variant="primary">Start Now <i className="fa fa-long-arrow-right"></i></Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default BannerMainVideo;