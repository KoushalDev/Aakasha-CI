import dynamic from 'next/dynamic'
import React from 'react'

const DashboardPage = () => {
    const DashboardComp = dynamic(() =>import('../components/dashboard.component'))
    const SidebarComponent= dynamic(() => import('../components/layout/sidebar.component'))
  return (
    <div className=''>
      <div>
      {/* <SidebarComponent /> */}

      </div>
     
      <div>
      <DashboardComp />


      </div>
      </div>
  )
}

export default DashboardPage