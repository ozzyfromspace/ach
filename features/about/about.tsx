// import beds from '../../public/beds.jpeg';
// import { useInView } from 'framer-motion';
import { EMAIL_DATA } from '../../constants';
import { LinkCallButton } from '../button';
import Padding from '../padding';

interface AboutProps {
  aboutRef: (node?: Element | null | undefined) => void;
}

const About = (props: AboutProps) => {
  const { aboutRef } = props;

  return (
    <Padding
      className="relative z-0 w-full pb-16 gradient-blue bg-opacity-90 text-white overflow-hidden"
      _py="pt-3"
      paddingRef={aboutRef}
    >
      <div className="w-fit mx-auto pt-20" id="contact">
        <div className="w-fit border-b-2 border-white mb-12">
          <h2 className="font-title tracking-wider text-2xl sm:text-3xl md:text-3xl font-normal mb-2">
            Get in touch
          </h2>
        </div>
        <div className="flex flex-wrap justify-between items-start gap-12 mt:gap-24 w-fit">
          <Address />
          <div className="w-full text-sm">
            <h3 className="mb-4 text-xl font-title font-normal">
              Our Front Desk is Open 24/7
            </h3>
            <div className="w-full grid grid-cols-[auto_1fr] justify-items-start text-[hsla(0,0%,100%,75%)] font-extralight">
              <div className="w-full flex justify-between gap-1 pr-4">
                <p className="font-title font-normal">Phone Number</p>
                <p>:</p>
              </div>
              <LinkCallButton darkMode size="small" underline={false} />
              <div className="w-full flex justify-between gap-1 pr-4">
                <p className="font-title font-normal">Email Address</p>
                <p>:</p>
              </div>
              <LinkCallButton
                buttonData={EMAIL_DATA}
                darkMode
                size="small"
                underline={false}
              />
            </div>
          </div>
        </div>
        {true && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.0494872241065!2d-82.09823380000003!3d39.33246430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8848735b1021f905%3A0x400f2aa6ca675df3!2sAthens%20Central%20Hotel!5e0!3m2!1sen!2sus!4v1672186189896!5m2!1sen!2sus"
            className="mt-16 border-[1px] p-[1px] border-white w-full max-w-3xl aspect-square rounded-md shadow-sm"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </Padding>
  );
};

export const Address = () => {
  return (
    <div className="flex flex-col justify-center items-start text-[hsla(0,0%,100%,75%)] font-extralight">
      <h3 className="text-white mb-4 font-title font-normal text-xl">
        Athens Central Hotel
      </h3>
      <a
        href="https://goo.gl/maps/rqUJ6pViG9GRt3rn9"
        target="_blank"
        rel="noreferrer"
        className="text-sm"
      >
        <p className="mb-1">88 East State Street</p>
        <p className="mb-1">Athens, OH 45701</p>
        <p>United States</p>
      </a>
    </div>
  );
};

export default About;
