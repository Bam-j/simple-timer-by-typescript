import {startAndPauseButtonAction} from './Buttons/startAndPauseButtonAction';
import {resetButtonAction} from './Buttons/resetButtonAction';
import {getButtonElements} from './utils/getButtonElements';

document.addEventListener('DOMContentLoaded', () => {
  const [startAndPauseButton, resetButton] = getButtonElements();
  //const startAndPauseButton = <HTMLButtonElement>document.getElementById('startAndPauseButton');
  //const resetButton = <HTMLButtonElement>document.getElementById('resetButton');

  if (startAndPauseButton !== null) {
    startAndPauseButton.addEventListener('click', () => {
      startAndPauseButtonAction(startAndPauseButton);
    });
  }

  if (resetButton !== null) {
    resetButton.addEventListener('click', () => {
      resetButtonAction();
    });
  }
});