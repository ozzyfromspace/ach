import { cloudbedsLink } from '../constants';

const Book = () => {
  return (
    <div>
      {/* https://hotels.cloudbeds.com/reservation/iyXSJl#checkin=2023-02-01&checkout=2023-02-02 */}
      {/* <Nav aboutHeaderInView={false} isHome={false} /> */}
      <iframe
        src={cloudbedsLink}
        // className="w-screen h-[calc(100vh-5rem)] mt-20"
        className="w-screen h-screen"
      ></iframe>
    </div>
  );
};

export default Book;
