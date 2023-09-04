import {getTimeInfo} from '../utils/getTimeInfo';
import {updateInput} from './updateInputs';
import {clearInterval} from 'timers';

export let timerInterval: string | number | NodeJS.Timeout | undefined;

export const timerAction = (remainTotalSeconds: number) => {
  const [hour, minute, second] = getTimeInfo();

  timerInterval = setInterval(() => {
    remainTotalSeconds--;
    updateInput(remainTotalSeconds);

    if (remainTotalSeconds <= 0) {
      window.alert('시간 종료!');

      (<HTMLInputElement>document.getElementById('input-hour')).disabled = false;
      (<HTMLInputElement>document.getElementById('input-minute')).disabled = false;
      (<HTMLInputElement>document.getElementById('input-second')).disabled = false;

      clearInterval(timerInterval);
    }
  }, 1000);
};