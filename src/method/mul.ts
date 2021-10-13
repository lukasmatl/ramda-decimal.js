import Decimal from 'decimal.js';
import { curry } from 'ramda';

/**
 * Curried function to call mul on two values.
 * @param x
 * @param y
 */
export const mul = curry((x: Decimal.Value, y: Decimal.Value): Decimal  => Decimal.mul(x,y));
