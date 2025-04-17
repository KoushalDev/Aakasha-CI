import dynamic from 'next/dynamic'
import React from 'react'

const homePage = () => {
const HomeComponent= dynamic(() => import('../components/home.component'))

  return (
    <div>

      <HomeComponent />
     
    </div>
  )
}

export default homePage