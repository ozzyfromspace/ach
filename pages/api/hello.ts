// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import jsonData from '../../reviews.json';

// Data which will write in a file.
// const data = '\nLearning how to write in a file 2.';
const x = '{"name": "Tamara"}';

// Write data in 'Output.txt' .
// fs.appendFile('Output.txt', data, (err) => {
// fs.appendFile('reviews.json', data, (err) => {
//   // In case of a error throw err.
//   if (err) throw err;
// });

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  fs.readFile('demo.json', { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const dataJS = JSON.parse(data) as any[];

    console.log('starting data', data);

    const comma = dataJS.length === 0 ? '' : ',';
    const start = data[0];
    const end = data.slice(1);
    const newStr = start + x + comma + end;
    console.log('new string:', newStr, start, end);

    fs.writeFileSync('demo.json', newStr, { encoding: 'utf8' });
  });

  res.status(200).json(jsonData);
}
