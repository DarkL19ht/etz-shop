import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
/* eslint-disable import/prefer-default-export */
export const delay = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
