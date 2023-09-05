export const checkInputValid = (hour: number, minute: number, second: number): void => {
  if (Number.isNaN(hour) || Number.isNaN(minute) || Number.isNaN(second)) {
    window.alert('유효한 입력값이 아닙니다.');

    (<HTMLInputElement>document.getElementById('hour-input')).value = '';
    (<HTMLInputElement>document.getElementById('minute-input')).value = '';
    (<HTMLInputElement>document.getElementById('second-input')).value = '';
  }
};