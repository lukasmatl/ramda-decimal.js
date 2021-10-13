import Decimal from 'decimal.js';
import { curry } from 'ramda';

/**
 * Curried function to call pow on two values.
 * @param x
 * @param y
 */
export const pow = curry((x: Decimal.Value, y: Decimal.Value): Decimal  => Decimal.pow(x,y));
