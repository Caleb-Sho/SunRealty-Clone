// src/components/Header/Header.js

import React, { useState } from 'react';
import './Header.css';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaHeart } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from "react-icons/io";
import Notification from '../Notification/NotificationShow';
import { IoIosArrowBack } from "react-icons/io";

const CustomNavDropdown = styled(NavDropdown)`
  .dropdown-toggle::after {
    display: none !important;
    border: 0 !important;
    color: #343A40 !important;
    margin-left: 0px; 
  }
`;


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuOpen1, setIsMenuOpen1] = useState(false);
    const [isMenuOpen2, setIsMenuOpen2] = useState(false);
    const [isMenuOpen3, setIsMenuOpen3] = useState(false);
    const [isMenuOpen4, setIsMenuOpen4] = useState(false);
    const [isMenuOpen5, setIsMenuOpen5] = useState(false);
    // const [isMenuOpen6, setIsMenuOpen6] = useState(false);
    // const [isSubMenuOpen1, setIsSubMenuOpen1] = useState(false);
    const [notificationVisible, setNotificationVisible] = useState(false);
    // const [animate, setAnimate] = useState(false);

    // useEffect(() => {
        // Delay to give a smooth entrance when the page is loaded
        // const timer = setTimeout(() => {
        //     setAnimate(true);
        // }, 500); // Adjust delay as needed

        // return () => clearTimeout(timer);
    // }, []);

    const handleShareClick = () => {
        setNotificationVisible(true);
        setTimeout(() => {
            setNotificationVisible(false);
        }, 9000); // Hide the notification after 7 seconds
    };

    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsMenuOpen1(false);
        setIsMenuOpen5(false);
        setIsMenuOpen4(false);
        setIsMenuOpen3(false);
        setIsMenuOpen2(false); 
        
    };
    const handleToggle1 = () => {
        setIsMenuOpen1(!isMenuOpen1);
        setIsMenuOpen(false);
    };
    const handleToggle2 = () => {
        setIsMenuOpen2(!isMenuOpen2);
        setIsMenuOpen(false);
    };
    const handleToggle3 = () => {
        setIsMenuOpen3(!isMenuOpen3);
        setIsMenuOpen(false);
    };
    const handleToggle4 = () => {
        setIsMenuOpen4(!isMenuOpen4);
        setIsMenuOpen(false);
    };
    const handleToggle5 = () => {
        setIsMenuOpen5(!isMenuOpen5);
        setIsMenuOpen(false);
    };
     const handleBack = () =>{
        setIsMenuOpen(true);
        setIsMenuOpen1(false);
        setIsMenuOpen5(false);
        setIsMenuOpen4(false);
        setIsMenuOpen3(false);
        setIsMenuOpen2(false); 
     }

    const tabStyles = {
        navItemStyle: {
            display: 'flex',
            padding: '10px 5px 10px 20px',
            // backgroundColor: '#2D995F',
            color: '#FFFFFF',
            textAlign: 'left',
            fontSize: '13px',
            borderRadius: '0px',
            alignItems: 'center',
            gap: '5px',
            marginLeft: '1px',
        },
        navItemStyle1: {
            display: 'flex',
            padding: '10px 5px 10px 20px',
            // backgroundColor: '#CED4DA',
            color: '#343A40',
            textAlign: 'left',
            fontSize: '13px',
            borderRadius: '0px',
            alignItems: 'center',
            gap: '5px',
            marginLeft: '1px',
        },

        navDropdownTitleStyle: {
            // padding: 10,
            borderRight: '2px solid #008998',
            backgroundColor: 'white',
            paddingRight: 20,
            height: 20,
        },

        navDropdownItemStyle: {
            alignItems: 'center',
            padding: '10px 20px',
            textAlign: 'left',
            fontSize: '14px',
            // backgroundColor: 'black',
            color: '#343A40',

        },
        navItems: {
            fontSize: '13px',
            display: 'flex',
            padding: '0px',

        },
        CustomNavDropdownItem: {
            // backgroundColor: '#000000', // Change this to your desired color
            color: '#343A40',
            padding: '10px 20px',
            fontSize: '14px'
        },
    };

    return (
        <>
      {notificationVisible && (
        <Notification
          message="Attention planners: our website is currently under maintenance, Contact: (206) 414-8973, to book and monitor your reservations!"
          onClose={() => setNotificationVisible(false)}
        />
      )}
        <header className="header">
            <div className='bodytextdecor'>
                <div className='thetopflex'>

                    <img src='https://www.sunrealtync.com/sites/all/themes/custom/vrweb_foundation/logo.png' alt="" />
                    <div className='columnflexProp'>
                        <div className='theflexflex'>
                            <div className='disappearTxt' style={{cursor: 'pointer'}}><p>Login</p></div>
                            <Link to='/payment'> <div className='disappearTxt' style={{cursor: 'pointer'}}><p>Payments</p></div> </Link>
                            <div className='disappearTxt' style={{cursor: 'pointer'}}><p>My Trips</p></div>
                            <div className='disappearTxt' style={{cursor: 'pointer'}}><p>(0) My Favorites</p></div>
                            <div className='disappearTxt' style={{cursor: 'pointer'}}><p><a href="tel:(206) 414-8973">(206) 414-8973 </a> </p></div>
                            <select>
                                <option>
                                    Search home name/ number
                                </option>

                                <option>
                                    'Till Next time 387-B
                                </option>
                                <option>
                                    10-4px2  marginBottom:'3',317-D
                                </option>
                                <option>
                                    12 Fourth Ave SS-4px37 marginBottom:'3',
                                </option>
                                <option>
                                    180 Degrees Of Oceans OCE-103
                                </option>
                                <option>
                                    3 Buoys, 1 Gull 317-A
                                </option>

                            </select>
                        </div>
                        <div className='controlledNav'>
                            <Nav variant="pills" activeKey="1" justify >
                                <CustomNavDropdown title={<div style={tabStyles.navDropdownTitleStyle} onClick={handleShareClick}>

                                    <p style={{
                                        fontWeight: 550,
                                        fontSize: '15px',
                                        letterSpacing: '.48px',
                                        fontFamily: '"Lato", sans-serif',
                                        color: '#008998',
                                        background: 'rgba(255, 255, 255, 0)',
                                        transitionProperty: 'color, background',
                                        transitionDuration: '0.35s',
                                        transitionTimingFunction: 'ease-in-out',
                                        borderTop: '0 !important',
                                        borderBottom: '0 !important',
                                        borderRadius: 0,
                                        // paddingLeft: 16,
                                        marginLeft: 0,

                                    }}>Vacation Rentals</p>

                                </div>} id="nav_dropdown">

                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Listings by Name</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >2025 Advanced Year Reservations</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >New Listings</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Special Offers by week</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Partial Week & Freestyle Rentals</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Frequently Asked Questions</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Military and First Responder Discounts</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Sun Select</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Travel Insurance</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Beach Gear Rntals from Vayk</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >SUn Realty Offers Waterparks Perks for all Guests</NavDropdown.Item>

                                </CustomNavDropdown>
                                <CustomNavDropdown title={<div style={tabStyles.navDropdownTitleStyle} onClick={handleShareClick}>

                                    <p style={{
                                        fontWeight: 550,
                                        fontSize: '15px',
                                        letterSpacing: '.48px',
                                        fontFamily: '"Lato", sans-serif',
                                        color: '#008998',
                                        background: 'rgba(255, 255, 255, 0)',
                                        transitionProperty: 'color, background',
                                        transitionDuration: '0.35s',
                                        transitionTimingFunction: 'ease-in-out',
                                        borderTop: '0 !important',
                                        borderBottom: '0 !important',
                                        borderRadius: 0,
                                        paddingLeft: 16,

                                    }}>Outer Banks Info</p>

                                </div>} id="nav_dropdown">

                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Towns and Villages</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Blogs</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Things to Do</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Events</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Pet-Friendly Outer Banks Vacation Rentals</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >OBX Vacay Channels</NavDropdown.Item>

                                </CustomNavDropdown>
                                <CustomNavDropdown title={<div style={tabStyles.navDropdownTitleStyle} onClick={handleShareClick}>

                                    <p style={{
                                        fontWeight: 550,
                                        fontSize: '15px',
                                        letterSpacing: '.48px',
                                        fontFamily: '"Lato", sans-serif',
                                        color: '#008998',
                                        background: 'rgba(255, 255, 255, 0)',
                                        transitionProperty: 'color, background',
                                        transitionDuration: '0.35s',
                                        transitionTimingFunction: 'ease-in-out',
                                        borderTop: '0 !important',
                                        borderBottom: '0 !important',
                                        borderRadius: 0,
                                        paddingLeft: 16,

                                    }}>Vacationer's Guide</p>

                                </div>} id="nav_dropdown">

                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >About Us</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Jobs at Sun realty</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >SUn Gives Back</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Rental Policies</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Vacation Payment Plans</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Sun REalty Reviews</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >About Outer Banks Rentals</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Join our Email List</NavDropdown.Item>

                                </CustomNavDropdown>
                                <CustomNavDropdown title={<div style={tabStyles.navDropdownTitleStyle} onClick={handleShareClick}>

                                    <p style={{
                                        fontWeight: 550,
                                        fontSize: '15px',
                                        letterSpacing: '.48px',
                                        fontFamily: '"Lato", sans-serif',
                                        color: '#008998',
                                        background: 'rgba(255, 255, 255, 0)',
                                        transitionProperty: 'color, background',
                                        transitionDuration: '0.35s',
                                        transitionTimingFunction: 'ease-in-out',
                                        borderTop: '0 !important',
                                        borderBottom: '0 !important',
                                        borderRadius: 0,
                                        paddingLeft: 16,

                                    }}>List With Sun</p>

                                </div>} id="nav_dropdown">

                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Sun Advantage Program Overview</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Marketing your home</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Reservations and Owner payments </NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Guests and Owner Relations</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Carign for Your Home</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Meet the Sun Team</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Owner Resources</NavDropdown.Item>

                                </CustomNavDropdown>
                                <CustomNavDropdown title={<div style={tabStyles.navDropdownTitleStyle} onClick={handleShareClick}>

                                    <p style={{
                                        fontWeight: 550,
                                        fontSize: '15px',
                                        letterSpacing: '.48px',
                                        fontFamily: '"Lato", sans-serif',
                                        color: '#008998',
                                        background: 'rgba(255, 255, 255, 0)',
                                        transitionProperty: 'color, background',
                                        transitionDuration: '0.35s',
                                        transitionTimingFunction: 'ease-in-out',
                                        borderTop: '0 !important',
                                        borderBottom: '0 !important',
                                        borderRadius: 0,
                                        paddingLeft: 16,

                                    }}>Real Estates Sales</p>

                                </div>} id="nav_dropdown">

                                    <NavDropdown.Item eventKey="4.1" style={{ fontSize: 15, textAlign: 'left', margin: 4, padding: 0, paddingLeft: 5, color: '#008998', borderRadius: 0, }} >Long Term Rentals</NavDropdown.Item>
                                </CustomNavDropdown>
                            </Nav>

                        </div>



                    </div>


                </div>
                <div className='mobileHeader'>
                    <div style={{cursor: 'pointer'}} onClick={handleShareClick}><p>Login</p></div>
                    <Link to='/payment'> <div><p>Pay</p></div> </Link>
                    <div style={{cursor: 'pointer'}}><p>Trips</p></div>
                    <div style={{cursor: 'pointer'}}><p> <FaHeart />(0)</p></div>
                    <div className='mobile_a'><a href="tel:(206) 414-8973"><FaHeadset /></a></div>
                    <div onClick={handleToggle}><p >{isMenuOpen ? 'Close' : 'Menu'}</p></div>
                </div>
                <div className='linedecoration' />
                <div className={` ${'links'} ${isMenuOpen ? 'linksVisibility' : 'linksNotVisibility'}`}>
                    <Link to='/'> <div className='linkDiv' onClick={handleToggle1}> <p>Vacation Rentals </p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleToggle2}> <p> Outer Banks Info </p> <IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleToggle3}> <p>Vacationer's Guide</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleToggle4}> <p>List With Sun</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleToggle5}> <p> Real Estate Sales</p><IoMdArrowDropright /></div></Link>
                </div>
                <div className={` ${'links'} ${isMenuOpen1 ? 'linksVisibility' : 'linksNotVisibility'}`}>
                    <Link to='/'> <div className='linkDiv' onClick={handleBack}> <p><IoIosArrowBack style={{marginLeft: '-4px', marginRight:'-4px', marginBottom:3, color: 'lightblue', fontSize: 12}}/><IoIosArrowBack style={{marginLeft: '-4px', marginRight:'-4px', marginBottom:3, color: 'lightblue', fontSize: 12}}/> Back </p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Vacation Rentals </p> <IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Listings by Name </p> <IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> 2025 Advanced Year Reservations</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> New LIstings</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Special Offers by Week</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Partial Week & Freestule Rentals</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Frequently Asked Questions</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Military and First Responder Discounts</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Sun Select</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Travel Insurance</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Beach Gear Rentals from Vayk Life</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Sun Realty Offers Waterpark Perk for All Guests</p><IoMdArrowDropright /></div></Link>
                </div>
                <div className={` ${'links'} ${isMenuOpen2 ? 'linksVisibility' : 'linksNotVisibility'}`}>
                    <Link to='/'> <div className='linkDiv' onClick={handleBack}> <p><IoIosArrowBack style={{marginLeft: '-4px', marginRight:'-4px', marginBottom:3, color: 'lightblue', fontSize: 12}}/><IoIosArrowBack style={{marginLeft: '-4px', marginRight:'-4px', marginBottom:3, color: 'lightblue', fontSize: 12}}/> Back </p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Outer Banks Info </p> <IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Towns and Villages </p> <IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Blog</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p>Things to Do</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Events</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Pet Friendly Outer anks Vacation Rentals</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> OBX Vacay Channel</p><IoMdArrowDropright /></div></Link>
                </div>
                <div className={` ${'links'} ${isMenuOpen3 ? 'linksVisibility' : 'linksNotVisibility'}`}>
                    <Link to='/'> <div className='linkDiv' onClick={handleBack}> <p><IoIosArrowBack style={{marginLeft: '-4px', marginRight:'-4px', marginBottom:3, color: 'lightblue', fontSize: 12}}/><IoIosArrowBack style={{marginLeft: '-4px', marginRight:'-4px', marginBottom:3, color: 'lightblue', fontSize: 12}}/> Back </p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Vacationer's Guide </p> <IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> About Us</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Jobs at Sun Realty</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Sun Gives Back</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Rental Policies</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Vacation Payment Plans</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Sun Realty Reviews</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> About Outer Banks Rentals</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> JOin Our Email List</p><IoMdArrowDropright /></div></Link>
                </div>
                <div className={` ${'links'} ${isMenuOpen4 ? 'linksVisibility' : 'linksNotVisibility'}`}>
                    <Link to='/'> <div className='linkDiv' onClick={handleBack}> <p><IoIosArrowBack style={{marginLeft: '-4px', marginRight:'-4px', marginBottom:3, color: 'lightblue', fontSize: 12}}/><IoIosArrowBack style={{marginLeft: '-4px', marginRight:'-4px', marginBottom:3, color: 'lightblue', fontSize: 12}}/> Back </p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> List With Sun </p> <IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Sun Advantage Program Overview</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Marketting Your Home</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Reservations and Owner Payments</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Guest and Owner Relations</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Caring for Your Home</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Meet the Sun Team</p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Owner Resources</p><IoMdArrowDropright /></div></Link>
                </div>
                <div className={` ${'links'} ${isMenuOpen5 ? 'linksVisibility' : 'linksNotVisibility'}`}>
                    <Link to='/'> <div className='linkDiv' onClick={handleBack}> <p><IoIosArrowBack style={{marginLeft: '-4px', marginRight:'-4px', marginBottom:3, color: 'lightblue', fontSize: 12}}/><IoIosArrowBack style={{marginLeft: '-4px', marginRight:'-4px', marginBottom:3, color: 'lightblue', fontSize: 12}}/> Back </p><IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Real Estate Sales </p> <IoMdArrowDropright /></div></Link>
                    <Link to='/'> <div className='linkDiv' onClick={handleShareClick}> <p> Long Term Rentals</p><IoMdArrowDropright /></div></Link>
                </div>
            </div>


        </header>
        </>
    );
};

export default Header;
