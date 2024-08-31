// src/components/Footer/Footer.js

import React from 'react';
import './Footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";

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
                    <p style={{cursor: 'pointer'}}>Home</p>
                    <p style={{cursor: 'pointer'}}>About Us</p>
                </div>
            </div>
            <div className='bodyContainer'>
            <div className="container2">
                <p>Connect with Us on:</p>
                <div className='logoicons'>
                    <a style={{cursor: 'pointer'}} href='https://www.facebook.com/' target='_blank' rel="noreferrer"><FaFacebookSquare className='iconcicon' /> </a>
                <a style={{cursor: 'pointer'}} href='https://www.twitter.com/' target='_blank' rel="noreferrer"><FaSquareTwitter className='iconcicon' /> </a>

                <a style={{cursor: 'pointer'}} href='https://www.instagram.com/' target='_blank' rel="noreferrer"><FaSquareInstagram className='iconcicon' /> </a>
                <a style={{cursor: 'pointer'}} href='https://www.linkedin.com/' target='_blank' rel="noreferrer"><FaLinkedin className='iconcicon'/> </a>
                <a style={{cursor: 'pointer'}} href='https://www.youtube.com/' target='_blank' rel="noreferrer"><IoLogoYoutube className='iconcicon'/> </a>
                <a style={{cursor: 'pointer'}} href='https://www.pinterest.com/' target='_blank' rel="noreferrer"><FaPinterestSquare className='iconcicon'/> </a>
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
                <p>By using this site you agree to our <a style={{cursor: 'pointer'}} href='/'>Terms of Use </a> and <a style={{cursor: 'pointer'}} href='/'>Privacy Policy</a>.</p>
                <p>© 2024 Sun Realty of Nags Head, Inc. Outer Banks Vacation Rentals. North Carolina. All rights reserved.</p>
                <p>Powered by <a style={{cursor: 'pointer'}}  href='/'>Rezfusion </a>. Built by <a href='/'>Bluetent</a>.</p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
