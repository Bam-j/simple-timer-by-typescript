import {updateInput} from './updateInputs';
import {clearInterval} from 'timers';
import {getInputElements} from '../utils/getInputElements';

export let timerInterval: string | number | NodeJS.Timeout | undefined;

export const timerAction = (remainTotalSeconds: number) => {
  const [hourInputFormElement, minuteInputFormElement, secondInputFormElement] = getInputElements();

  timerInterval = setInterval(() => {
    remainTotalSeconds--;
    updateInput(remainTotalSeconds);

    if (remainTotalSeconds <= 0) {
      window.alert('시간 종료!');

      hourInputFormElement.disabled = false;
      minuteInputFormElement.disabled = false;
      secondInputFormElement.disabled = false;

      clearInterval(timerInterval);
    }
  }, 1000);
};