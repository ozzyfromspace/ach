import { motion, Variants } from 'framer-motion';
import { Dispatch, RefObject, SetStateAction, useRef } from 'react';
import { Option } from '.';
import { handleAnimationStart } from './handlers';
import HiddenRadioInput, { HiddenRadioInputProps } from './HiddenRadioInput';

interface OptionCardProps extends Omit<HiddenRadioInputProps, 'localRadioRef'> {
  option: Option;
  optionsLength: number;
  index: number;
  _isFocused: boolean;
  firstInput: RefObject<HTMLInputElement>;
  selectedInput: RefObject<HTMLInputElement>;
  presentResourceId: string;
  setAnimationLock: Dispatch<SetStateAction<boolean>>;
}

const OptionCard = (props: OptionCardProps) => {
  const {
    firstInput,
    selectedInput,
    presentResourceId,
    option,
    optionsLength,
    setAnimationLock,
    _isFocused,
    index,
    ...rest
  } = props;

  const labelRef = useRef<HTMLLabelElement>(null);

  return (
    <motion.div
      className={`relative top-0 left-0 w-full mb-1`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={optionVariants(69, index, optionsLength)}
      onAnimationStart={handleAnimationStart(
        firstInput,
        selectedInput,
        presentResourceId,
        optionsLength,
        option.id,
        index,
        setAnimationLock
      )}
      onMouseOver={() => {
        props.setFocusedLabel(() => option.id);
        labelRef.current?.focus();
      }}
      whileHover={{
        scale: 0.988,
        transition: {
          duration: 0.169,
        },
      }}
    >
      <label
        htmlFor={option.id}
        ref={labelRef}
        className={`cursor-pointer w-full block m-0 p-3 rounded-md hover:bg-[hsl(228,60%,52%,100%)] hover:text-white ${
          option.id === props.focusedLabel
            ? 'bg-[hsl(228,60%,52%,100%)] text-white'
            : 'bg-white border-[1px] border-[hsl(228,60%,22%,10%)] text-gray-link'
        }`}
      >
        {option.name}
      </label>
      <HiddenRadioInput {...rest} option={option} />
    </motion.div>
  );
};

export default OptionCard;

const optionVariants = (
  delayMs: number,
  index: number,
  listLength: number
): Variants => ({
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.28,
      type: 'spring',
      delay: (delayMs * index) / 1000,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.28,
      type: 'spring',
      delay: ((listLength - 1 - index) * delayMs) / 1000,
    },
  },
});
