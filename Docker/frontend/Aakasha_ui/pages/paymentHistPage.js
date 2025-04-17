import React from 'react'
import dynamic from 'next/dynamic'


const paymentHistPage = () => {
    const PaymentHistComp = dynamic(() => import('../components/payment.component'))
  return (
    <div><PaymentHistComp  /></div>
  )
}

export default paymentHistPage 