import Decimal from 'decimal.js';
import {flatten} from 'ramda';

/**
 * Function accepts multiple of arrays of decimals, flattens them and select max value
 * @param arrays
 */
export const max = (...arrays: Decimal.Value[]): Decimal => {
    const array = flatten(arrays);
    return Decimal.max(...array);
};
