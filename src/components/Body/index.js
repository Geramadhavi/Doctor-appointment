import React from 'react'
import './index.css'
import GoogleReviews from '../GoogleReviews'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGraduationCap } from "react-icons/fa";
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { faStamp } from '@fortawesome/free-solid-svg-icons'
import { faDiamondTurnRight } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faCopy }  from '@fortawesome/free-solid-svg-icons'
import { faLink }  from '@fortawesome/free-solid-svg-icons'

const Body = () => {
  return (
    <div className='app-container'>
        <div className='container'>
            <img src='photo.jpg' alt='Dharmendra pratap' className='image'/>
            <div>
                <p className='registration-para'>Registration No : 6539</p>
                <h1 className='heading1'>Dr. Dharmendra Pratap Singh</h1>
                <h1 className='heading2'>Dental Surgeon in Ghazipur</h1>
                <h1 className='heading3'>BDS</h1>
                <div className='card-container'>
                    <div className='card1'>
                        <img src='video.png' alt='video' className='video-image'/>
                        <p className='video-para'>VIDEO CONSULTATION</p>
                    </div>
                    <div className='card1'>
                        <img src='contact.png' alt='contact' className='video-image'/>
                        <p className='video-para'>IN-CLINIC VISITS</p>
                    </div>
                </div>
            </div>
            <div>
                <button className='connect-button'><FontAwesomeIcon icon={faBookmark}/>Connect on Eka Care</button>
            </div>
        </div>
        <div className='first-container'>
            <div className='first'>
                <FaGraduationCap className='graduation-cap'/>
                <div className='first-container-start'>
                    <h1 className='first-container-heading'>15 Yrs</h1>
                    <span className='first-container-para'>Overall Experience</span>
                </div>
            </div>
            <div className='first'>
                <FontAwesomeIcon icon={faGlobe} />
                <div className='first-container-start'>
                    <h1 className='first-container-heading'>English</h1>
                    <span className='first-container-para'>Languages</span>
                </div>
            </div>
        </div>
        <div className='second-container'>
            <h1 className='second-container-heading'>ABOUT THE DOCTOR</h1>
            <p className='second-container-para'>Dental Surgeon</p>
        </div>
        <div className='third-container'>
            <h1 className='second-container-heading'>SPECIALISATIONS</h1>
            <div className='third-container-start'>
                <FontAwesomeIcon icon={faStethoscope} />
                <span className='third-container-para'>Dental Surgeon</span>
            </div>
        </div>
        <div className='third-container'>
            <h1 className='second-container-heading'>REGISTRATIONS</h1>
            <div className='third-container-start'>
                <FontAwesomeIcon icon={faStamp} />
                <div className='fourth-container-start'>
                    <span className='fourth-container-para third-container-para'>6539</span>
                    <span className='third-container-para'>U.P. Dental Council, 2008</span>
                </div>
                
            </div>
        </div>
        <div className='fifth-container'>
            <div>
                <img src='home.png' alt='home' className='home-image'/>
            </div>
            <div>
                <h1 className='fourth-container-para third-container-para'>Bala ji Dental Clinic</h1>
                <span className='third-container-para'>Lanka Maidan Near gate <br/>no.1, Ghazipur, Uttar <br/>Pradesh, Lanka maidan , <br/>Lanka maidan, ghazipur,<br/> uttar pradesh, India, 233001</span>
            </div>
            <div>
                <h1 className='fourth-container-para third-container-para'>Mon - Sun</h1>
                <span className='third-container-para'>09:00 AM - 10:00 AM<br/></span>
                <span className='third-container-para'>10:00 AM - 08:00 PM</span>
            </div>
            <div className='direction-tag-container'>
                <FontAwesomeIcon icon={faDiamondTurnRight}  className='direction-icon'/>
                <a href="https://www.google.com/maps?q=25.5781954,83.5634936" className='direction-tag'>Directions to clinic</a>
            </div>
        </div>
        <div className='sixth-container'>
            <div className='sixth-container-heading'>
                <h1>Clinic</h1>
            </div>
            <div className='sixth-container-second-div'>
                <img src='home.png' alt='home' className='home-image'/>
                <h1 className='fourth-container-para third-container-para'>Bala ji Dental Clinic</h1>
            </div>
            <div>
                <span className='third-container-para'>Lanka Maidan Near gate no.1, Ghazipur, Uttar Pradesh, Lanka maidan,Lanka maidan, ghazipur,uttar pradesh, India, 233001</span>
            </div>
            <div className='sixth-container-second-div'>
                <h1 className='fourth-container-para third-container-para'>Mon - Sun :</h1>
                <div>
                    <span className='third-container-para'>09:00 AM - 10:00 AM<br/></span>
                    <span className='third-container-para'>10:00 AM - 08:00 PM</span>
                </div>
            </div>
            <div className='direction-tag-container'>
                <FontAwesomeIcon icon={faDiamondTurnRight}  className='direction-icon'/>
                <a href="https://www.google.com/maps?q=25.5781954,83.5634936" className='direction-tag'>Directions to clinic</a>
            </div>
        </div>
        <div className='main-card-container'>
            <h1 className='second-container-heading pl-5'>EDUCATIONAL QUALIFICATIONS</h1>
            <p className='fourth-container-para third-container-para'>BDS - 2008</p>
            <span className='third-container-para'>Institute Of Dental Sciences Bareilly,MJP Rohilkhand University Bareilly UP</span>
        </div>
        <div className='third-container'>
            <h1 className='second-container-heading'>MEMBER OF</h1>
            <div className='third-container-start'>
                <FontAwesomeIcon icon={faUsers} style={{color: "#a0a2a2",}} />
                <div className='fourth-container-start'>
                    <span className='fourth-container-para third-container-para'>Indian Dental Association</span>
                    <span className='third-container-para'>2012 - 2052</span>
                </div>    
            </div>
        </div>
        <div className='invitecode-container-first'>
            <div className='invitecode-container'>
                <div className='invitecode-container-start'>
                    <FontAwesomeIcon icon={faUserPlus} style={{color: "#838486",}} />
                    <div>
                        <p className='fourth-container-para third-container-para'>D U E N</p>
                        <span className='third-container-para'>Invite Code</span>
                    </div>
                    <FontAwesomeIcon icon={faCopy} style={{color: "#494a4b",}} />
                </div>
                <div className='invitecode-container-start'>
                    <FontAwesomeIcon icon={faLink} style={{color: "#505253",}} />
                    <div className='invitecode-container-start-div'>
                        <a href="Https://Eka.Im/9FyqjvzEuub" className='direction-tag'>Https://Eka.Im/9FyqjvzEuub</a>
                        <span className='third-container-para pt-3'>Invite Link</span>
                    </div>
                    <FontAwesomeIcon icon={faCopy} style={{color: "#494a4b",}} />
                </div>
            </div>
            <div className='invitecode-container-last'>
                <img src='plus-symbol.png' alt='plus-symbol' className='plus-symbol'/>
                <span className='invitecode-container-last-para'>Use the invite code to add Dr. Dharmendra Pratap Singh to your list of doctors on the Eka App</span>
            </div>
        </div>
        <h1 className='google-reviews-heading'>Google Reviews</h1>
        <div>
            <GoogleReviews/>
        </div>
    </div>
  )
}

export default Body
