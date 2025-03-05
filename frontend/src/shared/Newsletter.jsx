import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import Map from '../components/Map/Map'

const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful Travelling information</h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn newsletter__btn text-white">Subscribe</button>
                    </div>
                    <p>Join our travel community and receive exclusive travel tips, destination guides, and special offers. Get weekly updates on the best travel deals, hidden gems, and expert advice to make your next adventure unforgettable.</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__map">
                    <Map />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter
