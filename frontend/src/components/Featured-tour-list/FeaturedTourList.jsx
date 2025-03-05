import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TourCard from '../../shared/TourCard';
import { BASE_URL } from '../../utils/config';
import './featured-tour.css';

const FeaturedTourList = () => {
  const [featuredTours, setFeaturedTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedTours = async () => {
      try {
        const res = await fetch(`${BASE_URL}/tours/search/getFeaturedTours`);
        const { data } = await res.json();
        setFeaturedTours(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedTours();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  if (loading) return <h4 className='text-center pt-5'>Loading.......</h4>;
  if (error) return <h4 className='text-center pt-5'>{error}</h4>;

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <motion.h2 
              className="featured__tour-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Featured Tours
            </motion.h2>
          </Col>

          <Slider {...settings}>
            {featuredTours.map(tour => (
              <motion.div
                key={tour._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="px-3"
              >
                <TourCard tour={tour} />
              </motion.div>
            ))}
          </Slider>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedTourList; 