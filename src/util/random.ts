import Decimal from 'decimal.js';
import {times, curry} from 'ramda';

/**
 * Function to call Decimal.random method to create array of decimals
 * @param x
 * @param count
 */
export const random = curry((x: number, count: number): Decimal[] => times(() => Decimal.random(x), count));
