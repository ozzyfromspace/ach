import { createClient } from 'contentful';
import { Link as ReactScrollLink } from 'react-scroll';
import Padding from '../padding';
import Amenity from './Amenity';
import { AmenityData } from './amenityData';

const Amenities = (props: { grayscale: boolean; data: AmenityData[] }) => {
  const { data } = props;

  return (
    <div className="relative z-0" id="amenities">
      <div className="w-full sticky top-[4.95rem] z-10 font-title select-none tracking-wider text-blue-deep text-2xl sm:text-3xl md:text-3xl font-normal mt:text-center flex flex-col justify-center py-5 mt-10 h-20">
        <Padding className="flex flex-col items-center justify-center">
          <ReactScrollLink
            to="amenities-content"
            spy={true}
            smooth={true}
            offset={-150}
            duration={380}
            className="p-2 rounded-full outline-offset-4"
            href="/#amenities"
          >
            <h2>Amenities</h2>
          </ReactScrollLink>
        </Padding>
      </div>
      <Padding
        id="amenities-content"
        className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4 pt-8 pb-16"
      >
        {data.map((amenity) => {
          return (
            <Amenity
              key={amenity.id}
              icon={amenity.icon}
              src={amenity.src}
              label={amenity.label}
              grayscale={props.grayscale}
            />
          );
        })}
      </Padding>
    </div>
  );
};

export default Amenities;

const entityIds = [
  '6AGt7GUaaNIUMjI8QGbE3H',
  '32nuNy0XCudZx3EnHbKQ9Q',
  '2HDjSmQ4VgfD9HBcmmZDsv',
  '7E7iQLfMw4Lzr2838lOu4c',
  '4m0y4R69oLCnmDNvUHYv9Z',
  'D4JMNCZ3wF2Oy5mRN5eJy',
  '4bS205fG2yImgtsWhNXG92',
  'TleMEHn8vszwkUBkvvZ8f',
  'rWIORgnoS3qqWBD8pH10o',
  '271TLP1PKecfoZo1gxmtQk',
  '1zXvsMvz2kYMRCrVgmb48T',
  '57KuL15UTnJWZocoh8v8Ir',
];

interface ContentfulAmenityData {
  sys: { id: string };
  fields: { name: string; image: { fields: { file: { url: string } } } };
}

export async function getAmenitiesDataFromContentful() {
  const client = createClient({
    space: 'whrqes1tuvv5',
    accessToken: 'V_ajOeV3uMRT1T9cWIVOONxCr9Q8q75yA0NF5RgMnTU',
  });
  //
  const amenitiesData: AmenityData[] = [];

  for (const entityId of entityIds) {
    const roomData: AmenityData = {
      icon: null,
      id: '',
      label: '',
      src: '',
    };

    try {
      const entry = (await client.getEntry(entityId)) as ContentfulAmenityData;
      roomData.icon = null;
      roomData.id = entry.sys.id;
      roomData.label = entry.fields.name;
      roomData.src = `https:${entry.fields.image.fields.file.url}`;
      amenitiesData.push(roomData);
    } catch (e) {
      console.log(e);
    }
  }

  return amenitiesData;
}
