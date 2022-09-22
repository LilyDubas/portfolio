import { Col, Container, Row } from "react-bootstrap"
import navIcon1 from '../assets/img/navIcon1.png';
import navIcon2 from '../assets/img/navIcon2.png';
import navIcon3 from '../assets/img/navIcon3.png';
import heart from '../assets/img/heart.png';
import logo from '../assets/img/logo.png';
export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={4}>
                        <img id="footer-logo" src={logo} alt="logo Synaia Studio" />
                    </Col>
                    <Col sm={6}>
                        <div className="social-icons">
                            <a href="https://instagram.com/synaia.drawings" target="_blank"><img src={navIcon1} alt="icone Instagram" /></a>
                            <a href=""><img src={navIcon2} alt="icone Twitter" /></a>
                            <a href=""><img src={navIcon3} alt="icone LinkedIn" /></a>
                        </div>

                    </Col>
                </Row>
                <Row className="align-item-center">
                    <Col sm={8} className="text-center text-sm-end">
                        <p>Made with <img id="p-icon" src={heart} alt="icone coeur" /> by Synaia Studio </p>

                    </Col>
                </Row>
            </Container>
        </footer>
    )
}