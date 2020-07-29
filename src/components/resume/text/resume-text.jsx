// package imports
import React from "react";
import { Button } from "react-bootstrap";

// css imports
import "./resume-text.css";

function ResumeText() {
    return (
        <React.Fragment>
            <div className="resume-intro-text">
                <h4>Hi, I am Aditya Chakraborti.</h4>
            </div>
            <div className="resume-intro-text">
                <h5>
                    I love building software and working with passionate,
                    amazing people.
                </h5>
            </div>
            <div className="resume-intro-text">
                <h5>This page is my resume, please have a look.</h5>
            </div>
            <div className="resume-button-container">
                <Button
                    variant="outline-dark"
                    href="https://drive.google.com/file/d/1FLTLrqt53bxM2ud4xmazs4qWlJl5IGCk/view?usp=sharing"
                >
                    {"Download Resume"}
                </Button>
            </div>
            <div className="resume-intro-text">
                <h3>. . .</h3>
            </div>
        </React.Fragment>
    );
}

export default ResumeText;