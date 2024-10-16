// src/components/FeaturedListings/FeaturedListings.js
import imageSrc from "../../../src/Assets/listings/Crowne Plaza Terrigal/view.png";
import imageSrc1 from "../../../src/Assets/listings/Bells at Killcare Boutique Hotel/destinatioon.png";
import imageSrc2 from "../../../src/Assets/listings/The Retreat at Wisemans/sittingroom.png";
import imageSrc3 from "../../../src/Assets/listings/Crowne Plaza Terrigal/swimmingpool.png";
import imageSrc4 from "../../../src/Assets/listings/Avoca Beach Hotel Resort/bedroom1.png";
import imageSrc5 from "../../../src/Assets/listings/Ocean Beach Resort/food.png";
import imageSrc6 from "../../../src/Assets/listings/Forresters Beach Resort/bedrooms.png";
import imageSrc7 from "../../../src/Assets/listings/Kims Beachside Retreat/pool.png";
import imageSrc8 from "../../../src/Assets/listings/The Entrance Lake House/destination.png";
import imageSrc9 from "../../../src/Assets/listings/Norah Head Lighthouse/destination.png";
import imageSrc10 from "../../../src/Assets/listings/The Boathouse Hotel Patonga/room.png";
import imageSrc11 from "../../../src/Assets/listings/Toukley Beach Resort/destination.png";

import React, { useState, useRef, useEffect } from "react";
import "./FeaturedListings.css";
import { CiFilter } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import Notification from "../Notification/NotificationShow";
// import { useContext } from 'react';
import { Link } from "react-router-dom";

