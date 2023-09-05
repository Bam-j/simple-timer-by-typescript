import {getInputElements} from '../utils/getInputElements';
import {timerInterval} from '../TimerActions/timerAction';
import {getButtonElements} from '../utils/getButtonElements';

export const resetButtonAction = () => {
  const [hourInputFormElement, minuteInputFormElement, secondInputFormElement] = getInputElements();
  const [startAndPauseButton, resetButton] = getButtonElements();

  hourInputFormElement.disabled = false;
  hourInputFormElement.value = '';
  minuteInputFormElement.disabled = false;
  minuteInputFormElement.value = '';
  secondInputFormElement.disabled = false;
  secondInputFormElement.value = '';

  startAndPauseButton.innerText = 'start';
  resetButton.disabled = true;

  clearInterval(timerInterval);
};