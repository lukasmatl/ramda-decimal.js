import Decimal from 'decimal.js';
import {applyDecimalFunction} from './applyDecimalFunction';

/**
 * Function to call Decimal.trunc method on one or array of decimals
 * @param n
 */
export const trunc = (n: Decimal.Value | Decimal.Value[]): Decimal | Decimal[] => applyDecimalFunction(n, (x: Decimal.Value) => Decimal.trunc(x));
