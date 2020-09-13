import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGlobe, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <footer className='text-light p-4 my-2 mx-2' style={{backgroundColor:'#ec3237'}}>
            <Container>
                <Row>
                    <Col xs={12} md={4}><FontAwesomeIcon icon={faPhone} size="2x"/>Toll free 1800 200 1234</Col>
                    <Col xs={12} md={4}><FontAwesomeIcon icon={faFacebook} size="2x"/> www.facebook.com/cripumps</Col>
                    <Col xs={12} md={4}><FontAwesomeIcon icon={faGlobe} size="2x"/> www.crigroups.com</Col>
                </Row>
            </Container>
            </footer>
    )
}

export default Footer
