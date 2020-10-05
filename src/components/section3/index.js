import React from 'react'
import './style.css'
import '../section3/responsive.css'
import Img1 from '../../images/4.jpg'

export default ()=>{
    return(
        <>
        <div className="about-main-div">
            <h1>Ayrah's Kitchen</h1>
            <div className="about-inner">
                <div className="column-one col-md-6">
                    <img className="deliciousfoood"src={Img1} alt="ins"/>
                </div>
                <div className="column-two col-md-6">
                    <div className="content-column-2">
                        <div>
                            <h2>Our Story</h2>
                        </div>
                        <hr></hr>
                    </div>
                </div>
            </div>
        </div>
        <div className="our-membership">
        <button className="member"><a href="http://designers123.000webhostapp.com/">Be Our Member</a></button>
        </div>
        </>
    )
}