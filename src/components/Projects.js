import { Nav, Row, Col, Container, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project1 from "../assets/img/escapeOfRapunzelSized.png";
import project2 from "../assets/img/nightskySized.png";
import project3 from "../assets/img/storybotsSized.png";

export const Projects = () => {

    const projects = [
        {
            title: "Illustration monochrome",
            description: "Escape of Rapunzel",
            imgUrl: project1,
        },
        {
            title: "Illustration d'affiche",
            description: "Balade Nocturne",
            imgUrl: project2,
        },
        {
            title: "Fan Arts",
            description: "inspired by The Storybots",
            imgUrl: project3,
        }
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projets</h2>
                        <p>Voici mes créations digitales</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey={"first"}>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Illustrations digitales</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Développement web</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Design</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}