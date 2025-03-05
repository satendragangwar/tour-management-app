import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Weather Forecast",
        desc: "Stay informed with accurate weather forecasts for your destinations. Plan your activities and pack accordingly with our detailed weather information.",
    },
    {
        imgUrl: guideImg,
        title: "Expert Tour Guides",
        desc: "Travel with confidence with our experienced local guides who share deep insights into each destination's culture, history, and hidden gems.",
    },
    {
        imgUrl: customizationImg,
        title: "Personalized Tours",
        desc: "Create your perfect journey with customizable itineraries. We tailor every aspect of your tour to match your preferences and travel style.",
    },
]

const ServiceList = () => {
  return <>
  {
    servicesData.map((item,index)=> <Col lg='3' md="6" sm="12" className='mb-4' key={index}><ServiceCard item={item}/></Col>)
  }
  </>
  
}

export default ServiceList
