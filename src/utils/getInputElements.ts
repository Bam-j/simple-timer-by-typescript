export const getInputElements = (): HTMLInputElement[] => {
  const hourInputFormElement = <HTMLInputElement>document.getElementById('hour-input');
  const minuteInputFormElement = <HTMLInputElement>document.getElementById('minute-input');
  const secondInputFormElement = <HTMLInputElement>document.getElementById('second-input');

  return [hourInputFormElement, minuteInputFormElement, secondInputFormElement];
};