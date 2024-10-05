import React, { useContext, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { ListingsContext } from "../../components/ListingsContext/listingsContext";
import "./listingdetails.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Notification from "../../components/Notification/NotificationShow";
import { useNavigate } from "react-router-dom";

const ListingDetails = () => {
  const { id } = useParams();
  const { listings } = useContext(ListingsContext);
  const listing = listings.find((listing) => listing.id === parseInt(id));

  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [totalPrice, setTotalPrice] = useState();
  const [pricePerNight, setPricePerNight] = useState();
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/payment");
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Extract number of bedrooms from the conditions string
  useEffect(() => {
    const bedroomsString = listing.conditions.split(" ")[0];
    const bedrooms = parseInt(bedroomsString, 10);

    if (!isNaN(bedrooms)) {
      // Calculate price per night 350
      const calculatedPricePerNight = 620 * bedrooms; // Calculate price per night
      setPricePerNight(calculatedPricePerNight);
    } else {
      console.warn("Invalid number of bedrooms");
      setPricePerNight(0);
    }
  }, [listing.conditions]);

  const calculateTotalPrice = useCallback(
    (arrivalDate, departureDate) => {
      const arrival = new Date(arrivalDate);
      const departure = new Date(departureDate);

      if (isNaN(arrival.getTime()) || isNaN(departure.getTime())) {
        console.warn("Invalid date(s)");
        setTotalPrice(0);
        return;
      }

      const diffTime = Math.abs(departure - arrival);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (!isNaN(pricePerNight) && !isNaN(diffDays)) {
        const calculatedTotalPrice = (diffDays + 0.17) * (pricePerNight * 1.06);
        setTotalPrice(calculatedTotalPrice.toFixed(2));
      } else {
        console.warn("Calculation error: Invalid number of bedrooms or days");
        setTotalPrice(0);
      }
    },
    [pricePerNight]
  );

  useEffect(() => {
    if (arrivalDate && departureDate) {
      calculateTotalPrice(arrivalDate, departureDate);
    }
  }, [arrivalDate, departureDate, calculateTotalPrice]);

  const [notificationVisible, setNotificationVisible] = useState(false);

  useEffect(() => {
    setNotificationVisible(true);
    const timer = setTimeout(() => {
      setNotificationVisible(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="listingsDetails">
      {notificationVisible && (
        <Notification
          message="Attention planners: our website is currently under maintenance, Contact: (206) 414-8973, to book and monitor your reservations!"
          onClose={() => setNotificationVisible(false)}
        />
      )}
      <Header />

      <div className="topFlexWith">
        <img src={listing.image} alt={listing.title} />
        <div className="FlexItemsThings">
          <h2>{listing.title}</h2>
          <p>{listing.description}</p>
          <p>{listing.conditions}</p>
          <p>Price per night: ${pricePerNight}</p>{" "}
          {/* Display price per night */}
          <div className="fixedDateInput">
            <div className="rowlabel">
              <label>Arrival Date:</label>
              <input
                type="date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                required
              />
            </div>
            <div className="rowlabel">
              <label>Departure Date:</label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                required
              />
            </div>
            {totalPrice && (
              <>
                <p style={{ textWrap: "nowrap" }}>
                  Total Price: ${totalPrice}{" "}
                  <span style={{ fontSize: 13, color: "black" }}>
                    +taxes/fees
                  </span>
                </p>
                <button onClick={handleNext} type="submit">
                  Book Now
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="ngoloDodo">
        <p className="biggerTxt">Your Best OBX Vacation Begins with Sun</p>
        <p>
          Sun Realty is committed to creating exceptional Outer Banks
          experiences and providing the perfect backdrop for wonderful vacation
          memories.
        </p>
      </div>
      <div className="theDivDivs">
        <div className="pTagBorder">
          <p>
            Over 44 years of experience and expertise in Outer Banks vacation
            rentals.
          </p>
          <p>
            Local professionals in hospitality and guest experience. We know the
            Outer Banks because we live here!
          </p>
          <p>
            7 offices and in-house support services. Our team is ready and able
            to assist if there's a need while you're here visiting.
          </p>
          <p>
            A large variety of Outer Banks vacation rentals, from Carova to
            Hatteras Village.
          </p>
        </div>
        <div className="besideBackground">
          <p className="pTopp">Why Book with Sun?</p>
          <div className="tinthingFlex">
            <img
              src="https://www.sunrealtync.com/sites/default/files/styles/sun_value_proposition/public/images/value-propositions/website_icons1.png"
              alt=""
            />
            <p>
              All Sun Realty guests receive a hospitality starter kit, including
              laundry detergent, dish soap, dishwashing liquid, sponge, toilet
              paper and paper towels.
            </p>
          </div>
          <div className="tinthingFlex">
            <img
              src="https://www.sunrealtync.com/sites/default/files/styles/sun_value_proposition/public/images/value-propositions/website_icons3.png"
              alt=""
            />
            <p>
              A large selection of pet-friendly homes. No need to leave your
              four-legged friend at home! We even provide a welcome gift for
              your pet. See property amenities for participating homes.
            </p>
          </div>
          <div className="tinthingFlex">
            <img
              src="https://www.sunrealtync.com/sites/default/files/styles/sun_value_proposition/public/images/value-propositions/tag.png"
              alt=""
            />
            <p>
              Discounts to local restaurants, shops, and activities. Our Guest
              Portal provides our favorite recommendations and special offers
              from our partners.
            </p>
          </div>
          <div className="tinthingFlex">
            <img
              src="https://www.sunrealtync.com/sites/default/files/styles/sun_value_proposition/public/images/value-propositions/umbrella.png"
              alt=""
            />
            <p>
              Select homes include beach gear credit from VayK Life. Most homes
              provide discounts on beach gear rentals. See property amenities
              for participating homes.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListingDetails;
