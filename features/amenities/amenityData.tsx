import { StaticImageData } from 'next/image';

import { IconType } from 'react-icons';

export interface AmenityData {
  icon: IconType | null;
  label: string;
  id: string;
  src: StaticImageData | string;
}