const listingsData = [
  {
    id: 1,
    title: "OBX-ta-Sea 433-A55",
    ratings: "(11 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/7996131c-aa90-4bd5-9dcf-5619e4167b0c&settings=default",
    description: "Oceanfront in Moclips, Washington",
    conditions: "3 Bedrooms . 2 Baths . Sleeps 6",
  },
  {
    id: 2,
    title: "Sandcastle 485-A",
    ratings: "(8 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/1871f90a-7704-48c4-bf6b-984137eb640f&settings=default",
    description: "Oceanfront in Nags Head",
    conditions: "4 Bedrooms . 3 Baths . Sleeps 8",
  },
  {
    id: 3,
    title: "Dont Worry Beach Happy 479",
    ratings: "(18 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/6995cbf8-c0de-4337-b42f-41b4476320de&settings=default",
    description: "Oceanfront in Ashburn, North Virginia",
    conditions: "3 Bedrooms . 2 Baths . Sleeps 6",
  },
  {
    id: 4,
    title: "Carolina Oasis 462-B",
    ratings: "(11 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/55ee25ef-4640-4188-a520-6811ee558a6e&settings=default",
    description: "Semi ocean front in Zion, UT",
    conditions: "4 Bedrooms . 2 Baths . Sleeps 8",
  },
  {
    id: 5,
    title: "Southern Comfort AW-304",
    ratings: "(1 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/f50c7133-3f4d-4d1e-b7f6-e1bea8436d86&settings=default",
    description: "Semi ocean front in Nags Head",
    conditions: "2 Bedrooms . 2 Baths . Sleeps 4",
  },
  {
    id: 6,
    title: "Mayhems Cove ONHC-31",
    ratings: "(1 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/b0cd3dbd-be41-468e-bbf2-4aff651c3bec&settings=default",
    description: "Southside in Yosemite, California",
    conditions: "4 Bedrooms . 3 Baths . Sleeps 8",
  },
  {
    id: 7,
    title: "Caribbean Hues 419-A",
    ratings: "(12 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/014ca77e-15b1-4ad3-b0ff-f051ad298dd3&settings=default",
    description: "Semi ocean front in Moclips, Washington",
    conditions: "3 Bedrooms . 2 Baths . Sleeps 6",
  },
  {
    id: 8,
    title: "Mellow Yellow 454-A",
    ratings: "(2 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/73233392-1779-4073-817a-3e07ce8b1063&settings=default",
    description: "Semi ocean front in Nags Head",
    conditions: "3 Bedrooms . 3 Baths . Sleeps 6",
  },
  {
    id: 9,
    title: "Aqua Palooza AW-302",
    ratings: "(0 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/94a3dffc-67f6-4819-bb35-cc81c3fdcdc2&settings=default",
    description: "Semi ocean front in Nags Head",
    conditions: "3 Bedrooms . 2 Baths . Sleeps 6",
  },
  {
    id: 10,
    title: "Honey- B 406-A",
    ratings: "(6 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/1002e80e-7bbf-4380-bb63-e268e8b10ede&settings=default",
    description: "Semi ocean front in Ashburn, North Virginia",
    conditions: "3 Bedrooms . 3 Baths . Sleeps 6",
  },
  {
    id: 11,
    title: "Turtley Awesome (formerly Pelicans Perch) AW-308",
    ratings: "(0 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/db4b9c2c-50bb-4242-9e80-6d3735637e25&settings=default",
    description: "Semi ocean front in Nags Head",
    conditions: "2 Bedrooms . 2 Baths . Sleeps 4",
  },
  {
    id: 12,
    title: "Southern Delight 424-A",
    ratings: "(7 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/43f4aef8-d2dc-42c6-b3ca-31fadfe08f59&settings=default",
    description: "Semi ocean front in Yosemite, California",
    conditions: "4 Bedrooms . 3 Baths . Sleeps 8",
  },
  {
    id: 13,
    title: "Emerald Wave VNH-6",
    ratings: "(15 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/26c795d6-f5b6-42c7-ad5c-037204e92734&settings=default",
    description: "Oceanfront in Nags Head",
    conditions: "4 Bedrooms . 2 Baths . Sleeps 8",
  },
  {
    id: 14,
    title: "The Sandlot 437",
    ratings: "(15 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/95187bec-3be0-466c-bb1c-2534f8531aae&settings=default",
    description: "Oceanfront in Yosemite, California",
    conditions: "3 Bedrooms . 3 Baths . Sleeps 6",
  },
  {
    id: 15,
    title: "Sea Breeze 405",
    ratings: "(12 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/8206c41b-9bcc-4239-91e1-e022cbef0d38&settings=default",
    description: "Semi ocean front in Nags Head",
    conditions: "3 Bedrooms . 2 Baths . Sleeps 6",
  },
  {
    id: 16,
    title: "Beach Music EE-100",
    ratings: "(12 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/b0cd3dbd-be41-468e-bbf2-4aff651c3bec&settings=default",
    description: "Semi ocean front in Zion, UT",
    conditions: "3 Bedrooms . 3 Baths . Sleeps 6",
  },
  {
    id: 17,
    title: "Sea Robin SSIS-21",
    ratings: "(11 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/201ac5df-9891-4313-9191-be2cb205c922&settings=default",
    description: "Oceanfront in Ashburn, North Virginia",
    conditions: "4 Bedrooms . 2 Baths . Sleeps 8",
  },
  {
    id: 18,
    title: "Sound Waves SC-210",
    ratings: "(8 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/88baa094-4ffb-4add-a855-8794613805f2&settings=default",
    description: "Oceanfront in Nags Head",
    conditions: "3 Bedrooms . 3 Baths . Sleeps 6",
  },
  {
    id: 19,
    title: "Miles of Treasure 434-A",
    ratings: "(8 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/17cb2c0d-0ba6-4f08-b461-e4f866163318&settings=default",
    description: "Oceanfront in Zion, UT",
    conditions: "3 Bedrooms . 2 Baths . Sleeps 6",
  },
  {
    id: 20,
    title: "Devilbliss 463-A",
    ratings: "(8 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/25e1bf2a-ac78-4451-9d48-d70981648fbc&settings=default",
    description: "Soundside in Moclips, Washington",
    conditions: "3 Bedrooms . 3 Baths . Sleeps 6",
  },
  {
    id: 21,
    title: "Quay-C3 QUAY-C3",
    ratings: "(8 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/e4d4046c-54a2-4901-852c-4e8c04b72d23&settings=default",
    description: "Soundside in Moclips, Washington",
    conditions: "4 Bedrooms . 2 Baths . Sleeps 8",
  },
  {
    id: 22,
    title: "Casa Del Abuelos WHS-2",
    ratings: "(18 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/41e8f1a8-32fc-45f0-a3ba-c80ce2c7f727&settings=default",
    description: "Oceanside in Nags Head",
    conditions: "3 Bedrooms . 2 Baths . Sleeps 6",
  },
  {
    id: 23,
    title: "Sea Rise VNH-101A",
    ratings: "(10 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/4aefb925-1b86-4723-8b87-468e93810e6d&settings=default",
    description: "Soundside in Ashburn, North Virginia",
    conditions: "4 Bedrooms . 3 Baths . Sleeps 8",
  },
  {
    id: 24,
    title: "The Purple Whale 49",
    ratings: "(1 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/9799c270-d1c7-4295-99c9-f10043ae9047&settings=default",
    description: "Semi ocean in Ashburn, North Virginia",
    conditions: "4 Bedrooms . 3 Baths . Sleeps 8",
  },
  {
    id: 25,
    title: "180 Degrees Of Ocean OCE-103",
    ratings: "(13 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/f9c17339-26c2-4b1e-b547-fbfceb88b31f&settings=default",
    description: "Oceanfront in Yosemite, Carlifornia",
    conditions: "4 Bedrooms . 3 Baths . Sleeps 8",
  },
  {
    id: 26,
    title: "Landis I ADV-2B5",
    ratings: "(11 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/e8420914-53b2-4480-b1e0-4c76468201be&settings=default",
    description: "Oceanfront in Moclips, Washington",
    conditions: "3 Bedrooms . 2 Baths . Sleeps 6",
  },
  {
    id: 27,
    title: "Oinkers Away 405-C",
    ratings: "(8 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/e1b127d4-eb37-488a-bc6f-f35136ee6e73&settings=default",
    description: "Oceanfront in Nags Head",
    conditions: "4 Bedrooms . 3 Baths . Sleeps 8",
  },
  {
    id: 28,
    title: "Dolphin Dance 492-B",
    ratings: "(18 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/374224a9-7860-422b-b9f5-3cd058fb9f80&settings=default",
    description: "Oceanfront in Ashburn, North Virginia",
    conditions: "3 Bedrooms . 2 Baths . Sleeps 6",
  },
  {
    id: 29,
    title: "Home Traveler A",
    ratings: "(11 Reviews)",
    image: imageSrc,
    description: "Semi ocean front in Zion, UT",
    conditions: "4 Bedrooms . 3 Baths . Sleeps 8",
  },
  {
    id: 30,
    title: "Home By The Sea 441-A",
    ratings: "(1 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/b9a8f2a7-81e8-4200-a2d9-3611e55a2e55&settings=default",
    description: "Semi ocean front in Nags Head",
    conditions: "2 Bedrooms . 2 Baths . Sleeps 4",
  },
  {
    id: 31,
    title: "Family Farm VNH-11",
    ratings: "(1 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/13f43420-069b-40cd-bd88-0f5478eb8db6&settings=default",
    description: "Southside in Yosemite, California",
    conditions: "3 Bedrooms . 3 Baths . Sleeps 6",
  },
  {
    id: 32,
    title: "Casa Del Abuelos WHS-2",
    ratings: "(12 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/41e8f1a8-32fc-45f0-a3ba-c80ce2c7f727&settings=default",
    description: "Semi ocean front in Moclips, Washington",
    conditions: "2 Bedrooms . 2 Baths . Sleeps 4",
  },
  {
    id: 33,
    title: "Saunders, R & K 431",
    ratings: "(2 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/e4ac5234-e12c-4d11-941d-8797ae514a3c&settings=default",
    description: "Semi ocean front in Zion, UT",
    conditions: "3 Bedrooms . 2 Baths . Sleeps 6",
  },
  {
    id: 34,
    title: "Aquatic Anesthesia 46-A",
    ratings: "(0 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/58e1fc7d-24fc-4fdb-b56e-7325c74bb759&settings=default",
    description: "Semi ocean front in Nags Head",
    conditions: "4 Bedrooms . 3 Baths . Sleeps 8",
  },
  {
    id: 35,
    title: "Lighthouse 494-A",
    ratings: "(6 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/801e1ab8-d2fe-4853-973c-1bff931ae344&settings=default",
    description: "Semi ocean front in Ashburn, North Virginia",
    conditions: "4 Bedrooms . 4 Baths . Sleeps 8",
  },
  {
    id: 36,
    title: "The Purple Whale 493",
    ratings: "(0 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/9799c270-d1c7-4295-99c9-f10043ae9047&settings=default",
    description: "Semi ocean front in Nags Head",
    conditions: "3 Bedrooms . 2 Baths . Sleeps 6",
  },
  {
    id: 37,
    title: "Caribbean Hues 419-A",
    ratings: "(7 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/014ca77e-15b1-4ad3-b0ff-f051ad298dd3&settings=default",
    description: "Semi ocean front in Yosemite, California",
    conditions: "4 Bedrooms . 4 Baths . Sleeps 8",
  },
  {
    id: 38,
    title: "Emerald Wave VNH-6",
    ratings: "(15 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/26c795d6-f5b6-42c7-ad5c-037204e92734&settings=default",
    description: "Oceanfront in Yosemite, California",
    conditions: "4 Bedrooms . 3 Baths . Sleeps 8",
  },
  {
    id: 39,
    title: "Carolina Oasis 42-B",
    ratings: "(15 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/55ee25ef-4640-4188-a520-6811ee558a6e&settings=default",
    description: "Oceanfront in Yosemite, California",
    conditions: "3 Bedrooms . 3 Baths . Sleeps 6",
  },
  {
    id: 40,
    title: "Casa Del Abuelos WHS-2",
    ratings: "(12 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/631f572e-5903-4657-be0a-c3f15571e1a4&settings=default",
    description: "Semi ocean front in Nags Head",
    conditions: "4 Bedrooms . 4 Baths . Sleeps 8",
  },
  {
    id: 41,
    title: "4 Paws Inn 411-B",
    ratings: "(12 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/27fbc180-2fdc-4a9d-8ab1-a93de8c2f7de&settings=default",
    description: "Semi ocean front in Zion, UT",
    conditions: "2 Bedrooms . 1 Bath . Sleeps 4",
  },
  {
    id: 42,
    title: "Pacific Escape 451-A",
    ratings: "(2 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/a019dac0-b6dc-4a75-b3ad-509a35755dac&settings=default",
    description: "Oceanfront in Yosemite, California",
    conditions: "3 Bedrooms . 2 Baths . Sleeps 6",
  },
  {
    id: 43,
    title: "Tropical Shores 401",
    ratings: "(5 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/631f572e-5903-4657-be0a-c3f15571e1a4&settings=default",
    description: "Oceanfront in Nags Head",
    conditions: "4 Bedrooms . 3 Baths . Sleeps 8",
  },
  {
    id: 44,
    title: "Beachside Haven 442",
    ratings: "(3 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/c98343e2-bcb7-405c-9714-b54b48496479&settings=default",
    description: "Oceanfront in Ashburn, North Virginia",
    conditions: "2 Bedrooms . 2 Baths . Sleeps 4",
  },
  {
    id: 45,
    title: "Hallelujah 490",
    ratings: "(9 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/ef4f777e-6ed6-4649-9cb3-5eb2f0383b9a&settings=default",
    description: "Soundside in Ashburn, North Virginia",
    conditions: "2 Bedrooms . 4 Baths . Sleeps 5",
  },
  {
    id: 46,
    title: "Sound Waves SC-210",
    ratings: "(8 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/88baa094-4ffb-4add-a855-8794613805f2&settings=default",
    description: "Soundside in Moclips, Washington",
    conditions: "4 Bedrooms . 3 Baths . Sleeps 5",
  },
  {
    id: 47,
    title: "8 Shores Inn 411-B",
    ratings: "(18 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/486699a1-5aad-4140-86c0-08e6990c1018&settings=default",
    description: "Oceanside in Nags Head",
    conditions: "3 Bedrooms . 4 Baths . Sleeps 5",
  },
  {
    id: 48,
    title: "Nanas Bananas 458-B",
    ratings: "(10 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/237e657a-0519-408a-9f41-61f75d2fbf51&settings=default",
    description: "Soundside in Ashburn, North Virginia",
    conditions: "2 Bedrooms . 4 Baths . Sleeps 5",
  },
  {
    id: 49,
    title: "Midwatch OW-3",
    ratings: "(1 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/acfa5a1b-5dcc-4f59-b062-e5d0778dc4e1&settings=default",
    description: "Semi ocean in Ashburn, North Virginia",
    conditions: "3 Bedrooms . 4 Baths . Sleeps 4",
  },
  {
    id: 50,
    title: "Sun-sational SSIS-34",
    ratings: "(13 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/09da7ca8-771f-4cda-be75-18782fb44f4b&settings=default",
    description: "Oceanfront in Yosemite, Carlifornia",
    conditions: "2 Bedrooms . 3 Baths . Sleeps 4",
  },
  {
    id: 51,
    title: "Sweet n Salty 410",
    ratings: "(11 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/4496bf60-f36a-446c-8ab4-5702ba0d8e80&settings=default",
    description: "Oceanfront in Moclips, Washington",
    conditions: "2 Bedrooms . 3 Baths . Sleeps 4",
  },
  {
    id: 52,
    title: "Sandys Palace 304-B",
    ratings: "(8 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/e4ac5234-e12c-4d11-941d-8797ae514a3c&settings=default",
    description: "Oceanfront in Nags Head",
    conditions: "2 Bedrooms . 3 Baths . Sleeps 3",
  },
  {
    id: 53,
    title: "The Love Shack 492-A",
    ratings: "(18 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/83a325dd-0795-4699-8f28-ee4225f136a1&settings=default",
    description: "Oceanfront in Ashburn, North Virginia",
    conditions: "2 Bedrooms . 3 Baths . Sleeps 4",
  },
  {
    id: 54,
    title: "Devilbliss 463-A5",
    ratings: "(11 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/25e1bf2a-ac78-4451-9d48-d70981648fbc&settings=default",
    description: "Semi ocean front in Zion, UT",
    conditions: "2 Bedrooms . 4 Baths . Sleeps 4",
  },
  {
    id: 55,
    title: "Jacksons Place 421-A",
    ratings: "(1 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/099f020a-ccbd-40e2-ade7-30bab4b644b2&settings=default",
    description: "Semi ocean front in Moclips, Washington",
    conditions: "2 Bedrooms . 2 Baths . Sleeps 4",
  },
  {
    id: 56,
    title: "Memory Maker 449-A",
    ratings: "(1 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/ccaa3c08-d0f0-4402-9a7c-5a070f4cb0ed&settings=default",
    description: "Southside in Yosemite, California",
    conditions: "1 Bedrooms . 3 Baths . Sleeps 3",
  },
  {
    id: 57,
    title: "The Purple Whale 493",
    ratings: "(12 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/9799c270-d1c7-4295-99c9-f10043ae9047&settings=default",
    description: "Semi ocean front in Moclips, Washington",
    conditions: "2 Bedrooms . 3 Baths . Sleeps 2",
  },
  {
    id: 58,
    title: "As Time Goes By 420",
    ratings: "(2 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/9b8ec6f1-04ee-4ba1-bc7a-f9fbd10c8a49&settings=default",
    description: "Semi ocean front in Nags Head",
    conditions: "2 Bedrooms . 3 Baths . Sleeps 6",
  },
  {
    id: 59,
    title: "Saunders, R & K 431",
    ratings: "(0 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/72e7b13f-1636-43f6-b322-fd03dd0ee5e7&settings=default",
    description: "Semi ocean front in Nags Head",
    conditions: "4 Bedrooms . 4 Baths . Sleeps 6",
  },
  {
    id: 60,
    title: "Happy Crab 444",
    ratings: "(6 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/15e23471-a8b2-47fe-92b6-c1d42146ee0b&settings=default",
    description: "Semi ocean front in Ashburn, North Virginia",
    conditions: "2 Bedrooms . 2 Baths . Sleeps 4",
  },
  {
    id: 61,
    title: "Turtley Awesome (formerly Pelicans Perch) AW-308",
    ratings: "(0 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/db4b9c2c-50bb-4242-9e80-6d3735637e25&settings=default",
    description: "Semi ocean front in Zion, UT",
    conditions: "3 Bedrooms . 2 Baths . Sleeps 6",
  },
  {
    id: 62,
    title: "Sea Robin SSIS-21",
    ratings: "(7 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/201ac5df-9891-4313-9191-be2cb205c922&settings=default",
    description: "Semi ocean front in Yosemite, California",
    conditions: "3 Bedrooms . 3 Baths . Sleeps 6",
  },
  {
    id: 63,
    title: "Wavy Naty VNH-6",
    ratings: "(15 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/c98343e2-bcb7-405c-9714-b54b48496479&settings=default",
    description: "Oceanfront in Nags Head, NC",
    conditions: "2 Bedrooms . 2 Baths . Sleeps 4",
  },
  {
    id: 64,
    title: "Runaway Beach 487-A",
    ratings: "(15 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/9aebf2c9-bed1-47a4-9d3c-acca26e9ca3e&settings=default",
    description: "Oceanfront in Yosemite, California",
    conditions: "4 Bedrooms . 2 Baths . Sleeps 8",
  },
  {
    id: 65,
    title: "Top O The Dune HKN-S",
    ratings: "(12 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/3c869a01-6c47-47e9-87f0-c687a170cd33&settings=default",
    description: "Semi ocean front in Nags Head, NC",
    conditions: "3 Bedrooms . 3 Baths . Sleeps 6",
  },
  {
    id: 66,
    title: "Over The Dune QUAY-C2",
    ratings: "(12 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/077dff70-6fd2-4157-9e3c-29beaec2798a&settings=default",
    description: "Semi ocean front in Zion, UT",
    conditions: "2 Bedrooms . 2 Baths . Sleeps 4",
  },
  {
    id: 67,
    title: "Dots Dream 436-A5",
    ratings: "(11 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/f017ed2e-8f16-4ba0-814e-d718e9304baf&settings=default",
    description: "Oceanfront in Yosemite, California",
    conditions: "3 Bedrooms . 2 Baths . Sleeps 6",
  },
  {
    id: 68,
    title: "Turtle Pace 396-AB",
    ratings: "(8 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/6fec262d-9f24-4ef1-b398-1322d964de53&settings=default",
    description: "Oceanfront in Nags Head",
    conditions: "2 Bedrooms . 2 Baths . Sleeps 4",
  },
  {
    id: 69,
    title: "Ravens Nest 425-A",
    ratings: "(8 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/a101521b-b9cb-45e0-b127-0a708b16e860&settings=default",
    description: "Oceanfront in Zion, UT",
    conditions: "2 Bedrooms . 2 Baths . Sleeps 4",
  },
  {
    id: 70,
    title: "High Point 458-A",
    ratings: "(8 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/9630374f-1a9b-4ccc-aec5-87d32e66a4e6&settings=default",
    description: "Soundside in Nags Head",
    conditions: "4 Bedrooms . 3 Baths . Sleeps 8",
  },
  {
    id: 71,
    title: "Aquatic Anesthesia 465-A",
    ratings: "(8 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/58e1fc7d-24fc-4fdb-b56e-7325c74bb759&settings=default",
    description: "Soundside in Moclips, Washington",
    conditions: "4 Bedrooms . 2 Baths . Sleeps 8",
  },
  {
    id: 72,
    title: "Finally Ours DR-32",
    ratings: "(18 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/2c73baa2-5f82-4caa-b85a-300a3c608774&settings=default",
    description: "Oceanside in Nags Head",
    conditions: "4 Bedrooms . 3 Baths . Sleeps 8",
  },
  {
    id: 73,
    title: "Sea Rise VNH-101A",
    ratings: "(10 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/4aefb925-1b86-4723-8b87-468e93810e6d&settings=default",
    description: "Soundside in Zion, UT",
    conditions: "4 Bedrooms . 3 Baths . Sleeps 8",
  },
  {
    id: 74,
    title: "Angels Landing 488",
    ratings: "(1 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/aa5a28ab-d50d-4ca4-9ea5-a18a5021273a&settings=default",
    description: "Semi ocean in Ashburn, North Virginia",
    conditions: "4 Bedrooms . 3 Baths . Sleeps 8",
  },
  {
    id: 75,
    title: "Seaside Escape SSIS-36",
    ratings: "(13 Reviews)",
    image:
      "https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/2e6c04ca-2492-4d87-bb41-2fd057d56ec5&settings=default",
    description: "Oceanfront in Yosemite, California",
    conditions: "3 Bedrooms . 2 Baths . Sleeps 6",
  },
  {
    id: 76,
    title: "Bells at Killcare Boutique Hotel",
    ratings: "(20 Reviews)",
    image: imageSrc1,
    description: "Luxurious stay near Killcare Beach, Killcare Heights, NSW",
    conditions: "4 Bedrooms . Restaurant . Spa Services",
  },
  {
    id: 77,
    title: "The Retreat at Wisemans",
    ratings: "(15 Reviews)",
    image: imageSrc2,
    description: "Scenic riverfront relaxation, Wisemans Ferry, NSW",
    conditions: "3 Bedrooms . Pool . Tennis Courts",
  },
  {
    id: 78,
    title: "Crowne Plaza Terrigal",
    ratings: "(30 Reviews)",
    image: imageSrc3,
    description: "Beachfront luxury with ocean views, Terrigal, NSW",
    conditions: "3 Bedrooms . Spa . Fitness Center",
  },
  {
    id: 79,
    title: "Avoca Beach Hotel Resort",
    ratings: "(18 Reviews)",
    image: imageSrc4,
    description:
      "Family-friendly resort close to Avoca Beach, Avoca Beach, NSW",
    conditions: "3 Bedrooms . Pools . Kids’ Playground",
  },
  {
    id: 80,
    title: "Ocean Beach Resort",
    ratings: "(12 Reviews)",
    image: imageSrc5,
    description: "Family resort with beach access, Umina Beach, NSW",
    conditions: "4 Bedrooms . BBQ Areas . Playgrounds",
  },
  {
    id: 81,
    title: "Forresters Beach Resort",
    ratings: "(10 Reviews)",
    image: imageSrc6,
    description: "Boutique resort near Forresters Beach, Forresters Beach, NSW",
    conditions: "4 Bedrooms . Local Cuisine",
  },
  {
    id: 82,
    title: "Kims Beachside Retreat",
    ratings: "(25 Reviews)",
    image: imageSrc7,
    description: "Romantic beachfront retreat, Toowoon Bay, NSW",
    conditions: "3 Bedrooms . Direct Beach Access",
  },
  {
    id: 83,
    title: "The Entrance Lake House",
    ratings: "(22 Reviews)",
    image: imageSrc8,
    description: "Charming spot near beach and lake, The Entrance, NSW",
    conditions: "4 Bedrooms . Outdoor Pool",
  },
  {
    id: 84,
    title: "Norah Head Lighthouse",
    ratings: "(8 Reviews)",
    image: imageSrc9,
    description: "Unique stay in a historic lighthouse, Norah Head, NSW",
    conditions: "2 Bedrooms . Walking Trails",
  },
  {
    id: 85,
    title: "The Boathouse Hotel Patonga",
    ratings: "(17 Reviews)",
    image: imageSrc10,
    description: "Charming hotel with beach access, Patonga, NSW",
    conditions: "3 Bedrooms . On-Site Restaurant",
  },
  {
    id: 86,
    title: "Toukley Beach Resort",
    ratings: "(14 Reviews)",
    image: imageSrc11,
    description: "Family-friendly resort near local lakes, Toukley, NSW",
    conditions: "4 Bedrooms . BBQ Areas . Outdoor Dining",
  },
  {
    id: 87,
    title: "Pokolbin Estate",
    ratings: "(17 Reviews)",
    image:
      "https://static.wixstatic.com/media/969a0d_7a7c5b271d7b47cfbc1b49695ad52660~mv2.jpg/v1/fill/w_2985,h_1992,al_c,q_90/969a0d_7a7c5b271d7b47cfbc1b49695ad52660~mv2.webp",
    description: "King or queen beds, modern comforts, Pokolbin, NSW",
    conditions: "2 Bedroom. Cozy atmosphere . Rustic charm",
  },
  {
    id: 88,
    title: "Hunter Valley Resort",
    ratings: "(11 Reviews)",
    image:
      "https://cdn5.tropicalsky.co.uk/images/1362x454/hunter-valley-resort-aerial-view-main-image.jpg",
    description: "Wineries and attractions, Hunter Valley, Lovedale, NSW",
    conditions: "2 Bedrooms . Spacious ground and picturesque",
  },
  {
    id: 89,
    title: "Lansdowne Resort and Spa",
    ratings: "(21 Reviews)",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/virginia/Lansdowne_Club_Exterior_1b5398db-5056-a36a-07a7a5bce296d78b.jpg",
    description: "Potomac River View, Lansdowne, Ashburn, VA",
    conditions: "2 Bedrooms .Spa Services and Picturesque walking trails",
  },
  {
    id: 90,
    title: "Bluemont Vineyard",
    ratings: "(21 Reviews)",
    image:
      "https://images.squarespace-cdn.com/content/v1/5bc60849b7c92c6886d6b0ad/1663262788209-UEXXKD5ISQ6GJJWPHZZR/951+Tasting+Room+Arial+.jpg?format=2500w",
    description: "Scenic grounds, Bluemont, Ashburn, VA",
    conditions: "3 Bedrooms . Wine tastings and outdoor seatings",
  },
  {
    id: 91,
    title: "Cottesloe Beach Hotel",
    ratings: "(11 Reviews)",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/58771281.jpg?k=55e8f7cd7cc273417590050f21a3137dbc2978dcb7a76745624a350af2642d11&o=&hp=1",
    description: "Indian Ocean, Art Gallery, Perth, WA",
    conditions: "3 Bedrooms . Spa treatments and outdoor seatings",
  },
];
const FeaturedListings = () => {
  const [isFocused, setIsFocused] = useState({ date1: false, date2: false });
  const [isDateSelected, setIsDateSelected] = useState({
    date1: false,
    date2: false,
  });

  const [notificationVisible, setNotificationVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [filteredListing, setFilteredListing] = useState(listingsData);
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  const filterRef = useRef(null);

  const locationsByCountry = {
    Australia: [
      "Patonga",
      "Pokolbin",
      "Avoca Beach",
      "Toowoon Bay",
      "Norah Head",
      "Toukley, NSW",
      "Hunter Valley",
      "Forresters Beach",
      "Perth, WA",
      "Umina Beach",
      "Lovedale",
      "The Entrance, NSW",
    ],
    US: [
      "Zion, UT",
      "Ashburn, VA",
      "Moclips, WA",
      "Yosemite, CA",
      "Nags Head, NC",
    ],
    Germany: [],
    Sweden: [],
  };

  // Event handlers for focus and blur
  const handleFocus = (dateField) =>
    setIsFocused((prev) => ({ ...prev, [dateField]: true }));

  const handleBlur = (dateField, event) => {
    setIsFocused((prev) => ({ ...prev, [dateField]: false }));
    setIsDateSelected((prev) => ({
      ...prev,
      [dateField]: !!event.target.value,
    }));
  };

  // Handle Filter Popup Toggle
  const handleFilterToggle = () => {
    setIsFilterPopupOpen((prev) => !prev); // Correctly toggle the popup
  };

  // Handle filter selection
  const handleFilterSelection = (location) => {
    const filtered = listingsData.filter((listing) =>
      listing.description.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredListing(filtered);
    setIsFilterPopupOpen(false);
  };

  // Close pop-up when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterPopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <>
      {notificationVisible && (
        <Notification
          message="Attention planners: our website is currently under maintenance, Contact: (206) 414-8973, to book and monitor your reservations!"
          onClose={() => setNotificationVisible(false)}
        />
      )}
      <section className="featured-listings">
        <div className="rowFunctions">
          <button
            onClick={handleFilterToggle} // Use the defined toggle function
            className="filterBtn"
          >
            <CiFilter />
            Show Filters
          </button>

          {isFilterPopupOpen && (
            <div ref={filterRef} className="filter-popup">
              <label htmlFor="countrySelect">Select a Country:</label>
              <select id="countrySelect" onChange={handleCountryChange}>
                <option value="">Select a country</option>
                {Object.keys(locationsByCountry).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              {selectedCountry && (
                <ul>
                  {locationsByCountry[selectedCountry].map((location) => (
                    <li
                      key={location}
                      onClick={() => handleFilterSelection(location)}
                    >
                      {location}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <div className="dateFlex">
            <div className="relativeDiv">
              <label htmlFor="date1">
                <div className={`labelDiv`}>
                  Arrival <MdDateRange />
                </div>
              </label>
              <input
                type="date"
                onFocus={() => handleFocus("date1")}
                onBlur={(e) => handleBlur("date1", e)}
              />
            </div>
            <div className="relativeDiv">
              <label htmlFor="date2">
                <div className={`labelDiv`}>
                  Departure <MdDateRange />
                </div>
              </label>
              <input
                type="date"
                onFocus={() => handleFocus("date2")}
                onBlur={(e) => handleBlur("date2", e)}
              />
            </div>
          </div>

          <div className="relativeDiv">
            <select>
              <option>Flexible Arrival/Departure</option>
              <option>Exact Dates</option>
              <option>1 Day</option>
              <option>2 Days</option>
              <option>3 Days</option>
            </select>
          </div>
          <div className="relativeDiv">
            <button className="searchBtn">Search</button>
          </div>
          <p>{filteredListing.length} results</p>
        </div>

        <div className="container1">
          <div className="listings-grid">
            {filteredListing.map((listing) => (
              <div key={listing.id} className="listing-card">
                <img src={listing.image} alt={listing.title} />
                <div className="listings_items">
                  <div className="saltpalaca">
                    <h3>{listing.title}</h3>
                    <p>{listing.ratings}</p>
                  </div>
                  <p>{listing.description}</p>
                  <p>{listing.conditions}</p>
                  <Link to={`/details/${listing.id}`}>
                    <button>View Details</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedListings;
