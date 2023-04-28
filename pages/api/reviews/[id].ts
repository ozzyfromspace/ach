import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import getReviews from '../../../utils/getReviews';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    res.status(501).json({ msg: 'delete review' });
    return;
  }

  const { id } = req.query;

  if (typeof id !== 'string') {
    res.status(400).json({ msg: 'request needs event id' });
    return;
  }

  // const jsonData = JSON.parse(reviewsData as unknown as string);
  // console.log(reviewsData[0], id);
  try {
    const reviewsArray = getReviews();

    if (reviewsArray.length === 0) {
      res.status(400).json({ msg: 'no reviews to delete' });
      return;
    }

    const deletedReviews = reviewsArray.filter((review) => review.id !== id);

    if (deletedReviews.length === reviewsArray.length) {
      res.status(404).json({ msg: 'could not find review' });
      return;
    }

    fs.writeFileSync('reviews.json', JSON.stringify(deletedReviews), {
      encoding: 'utf8',
    });

    res.status(200).json({ msg: 'review deleted' });
    return;
  } catch (error) {
    res.status(400).json({ msg: 'could not parse reviews' });
    return;
  }

  // reviewsData.push({
  //   id: '69eb',
  //   name: 'Margo',
  //   comment: 'noice',
  //   imageUrl: '',
  //   rating: 4,
  //   reviewSource: 'space',
  // });

  // fs.writeFileSync('reviews.json', newStr, { encoding: 'utf8' });
  res.json({ msg: 'hi' });
}
