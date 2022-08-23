import { Nav, Row, Col, Container, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/colorSharp2.png";
import storybots from "../assets/img/storybotsSized.png";
import escapeOfRapunzel from "../assets/img/escapeOfRapunzelSized.png";
import Stience from "../assets/img/StienceSized.png";

export const Projects = () => {

    const projects = [
        {
            title: "Illustration monochrome",
            description: "Escape of Rapunzel",
            imgUrl: escapeOfRapunzel,
        },
        {
            title: "Illustration d'affiche",
            description: "inspired by The Storybots",
            imgUrl: storybots,
        },
        {
            title: "Fan Arts",
            description: "Princess Tiabeanie",
            imgUrl: Stience,
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
                                <Tab.Pane eventKey="second">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper, mauris eget scelerisque luctus, libero quam lobortis nisi, non commodo magna augue at purus.</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper, mauris eget scelerisque luctus, libero quam lobortis nisi, non commodo magna augue at purus.</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}