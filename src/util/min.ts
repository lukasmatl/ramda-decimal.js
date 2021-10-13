import Decimal from 'decimal.js';
import {flatten} from 'ramda';

/**
 * Function accepts multiple of arrays of decimals, flattens them and select min value
 * @param arrays
 */
export const min = (...arrays: Decimal.Value[]): Decimal => {
    const array = flatten(arrays);
    return Decimal.min(...array);
};
