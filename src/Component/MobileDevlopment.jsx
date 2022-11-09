import React from 'react'
import '../Component/MobileDevlopment.css'
import Navbar from './Navbar'

const MobileDevlopment = () => {
    return (
        <>
            <div className='mobiledev'></div>
            <div className='background'></div>
            <div className='Elipies-4294'></div>
            <div className='Rectangle-16466'></div>
            <div className='Rectangle-16467'></div>
            <div className='Rectangle-16468'></div>


            {/*----------- navbar------------- */}
    
            <Navbar/>

            {/* -----------------main--------------- */}
            <div className='Main-Mobile-App-development'>Mobile App development</div>
            {/* <div className='Group-30029'> */}
            <p className='Group-30029-text'>
                Converting your idea into
                <br />
                reality by offering <span style={{ color: "#A6D4FF" }}>Zyrop’s </span>
                <span style={{ color: "#A6D4FF" }}>cutting-edge and cost effective</span>
                <br />
                custom mobile app development solutions.
            </p>
            <div className='Group-30029-Rectangle-01'></div>
            <div className='Group-30029-Rectangle-02'></div>
            {/* </div> */}
            <div className='Image'>
                <img width={"100%"} height={"100%"} src="https://p2p.shiftal.com/users/images/innerimg.png" alt="img" />
            </div>
            <div className='Rectangle-16471'></div>
            <div className='About-us-bg'></div>
            <div className='About-us-text-1'>ABOUT US</div>
            <div className='About-us-text-2'>
                What makes us the BEST CHOICE of more than 1000 businesses across the world
            </div>
            <div className='About-us-text-3'>
                Here at Zyrop, we provide a full cycle of mobile app development solutions involving the initiation stage, designing, integration, and management. Be it a completely customer-oriented or business-level application, we offer end-to-end mobile application development services across diverse business verticals.
            </div>
            <div className='About-us-text-4'>
                Utilizing an integrated approach to Mobile App Development, Zyrop aims at creating mobile apps that are spontaneous, user-friendly, reliable, and fully-operational. Whether it is iOS, Android, or cross-platform performing applications, we have the best team of engineers to help you bring your dream project to life!
            </div>
        </>
    )
}

export default MobileDevlopment
