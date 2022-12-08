import {
  Dispatch,
  KeyboardEvent,
  MouseEvent,
  MutableRefObject,
  RefObject,
  SetStateAction,
} from 'react';
import { LastAction } from './Picker';

type _CLICK<T extends HTMLElement = HTMLButtonElement> = MouseEvent<T>;
type _KEYDOWN = KeyboardEvent<HTMLButtonElement>;
type SetVisible = (value: SetStateAction<boolean>) => void;

export const handleButtonClick =
  <T extends HTMLElement>(setVisible: SetVisible) =>
  (e: _CLICK<T>) => {
    e.preventDefault();
    const realClick = e.type === 'click' && e.clientX !== 0 && e.clientY !== 0;
    if (!realClick) return;

    setVisible((p) => !p);
  };

export const handleButtonKeydown =
  (setVisible: SetVisible) => (e: _KEYDOWN) => {
    const isSelect = e.code === 'Space' || e.code === 'Enter';
    if (!isSelect) return;

    setVisible((p) => !p);
  };

interface HandleExitCompleteProps {
  localRef: MutableRefObject<HTMLButtonElement | null>;
  nextRef: MutableRefObject<HTMLElement | null> | undefined;
  lastActionRef: MutableRefObject<LastAction>;
  setAnimationLock: Dispatch<SetStateAction<boolean>>;
}

export const handleExitComplete = (props: HandleExitCompleteProps) => {
  return () => {
    const { localRef, nextRef, lastActionRef, setAnimationLock } = props;

    setAnimationLock(() => true);

    const lastAction = lastActionRef.current;

    if (
      lastAction === LastAction.escape ||
      lastAction === LastAction.tabShift
    ) {
      localRef?.current?.focus();
      return;
    }

    if (
      lastAction === LastAction.enterOrSpace ||
      lastAction === LastAction.click ||
      lastAction === LastAction.tab
    ) {
      if (nextRef && nextRef.current) {
        nextRef.current.focus();
        return;
      }

      localRef.current?.focus();
      return;
    }

    lastActionRef.current = LastAction.noregister;
  };
};

export const handleAnimationStart = (
  firstInput: RefObject<HTMLInputElement>,
  selectedInput: RefObject<HTMLInputElement>,
  presentResourceId: string,
  optionsLength: number,
  optionId: string,
  optionIndex: number,
  setAnimationLock: Dispatch<SetStateAction<boolean>>
) => {
  return () => {
    setAnimationLock(() => false);

    if (optionId === presentResourceId) {
      selectedInput.current?.focus();
      return;
    }

    if (optionIndex === optionsLength - 1 && selectedInput.current === null) {
      firstInput.current?.focus();
      return;
    }
  };
};

export interface HandleRadioProps {
  localRef: MutableRefObject<HTMLButtonElement | null>;
  nextRef: MutableRefObject<HTMLElement | null> | undefined;
  lastActionRef: MutableRefObject<LastAction>;
  updateOptions: (jobModel: string) => void;
  setVisible: Dispatch<SetStateAction<boolean>>;
  setFocusedLabel: Dispatch<SetStateAction<string>>;
  optionId: string;
}

export const handleRadioClick = (props: HandleRadioProps) => {
  return (e: MouseEvent<HTMLInputElement>) => {
    const {
      localRef,
      nextRef,
      lastActionRef,
      setVisible,
      updateOptions,
      setFocusedLabel,
      optionId,
    } = props;
    const realClick = e.type === 'click' && e.clientX !== 0 && e.clientY !== 0;
    if (!realClick) return;

    lastActionRef.current = LastAction.click;

    setFocusedLabel(() => optionId);

    setTimeout(() => {
      updateOptions(optionId);
      setVisible(() => false);
      if (nextRef === undefined || nextRef?.current === undefined) {
        localRef.current?.focus();
        return;
      }
    }, 69);
    nextRef?.current?.focus();
  };
};

export const handleRadioKeyDown = (props: HandleRadioProps) => {
  return (e: KeyboardEvent<HTMLInputElement>) => {
    const {
      localRef,
      nextRef,
      lastActionRef,
      setVisible,
      updateOptions,
      setFocusedLabel,
      optionId,
    } = props;

    const isSelect = e.code === 'Space' || e.code === 'Enter';
    const isEscape = e.code === 'Escape';
    const isTab = e.code === 'Tab';

    if (isEscape) {
      lastActionRef.current = LastAction.escape;
      setTimeout(() => {
        setVisible(() => false);
      }, 69);
      return;
    }

    if (isTab && !e.shiftKey) {
      lastActionRef.current = LastAction.tab;
      return;
    }

    if (isTab && e.shiftKey) {
      lastActionRef.current = LastAction.tabShift;

      setTimeout(() => {
        setVisible(() => false);
      }, 69);

      return;
    }

    if (isSelect) {
      lastActionRef.current = LastAction.enterOrSpace;
    } else {
      lastActionRef.current = LastAction.noregister;
      return;
    }

    setFocusedLabel(() => optionId);

    setTimeout(() => {
      updateOptions(optionId);
      setVisible(() => false);

      if (nextRef === undefined || nextRef?.current === undefined) {
        localRef.current?.focus();
        return;
      }
      nextRef?.current?.focus();
    }, 69);
  };
};
