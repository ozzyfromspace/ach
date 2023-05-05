import { ErrorBoundary } from 'react-error-boundary';
import { Link as ReactScrollLink } from 'react-scroll';
import { EMAIL_DATA } from '../../constants';
import { LinkCallButton } from '../button';
import StarDiv from '../stardiv/StarDiv';

const About = () => {
  return (
    <div className="relative z-0 w-full pt-10 text-white select-none gradient-blue bg-opacity-90">
      <StickyHeader label="Contact Us" />
      <div className="mx-auto w-fit" id="contact">
        <div
          id="contact-content"
          className={`pt-12 flex flex-col mt:flex-row flex-wrap justify-between items-start gap-6 mt:gap-9 md:gap-11 lg:gap-14 w-fit mx-auto px-6`}
        >
          <div className="relative mx-auto space-y-11">
            <Address />
            <div className="w-full text-sm">
              <h3 className="mb-4 text-xl font-normal font-title">
                Our Front Desk is Open 24/7
              </h3>
              <div className="w-full max-w-full grid grid-cols-[auto_1fr] justify-items-start text-[hsla(0,0%,100%,75%)] font-extralight">
                <div className="flex flex-wrap items-center justify-between w-full gap-1 pr-4">
                  <label
                    className="font-title font-light text-[1.25rem]"
                    htmlFor="phone-number"
                  >
                    Phone Number
                  </label>
                  <p>:</p>
                </div>
                <LinkCallButton
                  darkMode
                  size="large"
                  underline={false}
                  id="phone-number"
                />
                <div className="flex flex-wrap items-center justify-between w-full gap-1 pr-4">
                  <label
                    className="font-title font-light text-[1.25rem]"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <p>:</p>
                </div>
                <LinkCallButton
                  buttonData={EMAIL_DATA}
                  darkMode
                  size="large"
                  underline={false}
                  id="email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 max-w-[18rem]">
              <div className="flex flex-col w-full min-[300px]:gap-2 min-[300px]:flex-row justify-start items-center min-[300px]:justify-between">
                <div className="-ml-10 min-[300px]:-ml-[25px] -mt-5 min-[300px]:mt-0 min-[300px]:ml-0 max-w-[18rem] mr-4">
                  <div className="overflow-hidden w-[130px] aspect-square">
                    <iframe
                      className="scale-75 select-none"
                      aria-label="a booking.com rating point card"
                      referrerPolicy="no-referrer"
                      src="https://badge.hotelstatic.com/?position=inline&amp;clickable=true&amp;url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fus%2Fathens-central.html"
                    ></iframe>
                  </div>
                </div>
                <div className="flex flex-col gap-3 max-w-[8rem] w-fit min-[300px]:mr-7">
                  <StarDiv color="white">
                    <p className="text-center font-semibold text-blue-deep text-sm max-w-[8rem]">
                      The only 4 star hotel in Athens
                    </p>
                  </StarDiv>
                </div>
              </div>
            </div>
          </div>
          <ErrorBoundary fallback={<p>failed to load google map</p>}>
            <iframe
              aria-label="A google map showing the Athens Central Hotel"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.0494872241065!2d-82.09823380000003!3d39.33246430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8848735b1021f905%3A0x400f2aa6ca675df3!2sAthens%20Central%20Hotel!5e0!3m2!1sen!2sus!4v1672186189896!5m2!1sen!2sus"
              className="border-[1px] p-[1px] select-none mx-auto w-full mt:w-[min(89vh,89vw)] max-w-full md:max-w-lg border-white aspect-square rounded-md shadow-sm min-[300px]:mb-28"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export const Address = () => {
  return (
    <div className="select-all flex flex-col justify-center items-start text-[hsla(0,0%,100%,75%)] font-extralight">
      <h3 className="mb-4 text-xl font-normal text-white font-title">
        Athens Central Hotel
      </h3>
      <a
        href="https://goo.gl/maps/rqUJ6pViG9GRt3rn9"
        target="_blank"
        rel="noreferrer"
        className="p-2 -ml-2 text-sm rounded-md"
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

interface StickyHeaderProps {
  label: string;
}

const StickyHeader = (props: StickyHeaderProps) => {
  const { label } = props;

  return (
    <div className="flex items-center justify-center w-full">
      <ReactScrollLink
        to="contact-content"
        spy={true}
        smooth={true}
        offset={-150}
        className="px-6 rounded-full outline-offset-4 pt-4 w-screen sticky top-[4.95rem] z-10 font-title select-none tracking-wider text-white text-3xl md:text-[1.9rem] font-normal mt:text-center flex flex-col justify-center"
        duration={380}
        href="/#contact"
      >
        <h2>{label}</h2>
      </ReactScrollLink>
    </div>
  );
};
