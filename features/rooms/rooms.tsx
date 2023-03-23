import { createClient } from 'contentful';
import { Link as ReactScrollLink } from 'react-scroll';
import useStickyState from '../../hooks/useStickState';
import { useFocusedSection } from '../focusedSectionProvider/FocusedSectionProvider';
import Padding from '../padding';
import RoomCard from './RoomCard';
// import roomDataSlice from './roomDataSlice';
import { Picture } from '../picDisplay/PicDisplay';
import { RoomData } from './types';

// 5GB6F320HfdcWby5OpfJ3h -- Room Id King
const entityIds = ['5GB6F320HfdcWby5OpfJ3h'];

interface ContentfulImage {
  fields: {
    file: {
      url: string;
    };
  };
  sys: {
    id: string;
  };
}

export async function getRoomsDataFromContentful() {
  console.log('NEW');
  const client = createClient({
    space: 'whrqes1tuvv5',
    accessToken: 'V_ajOeV3uMRT1T9cWIVOONxCr9Q8q75yA0NF5RgMnTU',
  });
  //
  const roomDataSlice: RoomData[] = [];

  for (const entityId of entityIds) {
    const roomData: RoomData = {
      amenities: [],
      capacity: '',
      mainDescriptionArray: [],
      pictureSlice: [],
      roomName: '',
      roomType: '',
      truncatedDescription: '',
    };

    try {
      const entry = await client.getEntry(entityId);
      const images = (entry.fields as any).images as ContentfulImage[];
      const pictureSlice: Picture[] = images.map((ci) => ({
        url: `https:${ci.fields.file.url}`,
        description: '',
        id: ci.sys.id,
        imageClasses: '',
        priority: false,
      }));

      roomData.roomName = (entry.fields as any).roomName;
      roomData.truncatedDescription = (entry.fields as any).shortDescription;
      roomData.mainDescriptionArray = (entry.fields as any).longDescription;
      roomData.capacity = (entry.fields as any).capacityStatement;
      roomData.pictureSlice = pictureSlice;

      roomDataSlice.push(roomData);
    } catch (e) {
      console.log(e);
    }
  }

  console.log('DONE!', roomDataSlice[0].pictureSlice);

  return roomDataSlice;
}

const Rooms = (props: { roomDataSlice: RoomData[] }) => {
  const { roomDataSlice } = props;
  const { isSticky, ref } = useStickyState();
  const {
    refs: { Rooms: rooms },
  } = useFocusedSection();

  return (
    <div ref={rooms.ref} className="relative z-[1] w-full" id="rooms">
      <div
        ref={ref}
        className={`${
          isSticky
            ? 'bg-[hsl(60,30%,96%)] bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-sm'
            : ''
        } w-full sticky top-[4.95rem] z-10 font-title select-none tracking-wider text-blue-deep text-2xl sm:text-3xl md:text-3xl font-normal mt:text-center flex flex-col justify-center py-5 mt-10 h-20`}
      >
        <Padding className="flex flex-col justify-center items-center">
          <ReactScrollLink
            to="rooms-content"
            spy={true}
            smooth={true}
            offset={-150}
            duration={380}
            className="p-2 rounded-full outline-offset-4"
            href="#rooms"
          >
            <h2>Our Rooms</h2>
          </ReactScrollLink>
        </Padding>
      </div>
      <Padding
        id="rooms-content"
        className="grid grid-cols-[repeat(auto-fit,minmax(min(18rem,calc(100vw-3rem)),1fr))] md:grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-12 py-14 max-w-[100rem] mx-auto"
      >
        {roomDataSlice.map((roomData) => {
          return <RoomCard key={roomData.roomType} roomData={roomData} />;
        })}
      </Padding>
    </div>
  );
};

export default Rooms;
