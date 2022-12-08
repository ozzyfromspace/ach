import { Dispatch, RefObject, SetStateAction } from 'react';
import { Option } from '.';
import {
  handleRadioClick,
  handleRadioKeyDown,
  HandleRadioProps,
} from './handlers';

export interface HiddenRadioInputProps
  extends Omit<HandleRadioProps, 'optionId'> {
  option: Option;
  focusedLabel: string;
  setFocusedLabel: Dispatch<SetStateAction<string>>;
  animationLock: boolean;
  inputRef: RefObject<HTMLInputElement> | undefined;
}

const HiddenRadioInput = (props: HiddenRadioInputProps) => {
  const { option, inputRef, animationLock, ...rest } = props;

  return (
    <input
      className="absolute top-0 left-0 opacity-0 w-[1px] h-[1px]"
      type="radio"
      id={option.id}
      onFocus={() => {
        if (!props.focusedLabel) {
          props.setFocusedLabel(() => option.id);
          return;
        }

        if (!animationLock) {
          props.setFocusedLabel(() => option.id);
          return;
        }
      }}
      name={option.group}
      value={option.name}
      ref={inputRef}
      defaultChecked={option.selected}
      onClick={handleRadioClick({
        ...rest,
        optionId: option.id,
      })}
      onKeyDown={handleRadioKeyDown({
        ...rest,
        optionId: option.id,
      })}
    />
  );
};

HiddenRadioInput.defaultProps = {
  inputRef: undefined,
};

export default HiddenRadioInput;
