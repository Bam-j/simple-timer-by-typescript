import {startAndPauseButtonAction} from './Buttons/startAndPauseButtonAction';

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

    });
  }
});