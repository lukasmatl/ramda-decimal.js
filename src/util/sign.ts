import Decimal from 'decimal.js';
import {applyDecimalFunction} from './applyDecimalFunction';

/**
 * Function to call Decimal.sign method on one or array of decimals
 * @param n
 */
export const sign = (n: Decimal.Value | Decimal.Value[]): Decimal | Decimal[] => applyDecimalFunction(n, Decimal.sign);
