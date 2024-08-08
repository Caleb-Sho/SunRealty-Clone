// src/components/Hero/Hero.js

import React from 'react';
import './Hero.css';
import { IoMdShare } from "react-icons/io";

const Hero = () => {
  return (
    <section className="hero">
      <img src={'https://www.sunrealtync.com/sites/default/files/styles/og_image/public/page-banners/untitled_2_of_26.jpg'} />
      <div className='Headersbtns'>
        <h4>
          Nag Head Rentals
        </h4>
        <button className='butoon'>
          <IoMdShare />
          <p>Share These Results</p>
        </button>
      </div>
      <div className='bottomContdiv'>
        <h4>
        Old Meets New in the Town of Nags Head
        </h4>
        <p>
        This quintessential beach town has been attracting vacationers for decades; so much so, some vacationers call the entire Outer Banks “Nags Head”. While this may not come as a surprise to most, Nags Head has truly shaped how the Outer Banks was built. Home to the original “old Nags Head-style” beach homes, properties in this area are some of the first homes that featured cedar shake along the Outer Banks. Old meets new in Nags Head offering newly built homes alongside classic beach cottages.
        </p>
        <p>
        The wide beaches of Nags Head bring guests back year after year, but the soundside areas of this town are really something to behold. The Nags Head Woods Ecological Preserve provides hiking trails for those who would like to enjoy some off-the-beach nature scenes. The preserve is located 3.6-miles north of Jockey's Ridge State Park, the largest living sand dune on the east coast. A climb to the top of Jockey's Ridge allows for an indescribable panoramic view of the Outer Banks, and emphasizes how narrow our strip of land really is.
        </p>
        <p>Nags Head, as well as Kill Devil Hills, provides the greatest opportunities for activities such as hang gliding, miniature golf, shopping and go kart racing, plus night-life such as breweries and pubs for the adults. Four additional piers, including Jennette's Pier, an affiliate of the NC Aquarium, line the beaches from Kill Devil Hills to South Nags Head, with plenty of opportunities for fishing and nature-watching. For more details about Nags Head, click <a>here</a> .</p>
      </div>
    </section>
  );
};

export default Hero;
