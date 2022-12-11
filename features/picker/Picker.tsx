import { AnimatePresence, motion, Variants } from 'framer-motion';
import { MutableRefObject, useRef, useState } from 'react';
import { Option } from '.';
import {
  handleButtonClick,
  handleButtonKeydown,
  handleExitComplete,
} from './handlers';
import OptionCard from './OptionCard';

interface PickerProps<
  O extends Option,
  T extends HTMLElement | null = HTMLElement | null
> {
  nextRef: MutableRefObject<T> | undefined;
  localRef: MutableRefObject<HTMLButtonElement | null>;
  options: O[];
  defaultOption: O;
  updateOptions: (resourceId: string) => void;
  label: string;
}

export enum LastAction {
  escape = 'escape',
  tab = 'tab',
  tabShift = 'tab_shift',
  enterOrSpace = 'enter_or_space',
  click = 'click',
  noregister = 'unknown or none',
}

const Picker = <O extends Option>(props: PickerProps<O>) => {
  const {
    nextRef,
    localRef,
    defaultOption: defaultResource,
    options: initOptions,
    updateOptions,
    label,
  } = props;

  const options = initOptions.length ? initOptions : [defaultResource];

  const [focusedLabel, setFocusedLabel] = useState(() => '');
  const selectedInput = useRef<HTMLInputElement>(null);
  const firstInput = useRef<HTMLInputElement>(null);
  const lastActionRef = useRef<LastAction>(LastAction.noregister);
  const [visible, setVisible] = useState(() => false);
  const [animationLock, setAnimationLock] = useState(() => true);

  const presentResource = (): O => {
    for (const option of options) {
      if (option.selected) {
        return option;
      }
    }

    return defaultResource;
  };

  return (
    <fieldset className="w-4/5 min-w-[20rem] max-w-screen-sm relative flex flex-col">
      <legend className="h-0 text-[0px]">{label}</legend>
      <span
        aria-hidden={true}
        className="text-base font-semibold text-black tracking-wide mt:text-center"
      >
        {label}
      </span>
      <div
        className="cursor-pointer bg-white flex flex-row justify-between p-3 pr-1 border-[1px] border-[hsla(0,0%,80%,100%)] rounded-md shadow-md shadow-[hsla(0,0%,90%,100%)] mt-[1.25rem]"
        onClick={() => {
          animationLock && setVisible(() => true);
        }}
      >
        <p
          className="cursor-pointer flex-1 text-gray-dark"
          onClick={() => {
            animationLock && setVisible(() => true);
          }}
        >
          {presentResource().name}
        </p>
        <button
          ref={localRef}
          onClick={handleButtonClick(setVisible)}
          onKeyDown={handleButtonKeydown(setVisible)}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-[hsl(228,16%,34%,100%)] hover:text-gray-dark"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={getChevronVariants(visible)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </motion.svg>
        </button>
      </div>
      <div className="relative z-[5] top-0 left-0 mt-2">
        <AnimatePresence
          onExitComplete={handleExitComplete({
            localRef,
            nextRef,
            lastActionRef,
            setAnimationLock,
          })}
        >
          {visible && (
            <section
              onBlur={(e) => {
                if (
                  !e.currentTarget.contains(e.relatedTarget) &&
                  e.relatedTarget !== localRef.current
                ) {
                  setVisible(() => false);
                }
              }}
              className="absolute top-0 left-0 w-full max-w-lg"
            >
              {options.map((option, index) => {
                const _isFocused = focusedLabel === option.id;
                const inputRef = option.selected
                  ? selectedInput
                  : index === 0
                  ? firstInput
                  : undefined;
                return (
                  <OptionCard
                    key={option.id}
                    _isFocused={_isFocused}
                    animationLock={animationLock}
                    firstInput={firstInput}
                    focusedLabel={focusedLabel}
                    index={index}
                    inputRef={inputRef}
                    lastActionRef={lastActionRef}
                    localRef={localRef}
                    nextRef={nextRef}
                    option={option}
                    optionsLength={options.length}
                    presentResourceId={presentResource().id}
                    selectedInput={selectedInput}
                    setAnimationLock={setAnimationLock}
                    setFocusedLabel={setFocusedLabel}
                    setVisible={setVisible}
                    updateOptions={updateOptions}
                  />
                );
              })}
            </section>
          )}
        </AnimatePresence>
      </div>
    </fieldset>
  );
};

export default Picker;

Picker.defaultProps = {
  nextRef: undefined,
};

const getChevronVariants = (visible: boolean): Variants => ({
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: visible ? 90 : 0,
    transition: {
      duration: 0.18,
      type: 'spring',
      bounce: 0.3,
    },
  },
  exit: {
    rotate: 0,
    transition: {
      duration: 0.18,
      type: 'spring',
      bounce: 0.3,
    },
  },
});
