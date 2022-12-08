import { MutableRefObject } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Picker, { OptionGroup } from '../picker';
import {
  EventPickerOption,
  eventSelector,
  updateSelectedJobModel,
} from './eventPickerSlice';

interface Props {
  localRef: MutableRefObject<HTMLButtonElement | null>;
  nextRef: MutableRefObject<HTMLButtonElement | null>;
  label: string;
}

const defaultOption: EventPickerOption = {
  name: 'Nothing selected',
  id: OptionGroup.EVENTS_GROUP,
  group: OptionGroup.EVENTS_GROUP,
  selected: false,
};

const EventPicker = (props: Props) => {
  const { localRef, nextRef, label } = props;
  const userJobModelOptions = useSelector(eventSelector);
  const dispatch = useDispatch();

  const updateOptions = (jobModelId: string) => {
    dispatch(updateSelectedJobModel(jobModelId));
  };

  return (
    <Picker
      label={label}
      localRef={localRef}
      nextRef={nextRef}
      updateOptions={updateOptions}
      defaultOption={defaultOption}
      options={userJobModelOptions}
    />
  );
};

export default EventPicker;

EventPicker.defaultProps = {
  nextRef: undefined,
  label: 'Pick one of your job models',
};
