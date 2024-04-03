import React from 'react'
import './Footer.css'
import icon from "../Images/icon.png";
function Footer() {
  return (
    <>
    <div id="main-f">
    <div className="row-f">
        <div className="col-l">
            <img src={icon} alt="" />
            <span>69 Bervely hill ave,brooklyn town, newyork, NY5630, CA, US</span>
            <span>+(123) 456-7890</span>
            <span id='email'>aadimohan51@gmail.com</span>
            <div id="socials">
            <img width="30" height="30" src="https://img.icons8.com/ios/50/FD7E14/facebook-new.png" alt="facebook-new"/>
            <img width="30" height="30" src="https://img.icons8.com/ios/50/FD7E14/twitter--v1.png" alt="twitter--v1"/>
            <img width="30" height="30" src="https://img.icons8.com/ios/50/FD7E14/instagram-new--v1.png" alt="instagram-new--v1"/>
            <img width="30" height="30" src="https://img.icons8.com/ios/50/FD7E14/linkedin.png" alt="linkedin"/>
            <img width="30" height="30" src="https://img.icons8.com/ios/50/FD7E14/youtube-play--v1.png" alt="youtube-play--v1"/>
            </div>
        </div>
        <div className="col-right">
            <div id="col">
                <label htmlFor="Features">Features</label>
                    <a>About</a>
                    <a>contact</a>
                    <a>search</a>

            </div>
            <div id="col">
                <label htmlFor="Information">Information</label>
                    <a>property details</a>
                    <a>agent list</a>
                    <a>agent profiles</a>

            </div>
            <div id="col">
                <label htmlFor="Documentation">Documentation</label>
                    <a>blog</a>
                    <a>privacy policy</a>
                    <a>License</a>

            </div>
            <div id="col">
                <label htmlFor="Others">Others</label>
                    <a>Login</a>
                    <a>Enter OTP</a>
                    <a>create account</a>

            </div>
        </div>
    </div>
    <div className="row-cr">© 2024 all right reserved</div>
    </div>
    
    </>
  )
}

export default Footer