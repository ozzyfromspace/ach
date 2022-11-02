import Image from 'next/image';
import beds from '../../public/beds.jpeg';
import Padding from '../padding';

const About = () => {
  return (
    <Padding>
      <section className="w-full" id="about">
        <h2 className="text-[1.6rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] font-medium text-center">
          About us
        </h2>
        <div className="md:flex md:flex-row md:flex-wrap md:justify-center md:items-end xl:flex-row xl:items-center">
          <div className="mt-8 text-justify md:min-w-[30%] md:max-w-[50%] lg:max-w-screen-lg xl:max-w-screen-lg md:pr-8 lg:pr-0 md:flex md:flex-col md:justify-center lg:flex-row lg:flex-wrap">
            <p className="pb-3 md:pb-6 lg:w-1/3 xl:max-w-[33%] lg:pr-8 lg:pb-0">
              <span className="font-semibold">
                The Athens Central Hotel is a hidden gem in the heart of Athens,
                Ohio.
              </span>{' '}
              Located only a few steps from Court street, we{"'"}re incredibly
              close to all the nightlife, restaurants, and vibrant community.
            </p>
            <p className="pb-3 md:pb-6 lg:w-1/3 xl:max-w-[33%] lg:pr-8 lg:pb-0">
              Our hotel is newly built with a modern European aesthetic. Every
              room in the hotel is designed uniquely with our guests in mind. We
              make sure to go above and beyond to give our guests the best
              experience and make sure they have a wonderful stay.
            </p>
            <p className="lg:w-1/3 xl:max-w-[34%]">
              From our convenient location to the exquisite rooms, upgraded
              showers, complimentary weekend breakfast, and free onsite parking,
              you{"'"}ll enjoy your stay every time.
            </p>
          </div>
          <div className="relative mt-9 md:min-w-[10rem] md:w-[50%] lg:w-[65%] xl:max-w-screen-xl xl:mx-auto">
            <Image
              src={beds}
              alt="two beds from a queen room of the athens central hotel"
              className="rounded-md xl:rounded-lg brightness-[115%] saturate-[1.33]"
            />
          </div>
        </div>
      </section>
    </Padding>
  );
};

export default About;
