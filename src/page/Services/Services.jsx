// import React from 'react'
import './services.css'
import ServiceDos from '../../components/CardService/Service2'
import Service1 from '../../components/CardService/Service1'
import Service3 from '../../components/CardService/Service3'
import { useEffect } from 'react'


function Services() {
  
  useEffect(()=> {
    scrollTo(0,0)
  }, [])

  return (
    <div>
        <Service1 />
        <ServiceDos />
        <Service3 />
    </div>
  )
}

export default Services;