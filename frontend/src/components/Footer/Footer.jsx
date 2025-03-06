import React from 'react';
import './footer.css';
import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap';
import {Link } from 'react-router-dom';

const quick_links = [
  {
      path:'/home',
      display:'Home'
  },
  {
      path:'/tours',
      display:'Tours'
  },
];

const quick_links2 = [
  {
      path:'/login',
      display:'Login'
  },
  {
      path:'/register',
      display:'Register'
  },
]

const Footer = () => {
  const year  = new Date().getFullYear() 
  return <footer className='footer'>
   <Container>
    <Row>
      <Col lg='3'>
        <div className="logo">
          <p>Your trusted partner in creating unforgettable travel experiences. We bring the world's most amazing destinations closer to you with our expertly curated tours and exceptional service.</p>
          <div className="social__links d-flex align-items-center gap-4">
            <span>
              <Link to='#'><i className="ri-youtube-line"></i></Link>
            </span>
            <span>
              <Link to='#'><i className="ri-github-fill"></i></Link>
            </span>
            <span>
              <Link to='#'><i className="ri-instagram-line"></i></Link>
            </span>
          </div>
        </div>
      </Col>
      <Col lg='3'>
        <h5 className='footer__link-title'>Discover</h5>
        <ListGroup className='footer__quick-links'>
        {
          quick_links.map((item,index)=>(
            <ListGroupItem key={index} className='ps-0 border-0'>
              <Link to={item.path}>{item.display}</Link>
            </ListGroupItem>
          ))
        }
        </ListGroup>
      </Col>
      <Col lg='3'>
        <h5 className='footer__link-title'>Quick Links</h5>
        <ListGroup className='footer__quick-links'>
        {
          quick_links2.map((item,index)=>(
            <ListGroupItem key={index} className='ps-0 border-0'>
              <Link to={item.path}>{item.display}</Link>
            </ListGroupItem>
          ))
        }
        </ListGroup>
      </Col>
      <Col lg='3'>
        <h5 className='footer__link-title'>Contact</h5>
        <ListGroup className='footer__quick-links'>
          <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
            <h6 className='d-flex align-items-center gap-2'>
              <span><i className="ri-map-pin-line"></i></span>
              Address:
            </h6>
            <p className='section__description text-black'>123 Travel Street, Adventure City, AC 12345</p>
          </ListGroupItem>
          <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
            <h6 className='d-flex align-items-center gap-2'>
              <span><i className="ri-phone-line"></i></span>
              Phone:
            </h6>
            <p className='section__description text-black'>+1 (555) 123-4567</p>
          </ListGroupItem>
          <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
            <h6 className='d-flex align-items-center gap-2'>
              <span><i className="ri-mail-line"></i></span>
              Email:
            </h6>
            <p className='section__description text-black'>info@mytour.com</p>
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
    <div className="copyright">
      <p>Copyright {year}, All rights reserved.</p>
    </div>
   </Container>
  </footer>
}

export default Footer 