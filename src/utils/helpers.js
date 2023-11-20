/* eslint-disable import/prefer-default-export */
export const delay = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};
