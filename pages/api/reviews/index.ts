import { NextApiRequest, NextApiResponse } from 'next';
import getReviews from '../../../utils/getReviews';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(501).json({ msg: 'route only supports GET requests' });
    return;
  }

  try {
    const reviewsData = getReviews();

    res.status(200).json(reviewsData);
    return;
  } catch (error) {
    res.status(500).json({
      msg: 'failed to get reviews',
    });
  }
}
