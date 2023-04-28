import Image from 'next/image';
import { useState } from 'react';
import { Review } from '../../utils/assertReview';
import ResizablePanel from '../ResizablePanel/ResizablePanel';

const imageLength = 42;
const maxLength = 180;

interface Props extends Review {
  showImage: boolean;
}

const formatter = Intl.DateTimeFormat(undefined);

export const ReviewCard = (props: Props) => {
  const {
    name,
    comment,
    imageUrl,
    rating,
    reviewUrl,
    subtitle,
    showImage,
    timeCreated,
  } = props;
  const [open, setOpen] = useState(() => false);
  const trunc = truncation(comment, open ? -1 : maxLength);

  return (
    <main className="relative max-w-[34rem] min-w-[24rem] p-6 bg-white rounded-md shadow-sm h-min">
      <header className="flex flex-row items-center justify-between">
        <div className="flex flex-row flex-wrap items-center gap-3">
          {showImage && (
            <div className={`relative w-[${imageLength}] h-${imageLength}`}>
              <Image
                src={imageUrl || `https://picsum.photos/${imageLength}`}
                // src={`https://picsum.photos/${imageLength}`}
                alt=""
                width={imageLength}
                height={imageLength}
                className="flex-1 rounded-full aspect-square"
              />
            </div>
          )}
          <section>
            <p className="text-[hsl(228,16%,16%)] tracking-wide font-black">
              {name}
            </p>
            {/* <Link href={reviewUrl} className="text-sm text-gray-medium"> */}
            {/* 4 months ago on Google */}
            {/* {subtitle} */}
            {/* </Link> */}
            <p className="text-sm text-gray-medium">
              {formatter.format(new Date(timeCreated))}
            </p>
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
