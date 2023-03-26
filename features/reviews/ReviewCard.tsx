import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Review } from '../../utils/assertReview';
import ResizablePanel from '../ResizablePanel/ResizablePanel';

const imageLength = 42;
const maxLength = 180;

interface Props extends Review {
  showImage: boolean;
}

export const ReviewCard = (props: Props) => {
  const { name, comment, imageUrl, rating, reviewUrl, subtitle, showImage } =
    props;
  const [open, setOpen] = useState(() => false);
  const trunc = truncation(comment, open ? -1 : maxLength);

  return (
    <main className="relative max-w-[34rem] min-w-[24rem] p-6 bg-white rounded-md shadow-sm h-min">
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center flex-wrap gap-3">
          {showImage && (
            <div className={`relative w-[${imageLength}] h-${imageLength}`}>
              <Image
                src={imageUrl || `https://picsum.photos/${imageLength}`}
                // src={`https://picsum.photos/${imageLength}`}
                alt=""
                width={imageLength}
                height={imageLength}
                className="rounded-full flex-1 aspect-square"
              />
            </div>
          )}
          <section>
            <p className="text-[hsl(228,16%,16%)] tracking-wide font-black">
              {name}
            </p>
            <Link href={reviewUrl} className="text-gray-medium text-sm">
              {/* 4 months ago on Google */}
              {subtitle}
            </Link>
          </section>
        </div>
        <div className="flex flex-row justify-center items-center">
          <span className="font-black text-4xl">{rating}</span>
          <span className="font-black text-2xl">{'/'}</span>
          <span className="font-black text-4xl">5</span>
        </div>
      </header>
      <ResizablePanel>
        <div className="mt-6 w-full">
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
                className="text-blue-deep text-sm"
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
