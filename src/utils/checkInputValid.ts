export const checkInputValid = (hour: number, minute: number, second: number): void => {
  if (Number.isNaN(hour) || Number.isNaN(minute) || Number.isNaN(second)) {
    window.alert('유효한 입력값이 아닙니다.');

    (<HTMLInputElement>document.getElementById('input-hour')).value = '';
    (<HTMLInputElement>document.getElementById('input-minute')).value = '';
    (<HTMLInputElement>document.getElementById('input-second')).value = '';
  }
};