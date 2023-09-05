import {startAndPauseButtonAction} from './Buttons/startAndPauseButtonAction';
import {resetButtonAction} from './Buttons/resetButtonAction';

document.addEventListener('DOMContentLoaded', () => {
  const startAndPauseButton = document.getElementById('startAndPauseButton');
  const resetButton = document.getElementById('resetButton');

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