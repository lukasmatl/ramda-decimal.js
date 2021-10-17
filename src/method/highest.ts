import Decimal from 'decimal.js';
import {slice, compose, map, curry} from 'ramda'
import {checkAndInstantiateDecimal} from "../util";

/**
 * Function that finds the highest number of the last values of array defined by param length
 * @param length
 * @param array
 */
export const highest = curry((length: number, array: Decimal.Value[]): Decimal | null => {
    if (array.length < length || !length) return null;

    const subArray: Decimal[] = compose(
        map(checkAndInstantiateDecimal),
        slice(array.length-1-length, array.length-1)
    )(array);

    return Decimal.max(...subArray);
});
