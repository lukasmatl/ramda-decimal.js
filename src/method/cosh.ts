import Decimal from 'decimal.js';
import {applyDecimalFunction} from "../util";

/**
 * Function to call Decimal.cosh method on one or array of decimals
 * @param n
 */
export const cosh = (n: Decimal.Value | Decimal.Value[]): Decimal | Decimal[] => applyDecimalFunction(n, (x: Decimal.Value) => Decimal.cosh(x));
