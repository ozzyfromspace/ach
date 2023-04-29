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
  const allReviews = [...reviews, ...localReviews];

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
        <div className="p-4 mx-auto rounded-md w-fit bg-blue-deep bg-opacity-10 backdrop-blur-md">
          <Padding
            id="reviews-content"
            className="max-w-[50vw] md:max-w-[55vw] lg:max-w-[70vw] xl:max-w-[78vw] mt-1 flex flex-row justify-center flex-wrap gap-3 max-h-[45vh] h-min overflow-x-clip overflow-y-auto"
          >
            {allReviews.map((review) => (
              <ReviewCard key={review.id} {...review} showImage={!!showImage} />
            ))}
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

const createTimeString = (
  rtf: Intl.RelativeTimeFormat,
  timestamp: string,
  source: string
) => {
  const _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;

  const TO_MONTH_CONVERSION = 365 / 12;
  const TO_WEEK_CONVERSION = 365 / 52;
  const TO_DAY_CONVERSION = 365;

  const now = new Date();
  const comparisonDate = new Date(timestamp);

  const utc1 = Date.UTC(
    comparisonDate.getFullYear(),
    comparisonDate.getMonth(),
    comparisonDate.getDate()
  );
  const utc2 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());

  let periodName: Intl.RelativeTimeFormatUnit = 'year';
  let period = (utc2 - utc1) / _MS_PER_YEAR;
  const base = period;

  if (period < 1) {
    periodName = 'month';
    period = base * TO_MONTH_CONVERSION;
  }

  if (period < 1) {
    periodName = 'week';
    period = base * TO_WEEK_CONVERSION;
  }

  if (period < 1) {
    periodName = 'day';
    period = base * TO_DAY_CONVERSION;
  }

  if (period < 1) {
    return 'today';
  }

  const rtfString = rtf.format(Math.round(-1 * Math.abs(period)), periodName);
  return `${rtfString} ${source ? 'on ' : ''}${source || 'at the Front Desk'}`;
};

export async function getReviewsFromContentful() {
  const rtf = new Intl.RelativeTimeFormat(undefined, { style: 'long' });

  const client = createClient({
    space: 'whrqes1tuvv5',
    accessToken: 'V_ajOeV3uMRT1T9cWIVOONxCr9Q8q75yA0NF5RgMnTU',
  });
  //
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

      const subtitle = createTimeString(
        rtf,
        reviewEntry.fields?.timeCreated || '',
        ''
      );

      try {
        review.name = reviewEntry.fields.name;
        review.subtitle = subtitle;
        review.comment = reviewEntry.fields.comment;
        review.imageUrl = !!reviewEntry.fields.image
          ? `https:${reviewEntry.fields.image?.fields.file.url}`
          : `https://unsplash.it/640?image=${
              Math.floor(Math.random() * 39) || 1
            }`;
        review.rating = reviewEntry.fields.rating;
        review.reviewUrl = reviewEntry.fields.reviewUrl?.startsWith('http')
          ? reviewEntry.fields.reviewUrl
          : '';
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
