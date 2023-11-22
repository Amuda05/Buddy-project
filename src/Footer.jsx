import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="footer">
            <div className="disp">
              <div className="reach">
                <p>Reach out to buddy creators on</p>
               <div className="disa">
               <span><img src="/src/component/media/mdi_twitter.png" alt="" /></span>
                <span><img src="/src/component/media/linkedin.png" alt="" 
                srcset="" /></span>
                <span><img src="/src/component/media/ic_baseline-facebook.png" alt="" srcset="" /></span>
                <span><img src="/src/component/media/entypo_mail.png" alt="" /></span>
               </div>
              </div>

              <div className="reach">
                <p>Services</p>
                  
                  <span>Calculate CGPA</span>
                <span>Mock test</span>
              <span>Download material</span>
              </div>

              <div className="reach">
                <p>Guidelines</p>
                <span>Terms</span>
                <span>license </span>
                <span>How to use</span>
              </div>
              
              <div className="reach">
                <p>Best of luck in your academic 
                    <br />
                    <span> journey <img src="/src/component/media/Star-Struck.png" alt="" srcset="" /></span>
                    </p>
                <span>Made with love by Mohh_Jumah & Polymath</span>
              </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer