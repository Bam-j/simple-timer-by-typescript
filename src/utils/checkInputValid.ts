export const checkInputValid = (hour: number, minute: number, second: number): void => {
  let isValid: boolean = true;

  if (hour < 0 || minute < 0 || second < 0) {
    window.alert('유효한 입력값이 아닙니다. (음수 입력)');
    isValid = false;
  }
  else if (Number.isNaN(hour) || Number.isNaN(minute) || Number.isNaN(second)) {
    window.alert('유효한 입력값이 아닙니다. (숫자가 아닌 값 입력)');
    isValid = false;
  }

  if (!isValid) {
    (<HTMLInputElement>document.getElementById('input-hour')).value = '';
    (<HTMLInputElement>document.getElementById('input-minute')).value = '';
    (<HTMLInputElement>document.getElementById('input-second')).value = '';
  }
};