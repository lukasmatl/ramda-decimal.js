import Decimal from 'decimal.js';
import { curry } from 'ramda';

/**
 * Curried function to call sub on two values.
 * @param x
 * @param y
 */
export const sub = curry((x: Decimal.Value, y: Decimal.Value): Decimal  => Decimal.sub(x,y));
