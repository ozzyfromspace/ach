import { cloudbedsLink } from '../constants';
import SEOHead from '../features/seohead';

const Book = () => {
  return (
    <div>
      {/* https://hotels.cloudbeds.com/reservation/iyXSJl#checkin=2023-02-01&checkout=2023-02-02 */}
      {/* <Nav aboutHeaderInView={false} isHome={false} /> */}
      <SEOHead
        author="Oswald Chisala"
        description="The Athens Central Hotel is a Greek-inspired boutique hotel in the heart of Athens, Ohio"
        title="Athens Central Hotel | Book A Room"
      />
      <iframe
        src={cloudbedsLink}
        // className="w-screen h-[calc(100vh-5rem)] mt-20"
        className="w-screen h-screen"
      ></iframe>
    </div>
  );
};

export default Book;
