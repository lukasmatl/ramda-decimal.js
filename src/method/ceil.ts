import Decimal from "decimal.js";
import {applyDecimalFunction} from "../util";

/**
 * Function to call Decimal.ceil method on one or array of decimals
 * @param n
 */
export const ceil = (n: Decimal.Value | Decimal.Value[]): Decimal | Decimal[] => applyDecimalFunction(n, Decimal.ceil);
