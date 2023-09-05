import {getInputElements} from '../utils/getInputElements';
import {timerInterval} from '../TimerActions/timerAction';

export const resetButtonAction = () => {
  const [hourInputFormElement, minuteInputFormElement, secondInputFormElement] = getInputElements();

  hourInputFormElement.disabled = false;
  hourInputFormElement.value = '';
  minuteInputFormElement.disabled = false;
  minuteInputFormElement.value = '';
  secondInputFormElement.disabled = false;
  secondInputFormElement.value = '';

  (<HTMLButtonElement>document.getElementById('resetButton')).disabled = true;
  (<HTMLButtonElement>document.getElementById('startAndPauseButton')).innerText = 'start';

  clearInterval(timerInterval);
};