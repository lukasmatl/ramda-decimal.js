import Decimal from 'decimal.js';
import {curry} from 'ramda';

/**
 * Function to call equals on two values.
 * @param x
 * @param y
 */
export const equals = curry((x: Decimal, y: Decimal): boolean => x.equals(y));
