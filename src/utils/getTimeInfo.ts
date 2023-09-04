export const getTimeInfo = () => {
  const hour = document.getElementById('input-hour');
  const minute = document.getElementById('input-minute');
  const second = document.getElementById('input-second');

  if (hour !== null && minute !== null && second !== null) {
    return [Number(hour), Number(minute), Number(second)];
  }
};