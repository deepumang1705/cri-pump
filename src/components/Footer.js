import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Image } from 'react-bootstrap'


function Footer() {
    return (
        <footer className='text-light p-4 my-2 mx-2' style={{backgroundColor:'#ec3237'}}>
            <Container>
                <Row>
                    <Col xs={12} md={4}><Image src="callicon2.png"/>Toll free 1800 200 1234</Col>
                    <Col xs={12} md={4}><Image src="fb3.png"/>www.facebook.com/cripumps</Col>
                    <Col xs={12} md={4}><Image src="www.png"/>www.crigroups.com</Col>
                </Row>
            </Container>
            </footer>
    )
}

export default Footer
