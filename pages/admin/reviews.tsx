// import reviewsData from '../../reviews.json';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Padding from '../../features/padding';
import ReviewCard from '../../features/reviews/ReviewCard';
import { Review } from '../../utils/assertReview';

const placeholderDescription =
  'From the moment you walk into this gem of a boutique hotel luxury, style and first class customer service surround you. The rooms are spacious and luxurious with small touches that make a world of difference like the memory foam shower mats and spacious king size beds. The staff are courteous and will go out of their way to make sure you are happy and comfortable. The furnishings are tasteful, modern and elegant and the floor to ceiling windows allow you views of the local area. The super sized flat screen TV and the comfy leather chairs assure even the pickiest travelers will find comfort and entertainment. Not to mention the small touches like the champagne welcome when you check in. A new hotel in Athens, I have no doubt this secret will get out soon! I highly recommend this hotel to anyone for a night or longer!';

type ReviewKey = keyof Review;

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState<Review[]>(() => []);
  useEffect(() => {
    fetch('/api/reviews')
      .then<Review[]>((r) => r.json())
      .then((d) => setReviewsData(() => d));
  }, []);

  const updateDeletion = (deletedReviewId: string) => {
    const copy = JSON.parse(JSON.stringify(reviewsData)) as Review[];
    setReviewsData(() =>
      copy.filter((review) => review.id !== deletedReviewId)
    );
  };

  const [review, setReview] = useState<Review>(() => ({
    name: '',
    comment: '',
    id: '',
    imageUrl: '',
    rating: 4,
    reviewSource: 'Google',
    subtitle: '4 months ago on Google',
  }));

  const handleReviewUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const elName = e.target.id.split('-')[1] as ReviewKey | undefined;

    if (!elName) return;

    const value =
      elName === 'rating' ? parseInt(e.target.value) : e.target.value;
    setReview((r) => ({ ...r, [elName]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('submitting...', review);

    fetch('/api/reviews/create', {
      body: JSON.stringify(review),
      method: 'POST',
    })
      .then((r) => {
        if (r.status !== 201) {
          console.log('failed to submit', r);
          return r.json();
        }

        return r.json();
      })
      .then((d) => {
        console.log(d);
        fetch('/api/reviews')
          .then<Review[]>((r) => r.json())
          .then((d) => setReviewsData(() => d))
          .catch(console.log);
      })
      .catch(console.log);
  };

  return (
    <Padding>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-full max-w-[560px] mx-auto"
      >
        <h2 className="text-3xl text-center pt-12 pb-10 w-full">New review</h2>
        <div className="flex flex-col flex-wrap gap-3 p-4 justify-start items-start w-full">
          <div className="flex flex-row flex-wrap gap-2 p-2 justify-center items-center w-full">
            <label htmlFor="new-name">Name</label>
            <input
              type="text"
              id="new-name"
              onChange={handleReviewUpdate}
              value={review.name}
              className="p-2 rounded-md w-full"
              placeholder={'Julianna Roberts'}
            />
          </div>
          <div className="flex flex-row flex-wrap gap-2 p-2 justify-center items-center w-full">
            <label htmlFor="new-rating">Rating</label>
            <input
              type="number"
              id="new-rating"
              onChange={handleReviewUpdate}
              value={review.rating}
              className="p-2 rounded-md w-full"
              min={1}
              max={5}
              placeholder={placeholderDescription}
            />
          </div>
          <div className="flex flex-row flex-wrap gap-2 p-2 justify-center items-center w-full">
            <label htmlFor="new-image-url">Image URL</label>
            <input
              type="text"
              id="new-imageUrl"
              onChange={handleReviewUpdate}
              value={review.imageUrl}
              className="p-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-row flex-wrap gap-2 p-2 justify-center items-center w-full">
            <label htmlFor="new-reviewSource">Source</label>
            <input
              type="text"
              id="new-reviewSource"
              onChange={handleReviewUpdate}
              value={review.reviewSource}
              className="p-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-row flex-wrap gap-2 p-2 justify-center items-center w-full">
            <label htmlFor="new-reviewSource">Subtitle</label>
            <input
              type="text"
              id="new-subtitle"
              onChange={handleReviewUpdate}
              value={review.subtitle}
              className="p-2 rounded-md w-full"
              placeholder="4 months ago on Google"
            />
          </div>
          <div className="flex flex-col flex-wrap gap-2 p-2 justify-center items-center mx-auto mt-6 w-full flex-1">
            <label htmlFor="new-comment">Comment</label>
            <textarea
              id="new-comment"
              onChange={(e) => {
                setReview((s) => ({ ...s, comment: e.target.value }));
              }}
              value={review.comment}
              className="p-2 rounded-md h-full w-full"
              placeholder=""
              rows={7}
            />
          </div>
        </div>
        <button className="bg-[hsl(238,84%,54%)] text-white font-extrabold py-2 px-4 rounded-md shadow-sm mt-6 mb-8">
          Create Review
        </button>
      </form>

      <article>
        <h2 className="text-xl text-center pt-12 pb-10">All Reviews</h2>
        <div className="flex flex-wrap justify-between gap-3">
          {reviewsData.map((review) => (
            <ReviewCard
              key={review.id}
              {...review}
              isAdmin={true}
              updateDeletion={updateDeletion}
            />
          ))}
        </div>
      </article>
    </Padding>
  );
};

export default Reviews;
