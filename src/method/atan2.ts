import Decimal from "decimal.js";
import {curry} from 'ramda';
/**
 * Curried function to call atan2 on two values.
 * @param x
 * @param y
 */
export const atan2 = curry((x: Decimal.Value, y: Decimal.Value ): Decimal => Decimal.atan2(x,y));
