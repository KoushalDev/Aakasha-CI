import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const Layout = ({children}) => {
    // const Header = dynamic(() => import('../header.component'))
  return (
    <>
    <Head>
      <title>Welcome to Aakasha</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css" />
      <link rel="stylesheet" href="/css/style.css" /> {/* Assuming style.css is located in the public directory */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="wrapper">
      {children}
    </div></>
  )
}

export default Layout