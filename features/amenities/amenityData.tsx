import { IconType } from 'react-icons';
import {
  FaBacon,
  FaDumbbell,
  FaStar,
  FaTv,
  FaWalking,
  FaWheelchair,
  FaWifi,
} from 'react-icons/fa';

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
    id: 2,
    icon: FaBacon,
    label: 'Weekend breakfast',
  },
  {
    id: 3,
    icon: FaStar,
    label: 'Complimentary drinks',
  },
  {
    id: 4,
    icon: FaTv,
    label: 'HBO',
  },
  {
    id: 5,
    icon: FaWifi,
    label: 'High-speed Internet',
  },
  {
    id: 6,
    icon: FaDumbbell,
    label: 'Fitness Center',
  },
  {
    id: 7,
    icon: FaStar,
    label: 'Laundry',
  },
  {
    id: 8,
    icon: FaWheelchair,
    label: 'ADA Accessible',
  },
];

export default amenityData;
