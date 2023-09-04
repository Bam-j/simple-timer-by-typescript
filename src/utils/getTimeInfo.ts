export const getTimeInfo = () => {
  const hour = document.getElementById('input-hour');
  const minute = document.getElementById('input-minute');
  const second = document.getElementById('input-second');

  return [Number(hour), Number(minute), Number(second)];
};