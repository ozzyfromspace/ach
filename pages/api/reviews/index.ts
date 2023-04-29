import { NextApiRequest, NextApiResponse } from 'next';
import createNewReview, {
  ContentfulReview,
} from '../../../features/reviews/contentful';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = JSON.parse(req.body) as ContentfulReview | undefined;

    if (!body) {
      res.status(400).json({ msg: 'something went wrong' });
      return;
    }

    await createNewReview({
      name: body.name,
      comment: body.comment,
      subtitle: body.subtitle,
      rating: body.rating,
      timeCreated: body.timeCreated,
    });

    res.status(200).json(body);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: 'something went wrong' });
    return;
  }
}
