import { NextApiRequest, NextApiResponse } from 'next';
import reviewsData from '../../../reviews.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(501).json({ msg: 'route only supports GET requests' });
    return;
  }

  res.json(reviewsData);
}
