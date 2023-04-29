import { Dialog } from '@headlessui/react';
import { Dispatch, SetStateAction, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { Review } from '../../utils/assertReview';
import Button from '../button';

type ReviewNumber = 1 | 2 | 3 | 4 | 5;
const starIndex: ReviewNumber[] = [1, 2, 3, 4, 5];

type Inputs = {
  name: string;
  comment: string;
  stars: ReviewNumber;
};

interface PostFormProps {
  open: boolean;
  onClose: () => void;
  setLocalReviews: Dispatch<SetStateAction<Review[]>>;
}

const PostForm = (props: PostFormProps) => {
  const { open, onClose, setLocalReviews } = props;
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const [selectedStarIndex, setSelectedStarIndex] = useState<ReviewNumber>(
    () => 1
  );
  const [isLoading, setIsLoading] = useState(() => false);

  const onSubmit: SubmitHandler<Inputs> = async ({ name, comment, stars }) => {
    if (name === '' || comment === '') return;

    setIsLoading(() => true);

    try {
      // await createNewReview({
      //   name,
      //   comment,
      //   subtitle: '',
      //   rating: stars,
      //   timeCreated: new Date().toISOString(),
      // });
      const res = await fetch('/reviews', {
        method: 'POST',
        body: JSON.stringify({
          name,
          comment,
          subtitle: '',
          rating: stars,
          timeCreated: new Date().toISOString(),
        }),
      });

      if (res.status !== 200) {
        throw new Error('something went wrong');
      }
    } catch (e) {
      setIsLoading(() => false);
      console.log(e);
      onClose();
      return;
    }

    const newReview: Review = {
      name,
      comment,
      id: uuidv4(),
      imageUrl: '',
      rating: stars,
      reviewUrl: '',
      subtitle: '',
      timeCreated: new Date().toISOString(),
    };

    setLocalReviews((rs) => [...rs, newReview]);

    setTimeout(() => {
      onClose();
    }, 20);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Dialog.Panel className="fixed z-[100] inset-0 flex justify-center items-center">
        <div
          className="absolute inset-0 -z-50 bg-[hsla(0,0%,8%,89%)] cursor-pointer"
          onClick={onClose}
        />
        <div className="max-w-md w-4/5 max-h-[94vh] bg-white rounded-md shadow-md overflow-hidden p-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative flex flex-col items-center justify-center p-2 overflow-y-auto"
          >
            <h3 className="w-full pb-6 text-lg font-black text-start">
              Add a Review
            </h3>
            <div className="flex flex-col w-full gap-2 pb-4">
              <label htmlFor="name" className="w-fit">
                Name
              </label>
              <input id="name" type="text" {...register('name')} />
            </div>
            <div className="flex flex-col w-full gap-2 pb-4">
              <label htmlFor="comment" className="w-fit">
                Comment
              </label>
              <textarea
                id="comment"
                {...register('comment')}
                className="h-32 resize-none overscroll-y-auto"
              />
            </div>
            <div className="flex flex-col w-full gap-2 pb-4">
              <label htmlFor="rating" className="w-fit">
                Rating
              </label>
              <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                {starIndex.map((i) => {
                  const handleSelection = () => {
                    setSelectedStarIndex(() => i);

                    setValue('stars', i);
                  };
                  return (
                    <ReviewStar
                      key={i}
                      onClick={handleSelection}
                      selected={i <= selectedStarIndex}
                    />
                  );
                })}
              </div>
            </div>
            <Button label={isLoading ? 'Loading' : 'Submit'} type="submit" />
          </form>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

interface PostReviewProps {
  open: boolean;
  onClose: () => void;
  setLocalReviews: Dispatch<SetStateAction<Review[]>>;
}

const PostReview = (props: PostReviewProps) => {
  const { open, onClose, setLocalReviews } = props;

  const postForm = (
    <PostForm open={open} onClose={onClose} setLocalReviews={setLocalReviews} />
  );

  return postForm;
};

interface StarProps {
  selected: boolean;
  onClick: () => void;
}

export const ReviewStar = (props: StarProps) => {
  const { selected, onClick } = props;

  return (
    <button aria-label="review-star" type="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={selected ? 'gold' : 'none'}
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="w-6 h-6"
        onClick={onClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    </button>
  );
};

export default PostReview;
