import { isNumber, isNaN } from 'lodash';

export const formatNumber = (number, prefix = '') => {
  if (number === undefined) return `${prefix}0`;
  if (!isNumber(number)) return `${prefix}0`;
  if (isNaN(number)) return `${prefix}0`;
  return `${prefix}${String(number.toFixed(2))}`.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ',',
  );
};
