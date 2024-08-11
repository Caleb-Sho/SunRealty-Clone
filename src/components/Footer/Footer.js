// src/components/Footer/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='socialLinks'>
                <p className='callforassist'>Call for Assistance from a
                    Local Vacation Specialist
                    (206) 414-8973
                    <br />
                    9:00 am - 5:00 pm
                    7 Days/Week
                </p>
                <div className='littleLinks'>
                    <p>Home</p>
                    <p>About Us</p>
                </div>
            </div>
            <div className='bodyContainer'>
            <div className="container2">
                <p>Connect with Us on:</p>
                <div className='logoicons'>
                    <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><img src={'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGljb258ZW58MHx8MHx8fDA%3D'} alt="" /> </a>
                <a href='https://www.twitter.com/' target='_blank' rel="noreferrer"><img src={'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5zdGFncmFtJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D'} alt="" /> </a>

                <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><img src={'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdGFncmFtJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D'} alt="" /> </a>
                <a href='https://www.linkedin.com/' target='_blank' rel="noreferrer"><img src={'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5zdGFncmFtJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D'} alt="" /> </a>
                <a href='https://www.youtube.com/' target='_blank' rel="noreferrer"><img src={'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5zdGFncmFtJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D'} alt="" /> </a>
                <a href='https://www.pinterest.com/' target='_blank' rel="noreferrer"><img src={'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5zdGFncmFtJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D'} alt="" /> </a>
                </div>
            </div>
            <div className='bottomImages'>
                <img src='https://www.sunrealtync.com/sites/default/files/styles/affiliate/public/sites/default/files/affiliates/nc_assoc_of_realtors.png'  alt="" />
                <img src='https://www.sunrealtync.com/sites/default/files/styles/affiliate/public/sites/default/files/affiliates/outer_banks_chamber_of_commerce.png' alt="" />
                <img src='https://www.sunrealtync.com/sites/default/files/styles/affiliate/public/sites/default/files/affiliates/currituck_chamber_of_commerce.png' alt="" />
                <img src='https://www.sunrealtync.com/sites/default/files/styles/affiliate/public/sites/default/files/affiliates/outer_banks_association_of_realtors.png' alt="" />
                <img src='https://www.sunrealtync.com/sites/default/files/styles/affiliate/public/sites/default/files/affiliates/equal_housing_and_realtor_logos.png' alt="" />
            </div>
            <div className='botoomparagraphs'>
                <p>By using this site you agree to our <a href='https://google.com/'>Terms of Use </a> and <a href='https://google.com/'>Privacy Policy</a>.</p>
                <p>© 2024 Sun Realty of Nags Head, Inc. Outer Banks Vacation Rentals. North Carolina. All rights reserved.</p>
                <p>Powered by <a  href='https://google.com/'>Rezfusion </a>. Built by <a href='https://google.com/'>Bluetent</a>.</p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
