// package imports
import React from "react";
import { Container, Image } from "react-bootstrap";

// component imports
import { Connect, ScrollDown } from "../../../constants/icons";

// css imports
import "./landing-component.css";

// asset imports
import LandingVideo from "../../../assets/landing-video-code-blur.mp4";

// service imports
import assets from "../../../data/assets/assets.json";

function LandingComponent(props) {
    const { profile_img } = assets;
    const { onDownPress } = props;

    return (
        <div className="landing-component">
            <Container fluid={true} className="video-container">
                <video autoPlay muted loop>
                    <source src={LandingVideo} type="video/mp4"></source>
                </video>
            </Container>
            <Image
                className="home-img"
                roundedCircle={true}
                src={profile_img}
            ></Image>
            <div className="video-content">
                <h1>Hi, I am Aditya Chakraborti</h1>
                <h3>I love building software that serves a purpose.</h3>
                <Connect></Connect>
            </div>
        </div>
    );
}

export default LandingComponent;
