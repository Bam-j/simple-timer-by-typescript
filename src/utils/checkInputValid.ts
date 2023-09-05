import {getInputElements} from './getInputElements';

export const checkInputValid = (hour: number, minute: number, second: number): void => {
  if (Number.isNaN(hour) || Number.isNaN(minute) || Number.isNaN(second)) {
    const [hourInputFormElement, minuteInputFormElement, secondInputFormElement] = getInputElements();

    window.alert('유효한 입력값이 아닙니다.');

    hourInputFormElement.value = '';
    minuteInputFormElement.value = '';
    secondInputFormElement.value = '';
  }
};