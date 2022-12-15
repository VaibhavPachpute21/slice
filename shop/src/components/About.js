import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <h1 className='text-center'>About us</h1>

      <Container>
        <Row>
          <Col md={6} >
            <h1>WHY I LOVE MY JOB</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt ut laoreet dolore magna aliquam erat volutpat lorem<br /><br />
              Edge Themes give you everything you need to create an amazing website. Designed and built with care, filled with creative elements and useful options, and completely user-friendly. Set up your website quickly and with ease.</p>
          </Col>
          <Col md={6}>
            <img width={'100%'} src="https://baker.qodeinteractive.com/wp-content/uploads/2017/03/about-me-image-1.jpg" />
          </Col>

        </Row>
      </Container>



    </>
  )
}

export default About