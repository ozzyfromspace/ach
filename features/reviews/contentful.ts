import { Environment, createClient } from 'contentful-management';

const LOCALE = 'en-US';
const ENVIRONMENT_ID = 'master';
const CONTENT_TYPE_ID = 'review';
const SPACE_ID = 'whrqes1tuvv5';
const CMA_TOKEN = 'CFPAT--6PeP6kSN3nuYX9vAzU5ab2nxv7B0DckfYjPMUVYFaw';

const REVIEWS_ENTITY_ID = '4jY0VnqpXDbGfQxSviXmop';

async function Connect() {
  let client = createClient({
    accessToken: CMA_TOKEN,
  });

  let space = await client.getSpace(SPACE_ID);
  return await space.getEnvironment(ENVIRONMENT_ID);
}

export type ContentfulReview = {
  name: string;
  subtitle: string;
  comment: string;
  rating: 1 | 2 | 3 | 4 | 5;
  timeCreated: string;
};

type ReviewLink = {
  type: 'Link';
  linkType: 'Entry';
  id: string;
};

async function addReview(
  env: Environment,
  reviewsId: string,
  newReview?: ContentfulReview
) {
  let reviews = await env.getEntry(reviewsId);
  let _newReview = await env.createEntry(CONTENT_TYPE_ID, { fields: {} });
  const reviewId = _newReview.sys.id;

  (_newReview.fields as any).name[LOCALE] =
    newReview?.name || (_newReview.fields as any).name[LOCALE];
  (_newReview.fields as any).subtitle[LOCALE] =
    newReview?.subtitle || (_newReview.fields as any).subtitle[LOCALE];
  (_newReview.fields as any).comment[LOCALE] =
    newReview?.comment || (_newReview.fields as any).comment[LOCALE];
  (_newReview.fields as any).rating[LOCALE] =
    newReview?.rating || (_newReview.fields as any).rating[LOCALE];
  (_newReview.fields as any).timeCreated[LOCALE] =
    newReview?.timeCreated || (_newReview.fields as any).timeCreated[LOCALE];

  await _newReview.update();
  _newReview = await env.getEntry(reviewId);
  // await _newReview.publish(); // commented out because we shouldn't auto-publish reviews

  const reviewLink: ReviewLink = {
    type: 'Link',
    linkType: 'Entry',
    id: _newReview.sys.id,
  };

  (reviews.fields as any).reviews[LOCALE].push({ sys: reviewLink });
  await reviews.update();
  reviews = await env.getEntry(reviewsId);
  await reviews.publish();
}

export default async function createNewReview(newReview?: ContentfulReview) {
  let env = await Connect();
  await addReview(env, REVIEWS_ENTITY_ID, newReview);
}
