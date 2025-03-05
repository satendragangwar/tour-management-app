import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
const Testimonials = () => {
    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                 breakpoint:576,
                 settings:{
                    slidesToShow:1,
                    slidesToScroll:1,

                 },
            },
        ]

    }
  return <Slider {...settings}>
    <div className='testimonial py-4 px-3 text-white'>
        <p>"The attention to detail and personalized service exceeded my expectations. Our guide's local knowledge made the trip truly special. I'll definitely be booking my next adventure with MyTour!"</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Sarah Johnson</h6>
                <p>Adventure Enthusiast</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3 text-white'>
        <p>"From the initial planning to the final day of our tour, everything was seamless. The weather forecasts were spot-on, and the customized itinerary perfectly matched our interests."</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Michael Chen</h6>
                <p>Travel Blogger</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3 text-white'>
        <p>"The local guides were incredibly knowledgeable and passionate about sharing their culture. We discovered hidden gems we would have missed without their expertise."</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Emma Rodriguez</h6>
                <p>Cultural Explorer</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3 text-white'>
        <p>"MyTour's personalized approach made our family vacation stress-free. They accommodated our specific needs and created unforgettable memories for all of us."</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>David Thompson</h6>
                <p>Family Traveler</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3 text-white'>
        <p>"The combination of professional service and local expertise made our tour exceptional. Every detail was carefully planned, and the execution was flawless."</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Lisa Anderson</h6>
                <p>Luxury Traveler</p>
            </div>
        </div>
    </div>
  </Slider>
   
  
}

export default Testimonials
