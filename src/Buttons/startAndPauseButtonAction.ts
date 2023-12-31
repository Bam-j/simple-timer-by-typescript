import {getTimeInfo} from '../utils/getTimeInfo';
import {checkInputValid} from '../utils/checkInputValid';
import {timerAction, timerInterval} from '../TimerActions/timerAction';
import {getInputElements} from '../utils/getInputElements';
import {getButtonElements} from '../utils/getButtonElements';

export const startAndPauseButtonAction = (startAndPauseButton: HTMLElement) => {
  const [hour, minute, second] = getTimeInfo();
  const [hourInputFormElement, minuteInputFormElement, secondInputFormElement] = getInputElements();
  const [ , resetButton] = getButtonElements();
  let remainTotalSeconds: number;

  checkInputValid(hour, minute, second);

  hourInputFormElement.disabled = true;
  minuteInputFormElement.disabled = true;
  secondInputFormElement.disabled = true;

  resetButton.disabled = false;

  remainTotalSeconds = hour * 60 * 60 + minute * 60 + second;

  if (startAndPauseButton.innerText === 'start') {
    startAndPauseButton.innerText = 'pause';
    timerAction(remainTotalSeconds);
  }
  else {
    startAndPauseButton.innerText = 'start';
    clearInterval(timerInterval);
  }
};