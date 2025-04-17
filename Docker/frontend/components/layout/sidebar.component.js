import React from 'react';
import Link from "next/link";
import { Wallet, ChevronsRight, Airplay, Grid, Layout, UserPlus, Users, List, Home, Briefcase, Database, Hash, DollarSign, Share, Folder, Clock, Layers, Image, CreditCard } from "react-feather";

const SidebarComponent = () => {
  return (
    <div className="sidebar">
      <div className="brand-logo" >
        <Link href=''><Image src="images/logo.png" alt="image1" /></Link>
      </div>
      <ul className="" style={{ listStyleType: 'none' }}>
        <li className='side-bar-item' style={{ marginBottom: 20 }}><Link href="/dashboardPage" style={{ textDecoration: 'none', color: 'black' }} ><Grid color='black' /> <span> Dashboard</span></Link> </li>
        <li style={{ marginBottom: 20 }}><Link href="/myFilesPage" style={{ textDecoration: 'none', color: 'black' }}><Folder color='black' /> <span > My Files</span></Link> </li>
        <li style={{ marginBottom: 20 }}><Link href="#" style={{ textDecoration: 'none', color: 'black' }}> <Image color='black' size={20} alt="image2" /> <span > Photos </span></Link> </li>
        <li style={{ marginBottom: 20 }}><Link href="#" style={{ textDecoration: 'none', color: 'black' }}> <Users color='black' size={20} />  <span > Shared Files </span></Link> </li>
        <li style={{ marginBottom: 20 }}><Link href="/paymentHistPage" style={{ textDecoration: 'none', color: 'black' }}> <CreditCard color='black' size={20} /> <span> Payment History</span></Link> </li>
        <li style={{ marginBottom: 20 }}><Link href="#" style={{ textDecoration: 'none', color: 'black' }}> <Clock color='black' size={20} /> <span> </span>Recent</Link> </li>
        <li style={{ marginBottom: 20 }}><Link href="#" style={{ textDecoration: 'none', color: 'black' }}> <Layers color='black' size={20} /> <span> Storage </span></Link> </li>
      </ul>
    </div>
  )
}

export default SidebarComponent