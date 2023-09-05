import {getTimeInfo} from '../utils/getTimeInfo';
import {checkInputValid} from '../utils/checkInputValid';
import {timerAction, timerInterval} from '../TimerActions/timerAction';
import {clearInterval} from 'timers';
import {getInputElements} from '../utils/getInputElements';

export const startAndPauseButtonAction = (startAndPauseButton: HTMLElement) => {
  const [hour, minute, second] = getTimeInfo();
  const [hourInputFormElement, minuteInputFormElement, secondInputFormElement] = getInputElements();
  let remainTotalSeconds: number;

  checkInputValid(hour, minute, second);

  hourInputFormElement.disabled = true;
  minuteInputFormElement.disabled = true;
  secondInputFormElement.disabled = true;

  (<HTMLButtonElement>document.getElementById('resetButton')).disabled = false;

  remainTotalSeconds = hour * 360 + minute * 60 + second;

  if (startAndPauseButton.innerText === 'start') {
    startAndPauseButton.innerText = 'pause';
    timerAction(remainTotalSeconds);
  }
  else {
    startAndPauseButton.innerText = 'start';
    clearInterval(timerInterval);
  }
};