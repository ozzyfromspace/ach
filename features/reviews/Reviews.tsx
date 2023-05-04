import { createClient } from 'contentful';
import { useState } from 'react';
import { Link as ReactScrollLink } from 'react-scroll';
import { Review } from '../../utils/assertReview';
import Padding from '../padding';
import { ContentfulImage } from '../rooms/rooms';
import PostReview from './PostReview';
import ReviewCard from './ReviewCard';

const ReviewsSection = (props: { reviews: Review[]; showImage?: boolean }) => {
  const { reviews, showImage } = props;

  const [openForm, setOpenForm] = useState(() => false);

  const togglePostReviewForm = () => {
    setOpenForm((v) => !v);
  };

  const [localReviews, setLocalReviews] = useState<Review[]>(() => []);
  const allReviews = [...reviews, ...localReviews].sort((a, b) => {
    return (
      new Date(b.timeCreated).getMilliseconds() -
      new Date(a.timeCreated).getMilliseconds()
    );
  });

  return (
    <div className="relative z-[1] w-full min-h-fit pb-8" id="reviews">
      <div className="w-full">
        <div className="w-full sticky top-[4.95rem] z-10 font-title select-none tracking-wider text-blue-deep text-2xl sm:text-3xl md:text-3xl font-normal mt:text-center flex flex-col justify-center pb-5 mt-2 h-20">
          <Padding className="flex flex-col items-center justify-center">
            <ReactScrollLink
              to="reviews-content"
              spy={true}
              smooth={true}
              offset={-150}
              duration={380}
              className="p-2 bg-[hsla(0,0%,100%,60%)] backdrop-blur-sm rounded-full outline-offset-4"
              href="/#reviews"
            >
              <h2>Reviews</h2>
            </ReactScrollLink>
          </Padding>
        </div>
        <div className="pb-6 mx-auto my-4 w-fit">
          <button onClick={togglePostReviewForm}>Add a review</button>
        </div>
        <div className="w-full p-4 mx-auto rounded-md bg-blue-deep bg-opacity-10 backdrop-blur-md">
          <Padding
            id="reviews-content"
            className="mt-1 mx-auto flex flex-col justify-start gap-4 max-h-[45vh] h-min overflow-x-auto w-full max-w-[min(25rem,calc(100vw))]"
          >
            {allReviews.map((review) => (
              <ReviewCard key={review.id} {...review} showImage={!!showImage} />
            ))}
            {!allReviews.length && <p>No reviews. Add the first one.</p>}
          </Padding>
        </div>
        {openForm && (
          <PostReview
            open={openForm}
            onClose={togglePostReviewForm}
            setLocalReviews={setLocalReviews}
          />
        )}
      </div>
    </div>
  );
};

export default ReviewsSection;

interface ReviewEntry {
  fields: {
    name: string;
    subtitle: string;
    comment: string;
    id: string;
    rating: 1 | 2 | 3 | 4 | 5;
    reviewSource: string;
    reviewUrl?: string;
    timeCreated: string;
    image?: ContentfulImage;
  };
  sys: {
    id: string;
  };
}

interface Entry {
  sys: {
    id: string;
  };
  fields: {
    reviews: ReviewEntry[];
  };
}

const entityId = '4jY0VnqpXDbGfQxSviXmop';

export async function getReviewsFromContentful() {
  const client = createClient({
    space: 'whrqes1tuvv5',
    accessToken: 'V_ajOeV3uMRT1T9cWIVOONxCr9Q8q75yA0NF5RgMnTU',
  });

  const reviews: Review[] = [];

  try {
    const entry = (await client.getEntry(entityId)) as Entry;
    const reviewEntries = entry.fields.reviews || [];

    for (const reviewEntry of reviewEntries) {
      const review: Review = {
        name: '',
        subtitle: '',
        comment: '',
        id: '',
        imageUrl: '',
        rating: 5,
        reviewUrl: '',
        timeCreated: '',
      };

      if (reviewEntry?.fields?.name === undefined) continue;

      try {
        review.name = reviewEntry.fields.name;
        review.subtitle = '';
        review.comment = reviewEntry.fields.comment;
        review.rating = reviewEntry.fields.rating;
        review.id = reviewEntry.sys.id;
        review.timeCreated = reviewEntry.fields.timeCreated;

        reviews.push(review);
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    console.log(e);
  }

  return reviews;
}
