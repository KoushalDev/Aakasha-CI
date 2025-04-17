import dynamic from 'next/dynamic'
import React from 'react'

const signupPage = () => {
    const SignUpCompoent = dynamic(() => import('../components/layout/signup.component'))
  return (
    <div className='d-flex justify-content-center align-items-center'><SignUpCompoent /></div>
  )
}

export default signupPage