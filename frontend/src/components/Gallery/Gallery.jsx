import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const images = [
    {
      id: 1,
      imgUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Mountain View'
    },
    {
      id: 2,
      imgUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      title: 'Beach Sunset'
    },
    {
      id: 3,
      imgUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Camping'
    },
    {
      id: 4,
      imgUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Forest'
    },
    {
      id: 5,
      imgUrl: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      title: 'Mountain Lake'
    },
    {
      id: 6,
      imgUrl: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Autumn Forest'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <motion.h2 
              className="gallery__title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Our Gallery
            </motion.h2>
          </Col>

          <motion.div
            ref={ref}
            className="gallery__grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {images.map((image) => (
              <motion.div
                key={image.id}
                className="gallery__item"
                variants={itemVariants}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.imgUrl} alt={image.title} />
                <div className="gallery__overlay">
                  <h3>{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Row>
      </Container>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery__modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="gallery__modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.imgUrl} alt={selectedImage.title} />
              <h3>{selectedImage.title}</h3>
              <button onClick={() => setSelectedImage(null)}>×</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery; 