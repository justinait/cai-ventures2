
import Card2 from '../../components/contactCards/Card2'
import Card1 from '../../components/contactCards/Card1'
import './contact.css'
import { useEffect } from 'react'

function Contact() {
  
  useEffect(()=> {
    scrollTo(0,0)
  }, [])

  return (
    <div className='contactPagesContainer'>

      <Card1/>
      <Card2/>

    </div>
  )
}

export default Contact