import React from "react";
import Logo from "../public/images/logo.png";
import effectiveIcon from "../public/images/effective-icon.png";
import securedIcon from "../public/images/secured-icon.png";
import flexibleIcon from "../public/images/flexible-icon.png";
import scalableIcon from "../public/images/scalable-icon.png";
import { useRouter } from 'next/router'
import Image from "next/image";
import HeaderComponent from "./header.component";


// import "./Mainpage.css";

const Mainpage = () => {

    const router= useRouter()
    
        const handleClick = () => {
           router.push("./loginPage");
        }
    
    return(
        <div className="home-wrapper">
            <HeaderComponent />
      
        <header className="header-section">
          <div className="container">
            <h1>Welcome to <span className="aqua-color">Aakasha</span><br/><span className="fs-30">The Infinite Space<br/>One Stop Solution For All Your
                Data Storage.</span>
            </h1>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <p>Aakasha (Powered By Aagama Consulting Group) presents an entirely innovative solution to todays data
                  storage challenges by utilizing the growing field of Cloud Technologies fused with the advancements made
                  in the Open Source Community</p>
                <p><button type='button' className="get-start-btn" onClick={handleClick}>Get Start Now <span className="icon-arrow-right"></span></button></p>
    
                <div className="icon-container">
                  <div className="icon-item">
                    <p><Image src={effectiveIcon} alt="" /></p>
                    <p>EFFECTIVE</p>
                  </div>
                  <div className="icon-item">
                    <p><Image src={securedIcon} alt=""/></p>
                    <p>SECURED</p>
                  </div>
                  <div className="icon-item">
                    <p><Image src={flexibleIcon} alt=""/></p>
                    <p>FLEXIBLE</p>
                  </div>
                  <div className="icon-item">
                    <p><Image src={scalableIcon} alt=""/></p>
                    <p>SCALABLE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
}

export default Mainpage;