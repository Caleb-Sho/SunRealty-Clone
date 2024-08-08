// src/components/FeaturedListings/FeaturedListings.js

import React, {useState} from 'react';
import './FeaturedListings.css';
import { CiFilter } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";





  const listings = [
    {
      id: 1,
      title: 'Salt Palace 485',
      ratings: '(11 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/a019dac0-b6dc-4a75-b3ad-509a35755dac&settings=default',
      description: 'Oceanfront in Nags Head',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 2,
      title: 'Sandcastle 485-A',
      ratings: '(8 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/1871f90a-7704-48c4-bf6b-984137eb640f&settings=default',
      description: 'Oceanfront in Nags Head',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 3,
      title: 'Dont Worry Beach Happy 479',
      ratings: '(18 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/6995cbf8-c0de-4337-b42f-41b4476320de&settings=default',
      description: 'Oceanfront in Nags Head',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 4,
      title: 'Salt Palace 485',
      ratings: '(11 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/a019dac0-b6dc-4a75-b3ad-509a35755dac&settings=default',
      description: 'Semi ocean front in Nags Head',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 5,
      title: 'Southern Comfort AW-304',
      ratings: '(1 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/f50c7133-3f4d-4d1e-b7f6-e1bea8436d86&settings=default',
      description: 'Semi ocean front in Nags Head',
      conditions: '8 Bedrooms . 7 Baths . Sleeps 16',
    },
    {
      id: 6,
      title: 'Mellow Yellow 454-A',
      ratings: '(2 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/73233392-1779-4073-817a-3e07ce8b1063&settings=default',
      description: 'Semi ocean front in Nags Head',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 7,
      title: 'Aqua Palooza AW-302',
      ratings: '(0 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/94a3dffc-67f6-4819-bb35-cc81c3fdcdc2&settings=default',
      description: 'Semi ocean front in Nags Head',
      conditions: '8 Bedrooms . 6 Baths . Sleeps 16',
    },
    {
      id: 8,
      title: 'Turtley Awesome (formerly Pelicans Perch) AW-308',
      ratings: '(0 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/db4b9c2c-50bb-4242-9e80-6d3735637e25&settings=default',
      description: 'Semi ocean front in Nags Head',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 9,
      title: 'Emerald Wave VNH-6',
      ratings: '(15 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/26c795d6-f5b6-42c7-ad5c-037204e92734&settings=default',
      description: 'Oceanfront in Nags Head',
      conditions: '8 Bedrooms . 5 Baths . Sleeps 16',
    },
    {
      id: 10,
      title: 'Beach Music EE-100',
      ratings: '(12 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/4f880cc4-f5ad-4ad6-9e56-14727b7ac839&settings=default',
      description: 'Semi ocean front in Nags Head',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 1,
      title: 'Salt Palace 485',
      ratings: '(11 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/a019dac0-b6dc-4a75-b3ad-509a35755dac&settings=default',
      description: 'Oceanfront in Nags Head',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 2,
      title: 'Sandcastle 485-A',
      ratings: '(8 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/1871f90a-7704-48c4-bf6b-984137eb640f&settings=default',
      description: 'Oceanfront in Nags Head',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
  ];

  

  const FeaturedListings = () => {

    const [isFocused, setIsFocused] = useState({ date1: false, date2: false });
  const [isDateSelected, setIsDateSelected] = useState({
    date1: false,
    date2: false,
  });

  // Event handlers for focus and blur
  const handleFocus = (dateField) =>
    setIsFocused((prev) => ({ ...prev, [dateField]: true }));
  const handleBlur = (dateField, event) => {
    setIsFocused((prev) => ({ ...prev, [dateField]: false }));
    setIsDateSelected((prev) => ({
      ...prev,
      [dateField]: !!event.target.value,
    })); // Check if a date is selected
  };

    return (
      <section className="featured-listings">
        <div className='rowFunctions'>
          <button className='filterBtn'>
            <CiFilter />
            Show Filters
          </button>
          <div className='dateFlex'><div className='relativeDiv'>
            <label htmlFor='date1' ><div className={`labelDiv ${
                  isFocused.date1 || isDateSelected.date1 ? 'hidden' : ''
                }`}> Arrival <MdDateRange /></div></label>
            <input type="date"  onFocus={() => handleFocus('date1')}
              onBlur={(e) => handleBlur('date1', e)} />
          </div>
            <div className='relativeDiv'>
              <label htmlFor='date2'><div className={`labelDiv ${
                  isFocused.date2 || isDateSelected.date2 ? 'hidden' : ''
                }`}> Departure <MdDateRange /></div></label>
              <input type="date"  onFocus={() => handleFocus('date2')}
              onBlur={(e) => handleBlur('date2', e)} />
            </div>
          </div>
          <div className='relativeDiv'>
            <select>
            
              <option>
                Flexible Arrival/Departure
              </option>
              <option>
                Exact Dates
              </option>
              <option>
              1 Days
              </option>
              <option>
                2 Days
              </option>
              <option>
              3 Days
              </option>

              </select>
          </div>
          <div className='relatriveDiv'><button className='searchBtn' >
            Search
          </button>
          </div>
          <p> 30 results</p>
        </div>


        <div className="container1">
          {/* <h2>Featured Listings</h2> */}
          <div className="listings-grid">
            {listings.map((listing) => (
              <div key={listing.id} className="listing-card">
                <img src={listing.image} alt={listing.title} />
                <div className='listings_items'>
                  <div className='saltpalaca'>
                    <h3>{listing.title}</h3>
                    <p>{listing.ratings}</p>
                  </div>
                  <p>{listing.description}</p>
                  <p>{listing.conditions}</p>
                  <button>View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default FeaturedListings;