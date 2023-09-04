import {getTimeInfo} from '../utils/getTimeInfo';
import {checkInputValid} from '../utils/checkInputValid';

export const startAndPauseButtonAction = (startAndPauseButton: HTMLElement) => {
  const [hour, minute, second] = getTimeInfo();
  let remainTotalSeconds: number;

  checkInputValid(hour, minute, second);

  (<HTMLInputElement>document.getElementById('input-hour')).disabled = true;
  (<HTMLInputElement>document.getElementById('input-minute')).disabled = true;
  (<HTMLInputElement>document.getElementById('input-second')).disabled = true;
  (<HTMLButtonElement>document.getElementById('resetButton')).disabled = false;

  remainTotalSeconds = hour * 360 + minute * 60 + second;

  if (startAndPauseButton.innerText === 'start') {
    startAndPauseButton.innerText = 'pause';
  }
  else {
    startAndPauseButton.innerText = 'start';
  }
};