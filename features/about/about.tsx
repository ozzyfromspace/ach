import Image from 'next/image';
import beds from '../../public/beds.jpeg';
import Padding from '../padding';

const About = () => {
  return (
    <Padding>
      <section className="w-full bg-purple-300" id="about">
        <h2 className="text-[1.4rem] sm:text-2xl md:text-3xl lg:text-4xl font-medium">
          About us
        </h2>
        <div className="">
          <div>
            <p>
              The Athens Central Hotel is a hidden gem in the heart of Athens,
              Ohio.
            </p>
            <p>
              Located only a few steps from Court street, we{"'"}re incredibly
              close to all the nightlife, restaurants, and vibrant community.
              Our hotel is newly built with a modern European aesthetic. Every
              room in the hotel is designed uniquely with our guests in mind. We
              make sure to go above and beyond to give our guests the best
              experience and make sure they have a wonderful stay.
            </p>
            <p>
              From our convenient location to the exquisite rooms, upgraded
              showers, complimentary weekend breakfast, and free onsite parking,
              you{"'"}ll enjoy your stay every time.
            </p>
          </div>
          <div>
            <Image
              src={beds}
              alt="two beds from a queen room of the athens central hotel"
            />
          </div>
        </div>
      </section>
    </Padding>
  );
};

export default About;
