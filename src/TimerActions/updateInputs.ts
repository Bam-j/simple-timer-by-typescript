import {getInputElements} from '../utils/getInputElements';

export const updateInput = (remainTotalSeconds: number): void => {
  const [hourInputFormElement, minuteInputFormElement, secondInputFormElement] = getInputElements();

  const currentHour = Math.floor((remainTotalSeconds / 60) / 60);
  const currentMinute = Math.floor((remainTotalSeconds / 60) % 60);
  const currentSecond = Math.floor(remainTotalSeconds % 60);

  hourInputFormElement.value = `${currentHour}`;
  minuteInputFormElement.value = `${currentMinute}`;
  secondInputFormElement.value = `${currentSecond}`;
};