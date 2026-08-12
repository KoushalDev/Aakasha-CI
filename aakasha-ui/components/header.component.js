import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderComponent = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="">
          <Image src="/images/logo.png" className='logo-img' alt=""  height={30} width={130} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="/homePage">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/featuresPage">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/pricingPage">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contactPage">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link login-btn" href="/loginPage">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link signup-btn" href="/signupPage">Signup</Link>
            </li> 
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HeaderComponent;
