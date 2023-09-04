import React, { useEffect } from 'react'
import Questions from '../../components/Questions/Questions'

function Faq() {
  
  useEffect(()=> {
    scrollTo(0,0)
  }, [])

  return (
    <div>
      <Questions/>
    </div>
  )
}

export default Faq