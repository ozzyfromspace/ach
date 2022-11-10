import { FaCouch, FaShower, FaWifi } from 'react-icons/fa';

export enum Amenity {
  LivingRoom = 'Living Room',
  Wifi = 'High-Speed WiFi',
  Shower = 'Upgraded Shower',
}

interface Props {
  amenity: Amenity;
}

const AmenityIcon = (props: Props) => {
  const { amenity } = props;

  if (amenity === Amenity.LivingRoom)
    return (
      <div>
        <FaCouch width="48px" />
      </div>
    );

  if (amenity === Amenity.Shower)
    return (
      <div className="pl-1">
        <FaShower />
      </div>
    );

  if (amenity === Amenity.Wifi)
    return (
      <div>
        <FaWifi />
      </div>
    );

  return null;
};

export default AmenityIcon;
