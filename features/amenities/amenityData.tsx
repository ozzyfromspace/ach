import { StaticImageData } from 'next/image';

import breakfast from '/public/ach-images/breakfast-1.jpg';
import courtStreet from '/public/ach-images/court-street-1.jpg';
import petFriendly from '/public/ach-images/dog.jpg';
import fridge from '/public/ach-images/fridge.jpg';
import frontdesk from '/public/ach-images/frontdesk.jpeg';
import gym from '/public/ach-images/gym.jpg';
import internet from '/public/ach-images/internet.jpeg';
import ou from '/public/ach-images/ou.jpg';
import parking from '/public/ach-images/parking.jpg';
import tv from '/public/ach-images/tv.jpg';
import showers from '/public/demetrios-photos/shower.jpg';
import ada from '/public/hotel_images/handicap/handicap-2.jpg';

import { IconType } from 'react-icons';
import {
  FaBell,
  FaBreadSlice,
  FaDog,
  FaDumbbell,
  FaParking,
  FaSchool,
  FaShower,
  FaTv,
  FaWalking,
  FaWheelchair,
  FaWifi,
} from 'react-icons/fa';
import Fridge from '../../icons/Fridge';

export interface AmenityData {
  icon: IconType;
  label: string;
  id: number;
  src: StaticImageData;
}

const amenityData: AmenityData[] = [
  {
    id: 1,
    icon: FaWalking,
    src: courtStreet,
    label: 'Short walk to Court Street',
  },
  {
    id: 11,
    icon: FaShower,
    src: showers,
    label: 'Waterfall showers',
  },
  {
    id: 3,
    icon: Fridge as IconType,
    src: fridge,
    label: 'Complimentary stocked fridge',
  },
  {
    id: 4,
    icon: FaTv,
    src: tv,
    label: '65" 4K TV',
  },
  {
    id: 10,
    icon: FaParking,
    src: parking,
    label: 'Free on-site parking',
  },
  {
    id: 2,
    icon: FaBreadSlice,
    src: breakfast,
    label: 'Weekend breakfast',
  },
  {
    id: 15,
    icon: FaBell,
    src: frontdesk,
    label: '24/7 Front Desk',
  },
  {
    id: 8,
    icon: FaWheelchair,
    src: ada,
    label: 'ADA Accessible',
  },
  {
    id: 16,
    icon: FaDog,
    src: petFriendly,
    label: 'Pet Friendly',
  },
  {
    id: 5,
    icon: FaWifi,
    src: internet,
    label: 'High-speed Internet',
  },
  {
    id: 6,
    icon: FaDumbbell,
    src: gym,
    label: 'Fitness Center',
  },
  // {
  //   id: 12,
  //   icon: FaGraduationCap,
  //   src: ou,
  //   label: 'OU Alumni Discount',
  // },
  {
    id: 9,
    icon: FaSchool,
    src: ou,
    label: 'Walking distance to OU',
  },
];

export default amenityData;
