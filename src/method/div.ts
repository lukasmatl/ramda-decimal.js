import Decimal from 'decimal.js';
import { curry } from 'ramda';

/**
 * Curried function to call div on two values.
 * @param x
 * @param y
 */
export const div = curry((x: Decimal.Value, y: Decimal.Value): Decimal  => Decimal.div(x,y));
