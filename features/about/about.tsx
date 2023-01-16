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
      className="select-none relative z-0 w-full pb-16 gradient-blue bg-opacity-90 text-white overflow-hidden"
      _py="pt-3"
      paddingRef={aboutRef}
    >
      <div className="w-fit mx-auto pt-20" id="contact">
        <div className="flex flex-wrap justify-between items-start gap-6 mt:gap-9 md:gap-11 lg:gap-14 w-fit mb-12 mt-2">
          <div className="mx-auto space-y-11">
            <div className="w-fit border-white">
              <h2 className="font-title select-none tracking-wider text-2xl sm:text-3xl md:text-3xl font-normal">
                Get in touch
              </h2>
            </div>
            <Address />
            <div className="w-full text-sm">
              <h3 className="mb-4 text-xl font-title font-normal">
                Our Front Desk is Open 24/7
              </h3>
              <div className="w-full grid grid-cols-[auto_1fr] justify-items-end text-[hsla(0,0%,100%,75%)] font-extralight">
                <div className="w-full flex justify-between items-center gap-1 pr-4">
                  <p className="font-title font-normal text-[1.25rem]">
                    Phone Number
                  </p>
                  <p>:</p>
                </div>
                <LinkCallButton darkMode size="large" underline={false} />
                <div className="w-full flex justify-between items-center gap-1 pr-4">
                  <p className="font-title font-normal text-[1.25rem]">
                    Email Address
                  </p>
                  <p>:</p>
                </div>
                <LinkCallButton
                  buttonData={EMAIL_DATA}
                  darkMode
                  size="large"
                  underline={false}
                />
              </div>
            </div>
            <iframe
              className="select-none"
              aria-label="a booking.com rating point card"
              referrerPolicy="no-referrer"
              src="https://badge.hotelstatic.com/?position=inline&amp;size=120&amp;clickable=false&amp;url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fus%2Fathens-central.html"
            ></iframe>
          </div>
          <iframe
            aria-label="A google map showing the Athens Central Hotel"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.0494872241065!2d-82.09823380000003!3d39.33246430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8848735b1021f905%3A0x400f2aa6ca675df3!2sAthens%20Central%20Hotel!5e0!3m2!1sen!2sus!4v1672186189896!5m2!1sen!2sus"
            className="select-none mx-auto border-[1px] p-[1px] border-white w-full mt:w-[min(89vh,89vw)] max-w-lg aspect-square rounded-md shadow-sm"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
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
        <p className="font-title text-[1.25rem] mb-1 tracking-wide">
          88 East State Street
        </p>
        <p className="font-title text-[1.25rem] mb-1 tracking-wide">
          Athens, OH 45701
        </p>
        <p className="font-title text-[1.08rem] tracking-wide">United States</p>
      </a>
    </div>
  );
};

export default About;
