import Decimal from 'decimal.js';
import {applyDecimalFunction} from './applyDecimalFunction';

/**
 * Function to check if the value is decimal accept array or single value
 * @param n
 */
export const isDecimal = (n: Decimal.Value | Decimal.Value[]): boolean | boolean[] => applyDecimalFunction(n, (x: Decimal.Value) => Decimal.isDecimal(x));
