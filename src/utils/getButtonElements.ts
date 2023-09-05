export const getButtonElements = (): HTMLButtonElement[] => {
  const startAndPauseButton = (<HTMLButtonElement>document.getElementById('startAndPauseButton'));
  const resetButton = (<HTMLButtonElement>document.getElementById('resetButton'));

  return [startAndPauseButton, resetButton];
};