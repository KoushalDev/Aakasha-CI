import dynamic from 'next/dynamic'
import React from 'react'

const loginPage = () => {
const LoginComponent= dynamic(() => import ('../components/login.component'), { ssr: false })
const Header = dynamic(() => import('../components/header.component'))

  return (
    <div className='d-flex justify-content-center align-items-center'> 
        <LoginComponent />
    </div>
  )
}

export default loginPage