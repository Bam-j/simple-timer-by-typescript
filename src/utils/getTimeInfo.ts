export const getTimeInfo = () => {
  const hour = document.getElementById('hour-input');
  const minute = document.getElementById('minute-input');
  const second = document.getElementById('second-input');

  return [Number(hour), Number(minute), Number(second)];
};