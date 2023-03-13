import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import reviewsData from '../../../reviews.json';

interface Review {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  imageUrl: string;
  reviewSource: string;
}

function assertReviews(data: unknown): asserts data is Review {
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
  if (testEl?.reviewSource === undefined)
    throw new Error('review is missing reviewSource field');

  if (typeof testEl?.name !== 'string')
    throw new Error('name field corresponds to incorrect value type');
  if (typeof testEl?.rating !== 'number')
    throw new Error('rating field corresponds to incorrect value type');
  if (typeof testEl?.comment !== 'string')
    throw new Error('comment field corresponds to incorrect value type');
  if (typeof testEl?.imageUrl !== 'string')
    throw new Error('imageUrl field corresponds to incorrect value type');
  if (typeof testEl?.reviewSource !== 'string')
    throw new Error('reviewSource field corresponds to incorrect value type');

  if (testEl?.rating < 1 || testEl?.rating > 5)
    throw new Error('invalid rating value provided');
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(501).json({ msg: 'route only supports POST requests' });
    return;
  }

  const payload = req.body as unknown;

  console.log('payload', payload);

  if (payload === null) {
    res.status(400).json({ msg: 'payload cannot be null' });
    return;
  }

  if (payload instanceof Array) {
    res.status(400).json({ msg: 'payload cannot be of Array type' });
    return;
  }

  if (!(payload instanceof Object)) {
    res.status(400).json({ msg: 'payload must be of JSON type' });
    return;
  }

  if (Object.keys(payload).length === 0) {
    res.status(400).json({ msg: 'no/empty body provided' });
    return;
  }

  try {
    assertReviews(payload);
  } catch (error) {
    res.status(400).json({
      msg:
        (error as any).message ||
        'something went wrong while asserting your reviews payload',
    });
    return;
  }

  fs.readFile('reviews.json', { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(500).json({ msg: 'failed to retrieve reviews.json' });
      return;
    }

    const dataObj = JSON.parse(data) as any[];

    const comma = dataObj.length === 0 ? '' : ',';

    const start = data[0];
    const end = data.slice(1);

    const newStr = `${start}${JSON.stringify(payload)}${comma}${end}`;

    fs.writeFileSync('reviews.json', newStr, { encoding: 'utf8' });

    res.status(201).json(reviewsData);
  });

  res.json(req.body);
}
