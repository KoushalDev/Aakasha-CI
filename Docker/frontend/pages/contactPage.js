import dynamic from 'next/dynamic'
import React from 'react'

const contactPage = () => {
    const LayoutComponent = dynamic(() => import('../components/layout'))
  return (
    <div style={{margin:100  }} className='text-center'>contactPage</div>
  )
}

export default contactPage