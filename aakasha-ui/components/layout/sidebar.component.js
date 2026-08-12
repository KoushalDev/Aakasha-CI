import React from 'react'
import Link from 'next/link';
import { Wallet, ChevronsRight, Airplay, Grid, Layout, UserPlus, Users, List, Home, Briefcase, Database, Hash, DollarSign, Share, Folder, Clock, Layers, Image, CreditCard } from "react-feather";

const SidebarComponent = () => {
  return (
    <div className="sidebar">
      <div className="brand-logo" >
        <a href=''><img src="images/logo.png" alt="" /></a>
      </div>
      <ul className="" style={{ listStyleType: 'none' }}>
        <li className='side-bar-item' style={{ marginBottom: 20 }}><a href="/dashboardPage" style={{ textDecoration: 'none', color: 'black' }} ><Grid color='black' /> <span> Dashboard</span></a> </li>
        <li style={{ marginBottom: 20 }}><a href="/myFilesPage" style={{ textDecoration: 'none', color: 'black' }}><Folder color='black' /> <span > My Files</span></a> </li>
        <li style={{ marginBottom: 20 }}><a href="#" style={{ textDecoration: 'none', color: 'black' }}> <Image color='black' size={20} /> <span > Photos </span></a> </li>
        <li style={{ marginBottom: 20 }}><a href="#" style={{ textDecoration: 'none', color: 'black' }}> <Users color='black' size={20} />  <span > Shared Files </span></a> </li>
        <li style={{ marginBottom: 20 }}><a href="/paymentHistPage" style={{ textDecoration: 'none', color: 'black' }}> <CreditCard color='black' size={20} /> <span> Payment History</span></a> </li>
        <li style={{ marginBottom: 20 }}><a href="#" style={{ textDecoration: 'none', color: 'black' }}> <Clock color='black' size={20} /> <span> </span>Recent</a> </li>
        <li style={{ marginBottom: 20 }}><a href="#" style={{ textDecoration: 'none', color: 'black' }}> <Layers color='black' size={20} /> <span> Storage </span></a> </li>
      </ul>
    </div>
  )
}

export default SidebarComponent
