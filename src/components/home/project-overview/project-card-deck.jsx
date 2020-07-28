import React from "react";
import { Card } from "react-bootstrap";
import "./projects-overview.css";

function ProjectsCardDeck(props) {
    const { project } = props;
    return (
        <React.Fragment>
            <Card>
                <Card.Img variant="top" src={project.img_src} />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Subtitle>{project.stack}</Card.Subtitle>
                </Card.Body>
                <Card.Body>
                    <Card.Text>{project.content}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        Check out the project <a href={project.link}>here</a>.
                    </small>
                </Card.Footer>
            </Card>
        </React.Fragment>
    );
}

export default ProjectsCardDeck;