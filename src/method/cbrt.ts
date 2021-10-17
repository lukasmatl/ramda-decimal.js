import Decimal from "decimal.js";
import {applyDecimalFunction} from "../util";

/**
 * Function to call Decimal.cbrt method on one or array of decimals
 * @param n
 */
export const cbrt = (n: Decimal.Value | Decimal.Value[]): Decimal | Decimal[] => applyDecimalFunction(n, (x: Decimal.Value) => Decimal.cbrt(x));
