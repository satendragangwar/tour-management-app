import React from 'react'
import '../styles/home.css'
import {Container , Row ,Col} from 'reactstrap'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'
import Map from '../components/Map/Map'

const Home = () => {
  return <>
     <section>
      <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle subtitle={"Know Before You Go"}/>
              <i className="ri-global-line world-icon"></i>
            </div>
            <h1>Discover the world's most <span className="highlight">breathtaking</span> destinations</h1>
            <p>Experience unforgettable adventures with our expertly curated tours. From pristine beaches to majestic mountains, we bring your travel dreams to life with personalized itineraries and local insights.</p>
          </div>
        </Col>
        <Col lg='6'>
          <div className="hero__map">
            <Map />
          </div>
        </Col>
        <SearchBar/>
      </Row>
     
      </Container>
     
     </section>
     <section>
      <Container>
        <Row>
        <Col lg='3'>
          <h5 className="services__subtitle">What we serve</h5>
          <h2 className='services__title'>We offer our best services</h2>
      </Col>
      <ServiceList/>
        </Row>
      </Container>
     </section>
    
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>

    <section>
   <Container>
    <Row>
      <Col lg='6'>
        <div className="experience__content">
          <Subtitle subtitle={'Experience'}/>
          <h2>With our expertise <br/> we create unforgettable journeys</h2>
          <p>Our team of experienced travel experts has been crafting exceptional journeys for over a decade. We combine local knowledge with global expertise to deliver travel experiences that exceed expectations. From hidden gems to iconic landmarks, we ensure every moment of your journey is memorable.</p>
        </div>

        <div className="counter__wrapper d-flex align-items-center gap-5">
          <div className="counter__box bg-primary">
            <span><i className="ri-flight-takeoff-line"></i> 8k+</span>
            <h6>Successful Trip</h6>
          </div>
          <div className="counter__box bg-primary">
            <span><i className="ri-user-star-line"></i> 1.5k+</span>
            <h6>Regular clients</h6>
          </div>
          <div className="counter__box bg-primary">
            <span><i className="ri-calendar-check-line"></i> 10</span>
            <h6>Years experience</h6>
          </div>
        </div>
      </Col>
      <Col lg='6'>
        <div className='experience__img'>
           <img src={experienceImg} alt="" />
        </div>
      </Col>
    </Row>

   </Container>

  </section>


  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Gallery'}/>
          <h2 className='gallery__title'>Visit our customers tour gallery</h2>
        </Col>
        <Col lg='12'>
          <MasonryImagesGallery/>
        </Col>
      </Row>
    </Container>
  </section>
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Fans Love'}/>
          <h2 className="testimonial__title">what our fans say about us</h2>
        </Col>
        <Col lg='12'>
          <Testimonials/>
        </Col>
      </Row>
    </Container>
  </section>
  <Newsletter/>
  </>
}

export default Home
