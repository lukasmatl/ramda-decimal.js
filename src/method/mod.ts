import Decimal from 'decimal.js';
import { curry } from 'ramda';

/**
 * Curried function to call mod on two values.
 * @param x
 * @param y
 */
export const mod = curry((x: Decimal.Value, y: Decimal.Value): Decimal  => Decimal.mod(x,y));
