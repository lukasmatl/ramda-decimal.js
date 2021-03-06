import Decimal from 'decimal.js';
import {applyDecimalFunction} from './applyDecimalFunction';

/**
 * Function to call toString method on one or array of decimals
 * @param n
 */
export const toString = (n: Decimal.Value | Decimal.Value[]): Decimal | Decimal[] => applyDecimalFunction(n, (x: Decimal) => x.toString());
