import React from 'react';
import ModalImage from 'react-modal-image';
import { Nav, Row, Col, Container, Tab } from "react-bootstrap";
import P1 from '../assets/img/escapeOfRapunzelSized.png';
import P2 from '../assets/img/nightskySized.png';
import P3 from '../assets/img/storybotsSized.png';
import P4 from '../assets/img/fishingSized.png';
import P5 from '../assets/img/ratingSized.png';
import P6 from '../assets/img/galacticFootballSized.png';
import P7 from '../assets/img/sakuraSized.png';
import P8 from '../assets/img/OrcSized.png';
import P9 from '../assets/img/nimblM.png';
import P10 from '../assets/img/LovéM.png';
import P11 from '../assets/img/MonvoisinM.png';
import Z1 from '../assets/img/escapeOfRapunzel.png';
import Z2 from '../assets/img/nightsky.png';
import Z3 from '../assets/img/storybots.png';
import Z4 from '../assets/img/fishing.png';
import Z5 from '../assets/img/rating.png';
import Z6 from '../assets/img/galacticFootball.png';
import Z7 from '../assets/img/sakura.png';
import Z8 from '../assets/img/Orc.png';

export const Gallery = () => {

    let dataIllu = [
        {
            id: 1,
            imgSrc: P1,
            imgZoom: Z1,
        },
        {
            id: 2,
            imgSrc: P2,
            imgZoom: Z2,
        },
        {
            id: 3,
            imgSrc: P3,
            imgZoom: Z3,
        },
        {
            id: 4,
            imgSrc: P4,
            imgZoom: Z4,
        },
        {
            id: 5,
            imgSrc: P5,
            imgZoom: Z5,
        },
        {
            id: 6,
            imgSrc: P6,
            imgZoom: Z6,
        },
        {
            id: 7,
            imgSrc: P7,
            imgZoom: Z7,
        },
        {
            id: 8,
            imgSrc: P8,
            imgZoom: Z8,
        },

    ]

    let dataDev = [
        {
            id: 1,
            imgSrc: P9,
            imgZoom: P9,
        }
    ]

    let dataDesign = [
        {
            id: 1,
            imgSrc: P10,
            imgZoom: P10,
        },
        {
            id: 2,
            imgSrc: P11,
            imgZoom: P11,
        }
    ]

    return (

        <>
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
                                            <h2>Illustrations digitales</h2>
                                            <div className='gallery'>
                                                {
                                                    dataIllu.map((item, index) => {
                                                        return (
                                                            <div className='img-projects' key={index}>
                                                                <ModalImage className='img-fluid' id='img-P'
                                                                    small={item.imgSrc}
                                                                    large={item.imgZoom}
                                                                />

                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            <h2>Développement web</h2>
                                            <div className='gallery'>
                                                {
                                                    dataDev.map((item, index) => {
                                                        return (
                                                            <div className='img-projects' key={index}>
                                                                <ModalImage className='img-fluid' id='img-P'
                                                                    small={item.imgSrc}
                                                                    large={item.imgZoom}
                                                                />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row>
                                            <h2>Design</h2>
                                            <div className='gallery'>
                                                {
                                                    dataDesign.map((item, index) => {
                                                        return (
                                                            <div className='img-projects' key={index}>
                                                                <ModalImage className='img-fluid' id='img-P'
                                                                    small={item.imgSrc}
                                                                    large={item.imgZoom}
                                                                />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )

}