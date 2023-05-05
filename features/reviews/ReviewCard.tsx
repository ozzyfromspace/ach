import Image from 'next/image';
import { useState } from 'react';
import { Review } from '../../utils/assertReview';
import ResizablePanel from '../ResizablePanel/ResizablePanel';

const imageLength = 42;
const maxLength = 180;

interface Props extends Review {
  showImage: boolean;
}

export const ReviewCard = (props: Props) => {
  const { name, comment, imageUrl, rating, showImage, timeCreated } = props;
  const [open, setOpen] = useState(() => false);
  const trunc = truncation(comment, open ? -1 : maxLength);

  const date = new Date(timeCreated).getDate();
  const month = new Date(timeCreated).getMonth() + 1;
  const year = new Date(timeCreated).getFullYear();
  const usDate = `${(month + '').padStart(2, '0')}/${(date + '').padStart(
    2,
    '0'
  )}/${year}`;

  return (
    <main className="flex-1 p-4 bg-white rounded-md shadow-sm">
      {/* <main className="relative w-full md:min-w-[24rem] p-4 bg-white rounded-md shadow-sm"> */}
      <header className="flex w-full flex-row items-start justify-between">
        <div className="flex flex-row flex-wrap items-center gap-3">
          {showImage && (
            <div className={`relative w-[${imageLength}] h-${imageLength}`}>
              <Image
                src={imageUrl || `https://picsum.photos/${imageLength}`}
                alt=""
                width={imageLength}
                height={imageLength}
                className="flex-1 rounded-full aspect-square"
              />
            </div>
          )}
          <section className="mr-4">
            <p className="text-[hsl(228,16%,16%)] tracking-wide font-black">
              {name}
            </p>
            <p className="text-sm text-gray-medium">{usDate}</p>
          </section>
        </div>
        <div className="flex flex-row items-center justify-center">
          <span className="text-4xl font-black">{rating}</span>
          <span className="text-2xl font-black">{'/'}</span>
          <span className="text-4xl font-black">5</span>
        </div>
      </header>
      <ResizablePanel>
        <div className="w-full mt-6">
          <p className="text-sm text-gray-dark scale-100 w-[100%]">
            {trunc.isTruncated ? `${trunc.output}...` : comment}
          </p>
          <div
            className={`w-full mt-3 flex items-center ${
              comment.length > maxLength ? 'justify-between' : 'justify-end'
            }`}
          >
            {comment.length > maxLength && (
              <button
                onClick={() => setOpen((v) => !v)}
                className="text-sm text-blue-deep"
              >
                {open ? 'Show Less' : 'Read More'}
              </button>
            )}
          </div>
        </div>
      </ResizablePanel>
    </main>
  );
};

export default ReviewCard;

interface Truncation {
  output: string;
  isTruncated: boolean;
}

function truncation(str: string, length: number): Truncation {
  const _length = parseInt(`${length}`) || -1;
  const truncatedStr = _length < 0 ? str : str.slice(0, _length);

  return {
    output: truncatedStr,
    isTruncated: truncatedStr !== str,
  };
}
