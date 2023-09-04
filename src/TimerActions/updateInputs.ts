import {getTimeInfo} from '../utils/getTimeInfo';

export const updateInput = (remainTotalSeconds: number): void => {
  const [hour, minute, second] = getTimeInfo();

  const currentHour = Math.floor((remainTotalSeconds / 60) / 60);
  const currentMinute = Math.floor((remainTotalSeconds / 60) % 60);
  const currentSecond = Math.floor(remainTotalSeconds % 60);

  (<HTMLInputElement>document.getElementById('input-hour')).value = currentHour.toString();
  (<HTMLInputElement>document.getElementById('input-minute')).value = currentMinute.toString();
  (<HTMLInputElement>document.getElementById('input-second')).value = currentSecond.toString();
};