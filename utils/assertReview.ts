export interface Review {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  imageUrl: string;
  reviewUrl: string;
  subtitle: string;
  timeCreated: string;
  priority: number | null;
}

export default function assertReview(data: unknown): asserts data is Review {
  if (data instanceof Array) throw new Error('data cannot be an array');

  const testEl = data as Review;

  if (testEl?.id === undefined) throw new Error('review is missing name field');
  if (testEl?.name === undefined)
    throw new Error('review is missing name field');
  if (testEl?.rating === undefined)
    throw new Error('review is missing rating field');
  if (testEl?.comment === undefined)
    throw new Error('review is missing comment field');
  if (testEl?.imageUrl === undefined)
    throw new Error('review is missing imageUrl field');
  if (testEl?.reviewUrl === undefined)
    throw new Error('review is missing reviewUrl field');
  if (testEl?.subtitle === undefined)
    throw new Error('review is missing subtitle field');

  if (typeof testEl?.name !== 'string')
    throw new Error('name field corresponds to incorrect value type');
  if (typeof testEl?.rating !== 'number')
    throw new Error('rating field corresponds to incorrect value type');
  if (typeof testEl?.comment !== 'string')
    throw new Error('comment field corresponds to incorrect value type');
  if (typeof testEl?.imageUrl !== 'string')
    throw new Error('imageUrl field corresponds to incorrect value type');
  if (typeof testEl?.reviewUrl !== 'string')
    throw new Error('reviewUrl field corresponds to incorrect value type');
  if (typeof testEl?.subtitle !== 'string')
    throw new Error('subtitle field corresponds to incorrect value type');

  if (testEl?.rating < 1 || testEl?.rating > 5)
    throw new Error('invalid rating value provided');
}

export function assertIncomingReview(data: unknown): asserts data is Review {
  if (data instanceof Array) throw new Error('data cannot be an array');

  const testEl = data as Review;

  if (testEl?.name === undefined)
    throw new Error('review is missing name field');
  if (testEl?.rating === undefined)
    throw new Error('review is missing rating field');
  if (testEl?.comment === undefined)
    throw new Error('review is missing comment field');
  if (testEl?.imageUrl === undefined)
    throw new Error('review is missing imageUrl field');
  if (testEl?.reviewUrl === undefined)
    throw new Error('review is missing reviewUrl field');
  if (testEl?.subtitle === undefined)
    throw new Error('review is missing subtitle field');

  if (typeof testEl?.name !== 'string')
    throw new Error('name field corresponds to incorrect value type');
  if (typeof testEl?.rating !== 'number')
    throw new Error('rating field corresponds to incorrect value type');
  if (typeof testEl?.comment !== 'string')
    throw new Error('comment field corresponds to incorrect value type');
  if (typeof testEl?.imageUrl !== 'string')
    throw new Error('imageUrl field corresponds to incorrect value type');
  if (typeof testEl?.reviewUrl !== 'string')
    throw new Error('reviewUrl field corresponds to incorrect value type');
  if (typeof testEl?.subtitle !== 'string')
    throw new Error('subtitle field corresponds to incorrect value type');

  if (testEl?.rating < 1 || testEl?.rating > 5)
    throw new Error('invalid rating value provided');
  if (!testEl?.timeCreated) throw new Error('timeCreated string is required');
  new Date(testEl.timeCreated).toISOString();
}

export function assertReviews(obj: unknown): asserts obj is Review[] {
  if (!(obj instanceof Array)) {
    throw new Error('input is not an instance of Array type');
  }

  for (const el of obj) {
    assertReview(el);
  }
}
