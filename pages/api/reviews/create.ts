import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { assertIncomingReview } from '../../../utils/assertReview';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(501).json({ msg: 'route only supports POST requests' });
    return;
  }

  const _payload = req.body as unknown;

  const payload =
    typeof _payload === 'string' ? JSON.parse(_payload) : _payload;

  console.log(
    'studying payload',
    payload,
    !(payload instanceof Object),
    typeof payload
  );

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
    assertIncomingReview(payload);
  } catch (error) {
    res.status(400).json({
      msg:
        (error as any).message ||
        'something went wrong while asserting your reviews payload',
    });
    return;
  }

  if (!payload.name) {
    res.status(400).json({ msg: 'name is required, was not provided' });
    return;
  }
  if (!payload.comment) {
    res.status(400).json({ msg: 'comment is required, was not provided' });
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
    payload.id = uuidv4();

    const newStr = `${start}${JSON.stringify(payload)}${comma}${end}`;

    fs.writeFileSync('reviews.json', newStr, { encoding: 'utf8' });

    res.status(201).json({ msg: 'review created!' });
  });
}
