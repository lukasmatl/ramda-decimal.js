import Decimal from 'decimal.js';
import {applyDecimalFunction} from "../util";

/**
 * Function to call Decimal.acosh method on one or array of decimals
 * @param n
 */
export const acosh = (n: Decimal.Value | Decimal.Value[]): Decimal | Decimal[] => applyDecimalFunction(n, (x: Decimal.Value) => Decimal.acosh(x));
