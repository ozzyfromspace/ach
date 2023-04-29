import fs from 'fs';
import { assertReviews, Review } from './assertReview';

export default function getReviews(): Review[] {
  const buffer = fs.readFileSync('reviews.json', { encoding: 'utf8' });

  const reviewsArray = JSON.parse(buffer);
  assertReviews(reviewsArray);

  return reviewsArray;
}
