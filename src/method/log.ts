import Decimal from 'decimal.js';
import { curry } from 'ramda';

/**
 * Curried function to call log on two values.
 * @param x
 * @param y
 */
export const log = curry((x: Decimal.Value, y: Decimal.Value): Decimal  => Decimal.log(x,y));
