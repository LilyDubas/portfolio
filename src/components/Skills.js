import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../assets/img/skill1.png";
import skill2 from "../assets/img/skill2.png";
import skill3 from "../assets/img/skill3.png";
import skill4 from "../assets/img/skill4.png";
import colorSharp from "../assets/img/colorSharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="Skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skills-box">
                            <h2>Skills</h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                <div className="item">
                                    <img src={skill1} alt="image" />
                                    <h5>Illustrations digitales</h5>
                                </div>
                                <div className="item">
                                    <img src={skill2} alt="image" />
                                    <h5>Illustrations papier</h5>
                                </div>
                                <div className="item">
                                    <img src={skill3} alt="image" />
                                    <h5>Création de maquettes</h5>
                                </div>
                                <div className="item">
                                    <img src={skill4} alt="image" />
                                    <h5>Création de charte graphique</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}