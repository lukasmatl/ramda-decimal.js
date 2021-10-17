import Decimal from 'decimal.js';
import {curry} from 'ramda';

/**
 * Curried function to call clamp on two values.
 * @param x
 * @param y
 */
export const clamp = curry((min: Decimal.Value, max: Decimal.Value, n:Decimal.Value): Decimal => Decimal.clamp(n, min, max));
