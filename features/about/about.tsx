import Image from 'next/image';
import beds from '../../public/beds.jpeg';
import Padding from '../padding';

const About = () => {
  return (
    <Padding className="w-full min-h-screen" id="about">
      <h2 className="font-subtitle text-black text-2xl pt-8 border-b-[1px] border-x-gray-medium pb-2">
        About us
      </h2>
      <div className="font-sans text-gray-link tracking-wide font-light mt-8 text-justify">
        <p className="pb-5 md:pb-6">
          The Athens Central Hotel is a hidden gem in the heart of Athens, Ohio.
          Located only a few steps from Court street, we{"'"}re incredibly close
          to all the nightlife, restaurants, and vibrant community.
        </p>
        <div className="relative -z-10 pb-5 md:pb-6">
          <Image
            src={beds}
            alt="two beds from a queen room of the athens central hotel"
            className="rounded-md xl:rounded-lg brightness-[115%] saturate-[1.33]"
          />
        </div>
        <p className="pb-5 md:pb-6">
          Our family-owned hotel is newly built with a modern Greek aesthetic.
          Every room in the hotel was tastefully designed for comfort and
          relaxation. This hotel was a lifetime dream in the making, and we
          really hope you love it.
        </p>
        <p className="">
          From our convenient location near Court Street to the exquisite rooms,
          upgraded showers, complimentary weekend breakfast, and the free onsite
          parking in the heart of Athens, you{"'"}re bound to enjoy your stay
          every time. We can{"'"}t wait to provide you a great stay!
        </p>
      </div>
    </Padding>
  );
};

export default About;
