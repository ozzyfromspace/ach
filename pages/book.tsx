import { cloudbedsLink } from '../constants';
import SEOHead from '../features/seohead';

const Book = () => {
  return (
    <div>
      <SEOHead
        author="Oswald Chisala"
        description="The Athens Central Hotel is a Greek-inspired boutique hotel in the heart of Athens, Ohio"
        title="Athens Central Hotel | Book A Room"
      />
      <iframe src={cloudbedsLink} className="w-screen h-screen"></iframe>
    </div>
  );
};

export default Book;
