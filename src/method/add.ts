import Decimal from 'decimal.js';
import { curry } from 'ramda';

/**
 * Curried function to call add on two values.
 * @param x
 * @param y
 */
export const add = curry((x: Decimal.Value, y: Decimal.Value): Decimal  => Decimal.add(x,y));
