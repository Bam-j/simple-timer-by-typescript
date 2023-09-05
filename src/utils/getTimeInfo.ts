export const getTimeInfo = () => {
  const hour = (<HTMLInputElement>document.getElementById('hour-input')).value;
  const minute = (<HTMLInputElement>document.getElementById('minute-input')).value;
  const second = (<HTMLInputElement>document.getElementById('second-input')).value;

  return [Number(hour), Number(minute), Number(second)];
};