import {getTimeInfo} from '../utils/getTimeInfo';
import {checkInputValid} from '../utils/checkInputValid';

export const startAndPauseButtonAction = (startAndPauseButton: HTMLElement) => {
  const [hour, minute, second] = getTimeInfo();
  let remainTotalSeconds: number;

  checkInputValid(hour, minute, second);

  remainTotalSeconds = hour + minute + second;
};