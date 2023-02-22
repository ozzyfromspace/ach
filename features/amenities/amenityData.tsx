import { IconType } from 'react-icons';
import {
  FaBell,
  FaBreadSlice,
  FaCoffee,
  FaDog,
  FaDumbbell,
  FaGraduationCap,
  FaParking,
  FaSchool,
  FaShower,
  FaSmokingBan,
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
}

const amenityData: AmenityData[] = [
  {
    id: 1,
    icon: FaWalking,
    label: '1 min walk to Court St.',
  },
  {
    id: 11,
    icon: FaShower,
    label: 'Waterfall showers',
  },
  {
    id: 2,
    icon: FaBreadSlice,
    label: 'Weekend breakfast',
  },
  {
    id: 3,
    icon: Fridge,
    label: 'Mini-fridge with complimentary drinks',
  },
  {
    id: 4,
    icon: FaTv,
    label: 'HBO + Cinemax',
  },
  {
    id: 5,
    icon: FaWifi,
    label: 'High-speed Wifi',
  },
  {
    id: 6,
    icon: FaDumbbell,
    label: 'Fitness Center',
  },
  {
    id: 8,
    icon: FaWheelchair,
    label: 'ADA Accessible',
  },
  {
    id: 13,
    icon: FaSmokingBan,
    label: 'Smoke-free',
  },
  {
    id: 10,
    icon: FaParking,
    label: 'Free on-site parking',
  },
  {
    id: 12,
    icon: FaGraduationCap,
    label: 'OU Alumni Discount',
  },
  {
    id: 14,
    icon: FaCoffee,
    label: 'Microwave + Coffee maker',
  },
  {
    id: 9,
    icon: FaSchool,
    label: 'Walking distance to OU',
  },
  {
    id: 15,
    icon: FaBell,
    label: '24/7 Service',
  },
  {
    id: 16,
    icon: FaDog,
    label: 'Pet Friendly',
  },
];

export default amenityData;
