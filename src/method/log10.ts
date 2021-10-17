import Decimal from 'decimal.js';
import {applyDecimalFunction} from "../util";

/**
 * Function to call Decimal.log10 method on one or array of decimals
 * @param n
 */
export const log10 = (n: Decimal.Value | Decimal.Value[]): Decimal | Decimal[] => applyDecimalFunction(n, (x: Decimal.Value) => Decimal.log10(x));
