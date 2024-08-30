// src/components/FeaturedListings/FeaturedListings.js

import React, {useState, useRef, useEffect} from 'react';
import './FeaturedListings.css';
import { CiFilter } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";





  const listingsData = [
    {
      id: 1,
      title: 'Salt Palace 485',
      ratings: '(11 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/a019dac0-b6dc-4a75-b3ad-509a35755dac&settings=default',
      description: 'Oceanfront in Moclips, Washington',
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
      description: 'Oceanfront in Ashburn, North Virginia',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 4,
      title: 'Salt Palace 485',
      ratings: '(11 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/a019dac0-b6dc-4a75-b3ad-509a35755dac&settings=default',
      description: 'Semi ocean front in Zion, UT',
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
      title: 'Mayhems Cove ONHC-31',
      ratings: '(1 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/b0cd3dbd-be41-468e-bbf2-4aff651c3bec&settings=default',
      description: 'Southside in Yosemite, California',
      conditions: '8 Bedrooms . 7 Baths . Sleeps 16',
    },
    {
      id: 7,
      title: 'Caribbean Hues 419-A',
      ratings: '(12 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/014ca77e-15b1-4ad3-b0ff-f051ad298dd3&settings=default',
      description: 'Semi ocean front in Moclips, Washington',
      conditions: '8 Bedrooms . 7 Baths . Sleeps 16',
    },
    {
      id: 8,
      title: 'Mellow Yellow 454-A',
      ratings: '(2 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/73233392-1779-4073-817a-3e07ce8b1063&settings=default',
      description: 'Semi ocean front in Nags Head',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 9,
      title: 'Aqua Palooza AW-302',
      ratings: '(0 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/94a3dffc-67f6-4819-bb35-cc81c3fdcdc2&settings=default',
      description: 'Semi ocean front in Nags Head',
      conditions: '8 Bedrooms . 6 Baths . Sleeps 16',
    },
    {
      id: 10,
      title: 'Honey- B 406-A',
      ratings: '(6 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/1002e80e-7bbf-4380-bb63-e268e8b10ede&settings=default',
      description: 'Semi ocean front in Ashburn, North Virginia',
      conditions: '8 Bedrooms . 6 Baths . Sleeps 16',
    },
    {
      id: 11,
      title: 'Turtley Awesome (formerly Pelicans Perch) AW-308',
      ratings: '(0 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/db4b9c2c-50bb-4242-9e80-6d3735637e25&settings=default',
      description: 'Semi ocean front in Nags Head',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 12,
      title: 'Southern Delight 424-A',
      ratings: '(7 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/43f4aef8-d2dc-42c6-b3ca-31fadfe08f59&settings=default',
      description: 'Semi ocean front in Yosemite, California',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 13,
      title: 'Emerald Wave VNH-6',
      ratings: '(15 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/26c795d6-f5b6-42c7-ad5c-037204e92734&settings=default',
      description: 'Oceanfront in Nags Head',
      conditions: '8 Bedrooms . 5 Baths . Sleeps 16',
    },
    {
      id: 14,
      title: 'The Sandlot 437',
      ratings: '(15 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/95187bec-3be0-466c-bb1c-2534f8531aae&settings=default',
      description: 'Oceanfront in Yosemite, California',
      conditions: '8 Bedrooms . 5 Baths . Sleeps 16',
    },
    {
      id: 15,
      title: 'Beach Music EE-100',
      ratings: '(12 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/4f880cc4-f5ad-4ad6-9e56-14727b7ac839&settings=default',
      description: 'Semi ocean front in Nags Head',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 16,
      title: 'Beach Music EE-100',
      ratings: '(12 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/b0cd3dbd-be41-468e-bbf2-4aff651c3bec&settings=default',
      description: 'Semi ocean front in Zion, UT',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 17,
      title: 'Salt Palace 485',
      ratings: '(11 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/a019dac0-b6dc-4a75-b3ad-509a35755dac&settings=default',
      description: 'Oceanfront in Ashburn, North Virginia',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 18,
      title: 'Sandcastle 485-A',
      ratings: '(8 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/1871f90a-7704-48c4-bf6b-984137eb640f&settings=default',
      description: 'Oceanfront in Nags Head',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 19,
      title: 'Miles of Treasure 434-A',
      ratings: '(8 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/17cb2c0d-0ba6-4f08-b461-e4f866163318&settings=default',
      description: 'Oceanfront in Zion, UT',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 20,
      title: 'Devilbliss 463-A',
      ratings: '(8 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/25e1bf2a-ac78-4451-9d48-d70981648fbc&settings=default',
      description: 'Soundside in Moclips, Washington',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 21,
      title: 'Quay-C3 QUAY-C3',
      ratings: '(8 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/e4d4046c-54a2-4901-852c-4e8c04b72d23&settings=default',
      description: 'Soundside in Moclips, Washington',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 22,
      title: '4 Paws Inn 411-B',
      ratings: '(18 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/27fbc180-2fdc-4a9d-8ab1-a93de8c2f7de&settings=default',
      description: 'Oceanside in Nags Head',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 23,
      title: 'Sea Rise VNH-101A',
      ratings: '(10 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/4aefb925-1b86-4723-8b87-468e93810e6d&settings=default',
      description: 'Soundside in Ashburn, North Virginia',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 24,
      title: 'The Purple Whale 49',
      ratings: '(1 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/9799c270-d1c7-4295-99c9-f10043ae9047&settings=default',
      description: 'Semi ocean in Ashburn, North Virginia',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 25,
      title: '180 Degrees Of Ocean OCE-103',
      ratings: '(13 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/f9c17339-26c2-4b1e-b547-fbfceb88b31f&settings=default',
      description: 'Oceanfront in Yosemite, Carlifornia',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 26,
      title: 'Salt Palace 485',
      ratings: '(11 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/a019dac0-b6dc-4a75-b3ad-509a35755dac&settings=default',
      description: 'Oceanfront in Moclips, Washington',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 27,
      title: 'Sandcastle 485-A',
      ratings: '(8 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/1871f90a-7704-48c4-bf6b-984137eb640f&settings=default',
      description: 'Oceanfront in Nags Head',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 28,
      title: 'Dont Worry Beach Happy 479',
      ratings: '(18 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/6995cbf8-c0de-4337-b42f-41b4476320de&settings=default',
      description: 'Oceanfront in Ashburn, North Virginia',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 29,
      title: 'Salt Palace 485',
      ratings: '(11 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/a019dac0-b6dc-4a75-b3ad-509a35755dac&settings=default',
      description: 'Semi ocean front in Zion, UT',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 30,
      title: 'Southern Comfort AW-304',
      ratings: '(1 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/f50c7133-3f4d-4d1e-b7f6-e1bea8436d86&settings=default',
      description: 'Semi ocean front in Nags Head',
      conditions: '8 Bedrooms . 7 Baths . Sleeps 16',
    },
    {
      id: 31,
      title: 'Mayhems Cove ONHC-31',
      ratings: '(1 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/b0cd3dbd-be41-468e-bbf2-4aff651c3bec&settings=default',
      description: 'Southside in Yosemite, California',
      conditions: '8 Bedrooms . 7 Baths . Sleeps 16',
    },
    {
      id: 32,
      title: 'Caribbean Hues 419-A',
      ratings: '(12 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/014ca77e-15b1-4ad3-b0ff-f051ad298dd3&settings=default',
      description: 'Semi ocean front in Moclips, Washington',
      conditions: '8 Bedrooms . 7 Baths . Sleeps 16',
    },
    {
      id:33,
      title: 'Mellow Yellow 454-A',
      ratings: '(2 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/73233392-1779-4073-817a-3e07ce8b1063&settings=default',
      description: 'Semi ocean front in Zion, UT',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 34,
      title: 'Aqua Palooza AW-302',
      ratings: '(0 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/94a3dffc-67f6-4819-bb35-cc81c3fdcdc2&settings=default',
      description: 'Semi ocean front in Nags Head',
      conditions: '8 Bedrooms . 6 Baths . Sleeps 16',
    },
    {
      id: 35,
      title: 'Honey- B 406-A',
      ratings: '(6 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/1002e80e-7bbf-4380-bb63-e268e8b10ede&settings=default',
      description: 'Semi ocean front in Ashburn, North Virginia',
      conditions: '14 Bedrooms . 9 Baths . Sleeps 16',
    },
    {
      id: 36,
      title: 'Turtley Awesome (formerly Pelicans Perch) AW-308',
      ratings: '(0 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/db4b9c2c-50bb-4242-9e80-6d3735637e25&settings=default',
      description: 'Semi ocean front in Nags Head',
      conditions: '6 Bedrooms . 8 Baths . Sleeps 9',
    },
    {
      id: 37,
      title: 'Southern Delight 424-A',
      ratings: '(7 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/43f4aef8-d2dc-42c6-b3ca-31fadfe08f59&settings=default',
      description: 'Semi ocean front in Yosemite, California',
      conditions: '8 Bedrooms . 10 Baths . Sleeps 12',
    },
    {
      id: 38,
      title: 'Emerald Wave VNH-6',
      ratings: '(15 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/26c795d6-f5b6-42c7-ad5c-037204e92734&settings=default',
      description: 'Oceanfront in Yosemite, Carlifornia',
      conditions: '8 Bedrooms . 5 Baths . Sleeps 16',
    },
    {
      id: 39,
      title: 'The Sandlot 437',
      ratings: '(15 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/95187bec-3be0-466c-bb1c-2534f8531aae&settings=default',
      description: 'Oceanfront in Yosemite, California',
      conditions: '10 Bedrooms . 9 Baths . Sleeps 16',
    },
    {
      id: 40,
      title: 'Beach Music EE-100',
      ratings: '(12 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/4f880cc4-f5ad-4ad6-9e56-14727b7ac839&settings=default',
      description: 'Semi ocean front in Nags Head',
      conditions: '8 Bedrooms . 9 Baths . Sleeps 16',
    },
    {
      id: 41,
      title: 'Beach Music EE-100',
      ratings: '(12 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/b0cd3dbd-be41-468e-bbf2-4aff651c3bec&settings=default',
      description: 'Semi ocean front in Zion, UT',
      conditions: '14 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 42,
      title: 'Salt Palace 485',
      ratings: '(11 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/a019dac0-b6dc-4a75-b3ad-509a35755dac&settings=default',
      description: 'Oceanfront in Yosemite, Carlifornia',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 43,
      title: 'Sandcastle 485-A',
      ratings: '(3 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/1871f90a-7704-48c4-bf6b-984137eb640f&settings=default',
      description: 'Oceanfront in Nags Head',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 44,
      title: 'Miles of Treasure 434-A',
      ratings: '(8 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/17cb2c0d-0ba6-4f08-b461-e4f866163318&settings=default',
      description: 'Oceanfront in Zion, UT',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 45,
      title: 'Devilbliss 463-A',
      ratings: '(9 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/25e1bf2a-ac78-4451-9d48-d70981648fbc&settings=default',
      description: 'Soundside in Ashburn, North Virginia',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 46,
      title: 'Quay-C3 QUAY-C3',
      ratings: '(8 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/e4d4046c-54a2-4901-852c-4e8c04b72d23&settings=default',
      description: 'Soundside in Moclips, Washington',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 47,
      title: '4 Paws Inn 411-B',
      ratings: '(18 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/27fbc180-2fdc-4a9d-8ab1-a93de8c2f7de&settings=default',
      description: 'Oceanside in Nags Head',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 48,
      title: 'Sea Rise VNH-101A',
      ratings: '(10 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/4aefb925-1b86-4723-8b87-468e93810e6d&settings=default',
      description: 'Soundside in Ashburn, North Virginia',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 49,
      title: 'The Purple Whale 49',
      ratings: '(1 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/9799c270-d1c7-4295-99c9-f10043ae9047&settings=default',
      description: 'Semi ocean in Ashburn, North Virginia',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 50,
      title: '180 Degrees Of Ocean OCE-103',
      ratings: '(13 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/f9c17339-26c2-4b1e-b547-fbfceb88b31f&settings=default',
      description: 'Oceanfront in Yosemite, Carlifornia',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 51,
      title: 'Salt Palace 485',
      ratings: '(11 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/a019dac0-b6dc-4a75-b3ad-509a35755dac&settings=default',
      description: 'Oceanfront in Moclips, Washington',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 52,
      title: 'Sandcastle 485-A',
      ratings: '(8 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/1871f90a-7704-48c4-bf6b-984137eb640f&settings=default',
      description: 'Oceanfront in Nags Head',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 53,
      title: 'Dont Worry Beach Happy 479',
      ratings: '(18 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/6995cbf8-c0de-4337-b42f-41b4476320de&settings=default',
      description: 'Oceanfront in Ashburn, North Virginia',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 54,
      title: 'Salt Palace 485',
      ratings: '(11 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/a019dac0-b6dc-4a75-b3ad-509a35755dac&settings=default',
      description: 'Semi ocean front in Zion, UT',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 55,
      title: 'Southern Comfort AW-304',
      ratings: '(1 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/f50c7133-3f4d-4d1e-b7f6-e1bea8436d86&settings=default',
      description: 'Semi ocean front in Moclips, Washington',
      conditions: '8 Bedrooms . 7 Baths . Sleeps 16',
    },
    {
      id: 56,
      title: 'Mayhems Cove ONHC-31',
      ratings: '(1 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/b0cd3dbd-be41-468e-bbf2-4aff651c3bec&settings=default',
      description: 'Southside in Yosemite, California',
      conditions: '8 Bedrooms . 7 Baths . Sleeps 16',
    },
    {
      id: 57,
      title: 'Caribbean Hues 419-A',
      ratings: '(12 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/014ca77e-15b1-4ad3-b0ff-f051ad298dd3&settings=default',
      description: 'Semi ocean front in Moclips, Washington',
      conditions: '8 Bedrooms . 7 Baths . Sleeps 16',
    },
    {
      id: 58,
      title: 'Mellow Yellow 454-A',
      ratings: '(2 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/73233392-1779-4073-817a-3e07ce8b1063&settings=default',
      description: 'Semi ocean front in Nags Head',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 59,
      title: 'Aqua Palooza AW-302',
      ratings: '(0 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/94a3dffc-67f6-4819-bb35-cc81c3fdcdc2&settings=default',
      description: 'Semi ocean front in Nags Head',
      conditions: '8 Bedrooms . 6 Baths . Sleeps 16',
    },
    {
      id: 60,
      title: 'Honey- B 406-A',
      ratings: '(6 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/1002e80e-7bbf-4380-bb63-e268e8b10ede&settings=default',
      description: 'Semi ocean front in Ashburn, North Virginia',
      conditions: '8 Bedrooms . 6 Baths . Sleeps 16',
    },
    {
      id: 61,
      title: 'Turtley Awesome (formerly Pelicans Perch) AW-308',
      ratings: '(0 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/db4b9c2c-50bb-4242-9e80-6d3735637e25&settings=default',
      description: 'Semi ocean front in Zion, UT',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 62,
      title: 'Southern Delight 424-A',
      ratings: '(7 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/43f4aef8-d2dc-42c6-b3ca-31fadfe08f59&settings=default',
      description: 'Semi ocean front in Yosemite, California',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 63,
      title: 'Emerald Wave VNH-6',
      ratings: '(15 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/26c795d6-f5b6-42c7-ad5c-037204e92734&settings=default',
      description: 'Oceanfront in Nags Head',
      conditions: '8 Bedrooms . 5 Baths . Sleeps 16',
    },
    {
      id: 64,
      title: 'The Sandlot 437',
      ratings: '(15 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/95187bec-3be0-466c-bb1c-2534f8531aae&settings=default',
      description: 'Oceanfront in Yosemite, California',
      conditions: '8 Bedrooms . 5 Baths . Sleeps 16',
    },
    {
      id: 65,
      title: 'Beach Music EE-100',
      ratings: '(12 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/4f880cc4-f5ad-4ad6-9e56-14727b7ac839&settings=default',
      description: 'Semi ocean front in Nags Head',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 66,
      title: 'Beach Music EE-100',
      ratings: '(12 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/b0cd3dbd-be41-468e-bbf2-4aff651c3bec&settings=default',
      description: 'Semi ocean front in Zion, UT',
      conditions: '8 Bedrooms . 8 Baths . Sleeps 16',
    },
    {
      id: 67,
      title: 'Salt Palace 485',
      ratings: '(11 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/a019dac0-b6dc-4a75-b3ad-509a35755dac&settings=default',
      description: 'Oceanfront in Yosemite, California',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 68,
      title: 'Sandcastle 485-A',
      ratings: '(8 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/1871f90a-7704-48c4-bf6b-984137eb640f&settings=default',
      description: 'Oceanfront in Nags Head',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 69,
      title: 'Miles of Treasure 434-A',
      ratings: '(8 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/17cb2c0d-0ba6-4f08-b461-e4f866163318&settings=default',
      description: 'Oceanfront in Zion, UT',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 70,
      title: 'Devilbliss 463-A',
      ratings: '(8 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/25e1bf2a-ac78-4451-9d48-d70981648fbc&settings=default',
      description: 'Soundside in Nags Head',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 71,
      title: 'Quay-C3 QUAY-C3',
      ratings: '(8 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/e4d4046c-54a2-4901-852c-4e8c04b72d23&settings=default',
      description: 'Soundside in Moclips, Washington',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 72,
      title: '4 Paws Inn 411-B',
      ratings: '(18 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/27fbc180-2fdc-4a9d-8ab1-a93de8c2f7de&settings=default',
      description: 'Oceanside in Nags Head',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 73,
      title: 'Sea Rise VNH-101A',
      ratings: '(10 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/4aefb925-1b86-4723-8b87-468e93810e6d&settings=default',
      description: 'Soundside in Zion, UT',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 74,
      title: 'The Purple Whale 49',
      ratings: '(1 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/9799c270-d1c7-4295-99c9-f10043ae9047&settings=default',
      description: 'Semi ocean in Ashburn, North Virginia',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
    {
      id: 75,
      title: '180 Degrees Of Ocean OCE-103',
      ratings: '(13 Reviews)',
      image: 'https://images.rezfusion.com/?optimize=true&rotate=true&quality=70&width=420&source=https%3A//img.trackhs.com/x/https%3A//track-pm.s3.amazonaws.com/sun/image/f9c17339-26c2-4b1e-b547-fbfceb88b31f&settings=default',
      description: 'Oceanfront in Yosemite, Carlifornia',
      conditions: '10 Bedrooms . 8 Baths . Sleeps 20',
    },
  ];

 
  const FeaturedListings = () => {
    const [isFocused, setIsFocused] = useState({ date1: false, date2: false });
    const [isDateSelected, setIsDateSelected] = useState({ date1: false, date2: false });
    const [filteredListing, setFilteredListing] = useState(listingsData);
    const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
    const filterRef = useRef(null);
  
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
      setIsFilterPopupOpen(!isFilterPopupOpen);
    };
  
    // Handle filter selection
    const handleFilterSelection = (location) => {
      const filtered = listingsData.filter(listing =>
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
    }, [filterRef]);
  
    return (
      <section className="featured-listings">
        <div className='rowFunctions'>
          <button onClick={handleFilterToggle} className='filterBtn'>
            <CiFilter />
            Show Filters
          </button>
  
          {isFilterPopupOpen && (
            <div ref={filterRef} className="filter-popup">
              <ul>
                <li onClick={() => handleFilterSelection('Yosemite')}>Yosemite</li>
                <li onClick={() => handleFilterSelection('Zion, UT')}>Zion, UT</li>
                <li onClick={() => handleFilterSelection('Ashburn')}>Ashburn</li>
                <li onClick={() => handleFilterSelection('Moclips')}>Moclips</li>
                <li onClick={() => handleFilterSelection('Nags Head')}>Nags Head</li>
              </ul>
            </div>
          )}
  
          <div className='dateFlex'>
            <div className='relativeDiv'>
              <label htmlFor='date1'><div className={`labelDiv ${
                isFocused.date1 || isDateSelected.date1 ? 'hidden' : ''
              }`}> Arrival <MdDateRange /></div></label>
              <input type="date" onFocus={() => handleFocus('date1')}
                onBlur={(e) => handleBlur('date1', e)} />
            </div>
            <div className='relativeDiv'>
              <label htmlFor='date2'><div className={`labelDiv ${
                isFocused.date2 || isDateSelected.date2 ? 'hidden' : ''
              }`}> Departure <MdDateRange /></div></label>
              <input type="date" onFocus={() => handleFocus('date2')}
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
                1 Day
              </option>
              <option>
                2 Days
              </option>
              <option>
                3 Days
              </option>
            </select>
          </div>
          <div className='relativeDiv'><button className='searchBtn'>
            Search
          </button>
          </div>
          <p>{filteredListing.length} results</p>
        </div>
  
        <div className="container1">
          <div className="listings-grid">
            {filteredListing.map((listing) => (
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