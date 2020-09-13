import React from 'react';
import {Container, Row, Col,fluid} from 'react-bootstrap'


function FlexBox() {
    return (
        <Container fluid>
        <Row>
        <Col sm={12} md={3}><div class="p-3"><img className='img-fluid'src="images/1.png" alt='trophy' style={{ width: '300px', height: '650px' }} /></div></Col>
          <Col> <div class="p-3">
                <p class='p-3'><b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></p>
                <ul className='text-justify'>
                    <li >
                        C.R.I.'s energy efficient products are well recognized by various Government Institutions,
                        as trustworthy products for<br/> various projects across the globe to save energy.
                    </li>
                    <li>
                        C.R.I. is the highest contributor in the country for the projects of EESL
                        (Energy Efficiency Services Limited) to replace the<br/> old inefficient pumps
                        with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                    </li>
                </ul>
                <img className='img-fluid' src="images/2.png" alt='ceremony' style={{ width: '900px', height: '450px' }} />
                <p className='text-justify'>Government of India has awarded the <b>"National Energy Conservation Award 2018".</b>
                Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt.
                Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                </p>
            </div></Col>
        </Row>
      </Container>
    )
}

export default FlexBox